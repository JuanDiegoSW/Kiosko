const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Venta = require('../models/detalle_venta');



const detalleventasGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, detalleventas ] = await Promise.all([
        Venta.countDocuments(query),
        Venta.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        detalleventas
    });
}

const detalleventasPost = async(req, res = response) => {
    //console.log (req.body)
    const { articulo, venta, cantidad, precioArticulo, estado} = req.body;
    const detalleventas = new Venta({ articulo, venta, cantidad, precioArticulo, estado });

    // Guardar en BD
    await detalleventas.save();

    res.json({
        detalleventas
    });
}

const detalleventasPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, usuario, ...resto } = req.body;

    

    const venta = await Venta.findByIdAndUpdate( id, resto );

    res.json(venta);
}

const detalleventasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - detalleventasPatch'
    });
}

const detalleventasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const Venta = await Venta.findByIdAndDelete( id );

    const Venta = await Venta.findByIdAndUpdate( id, { estado: false } );


    res.json(Venta);
}




module.exports = {
    detalleventasGet,
    detalleventasPost,
    detalleventasPut,
    detalleventasPatch,
    detalleventasDelete,
}
