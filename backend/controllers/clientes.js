const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Cliente = require('../models/cliente');



const clientesGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, clientes ] = await Promise.all([
        Cliente.countDocuments(query),
        Cliente.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        clientes
    });
}

const clientesPost = async(req, res = response) => {
    
    const { nombre, correo, password, dni,estado,telefono,direccion } = req.body;
    const cliente = new Cliente({ nombre, correo, password, dni,estado,telefono,direccion });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    cliente.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await cliente.save();

    res.json({
        cliente
    });
}

const clientesPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const cliente = await Cliente.findByIdAndUpdate( id, resto );

    res.json(cliente);
}

const clientesPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - ClientesPatch'
    });
}

const clientesDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const Cliente = await Cliente.findByIdAndDelete( id );

    const cliente = await Cliente.findByIdAndUpdate( id, { estado: false } );


    res.json(cliente);
}




module.exports = {
    clientesGet,
    clientesPost,
    clientesPut,
    clientesPatch,
    clientesDelete,
}