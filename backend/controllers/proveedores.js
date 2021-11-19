const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Proveedor = require('../models/proveedor');



const proveedoresGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, proveedores ] = await Promise.all([
        Proveedor.countDocuments(query),
        Proveedor.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        proveedores
    });
}

const proveedoresPost = async(req, res = response) => {
    
    const { ruc, nombre, direccion, telefono, email } = req.body;
    const proveedores = new Proveedor({ ruc, nombre, direccion, telefono, email });

    // Encriptar la contraseña
    //const salt = bcryptjs.genSaltSync();
    //usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await proveedores.save();

    res.json({
        proveedores
    });
}

const proveedoresPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    /*if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }*/

    const proveedor = await Proveedor.findByIdAndUpdate( id, resto );

    res.json(proveedor);
}

const proveedoresPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - proveedorPatch'
    });
}

const proveedoresDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const proveedor = await Proveedor.findByIdAndUpdate( id, { estado: false } );


    res.json(proveedor);
}




module.exports = {
    proveedoresGet,
    proveedoresPost,
    proveedoresPut,
    proveedoresPatch,
    proveedoresDelete,
}