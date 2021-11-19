const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Venta = require('../models/venta');



const ventasGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, ventas ] = await Promise.all([
        Venta.countDocuments(query),
        Venta.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        ventas
    });
}

const ventasPost = async(req, res = response) => {
    //console.log (req.body)
    const { usuario, fecha, total, estado} = req.body;
    const ventas = new Venta({ usuario, fecha, total, estado });

    // Guardar en BD
    await ventas.save();

    res.json({
        ventas
    });
}

const ventasPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, usuario, ...resto } = req.body;

    

    const venta = await Venta.findByIdAndUpdate( id, resto );

    res.json(venta);
}

const ventasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - ventasPatch'
    });
}

const ventasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const Venta = await Venta.findByIdAndDelete( id );

    const Venta = await Venta.findByIdAndUpdate( id, { estado: false } );


    res.json(Venta);
}




module.exports = {
    ventasGet,
    ventasPost,
    ventasPut,
    ventasPatch,
    ventasDelete,
}
