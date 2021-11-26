const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Articulo = require('../models/articulo');



const articulosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    /*
    const [ total, articulos ] = await Promise.all([
        Articulo.countDocuments(query),
        Articulo.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);*/
    const articulos = await Articulo.find()
    return res.json(articulos)
}

const articulosPost = async(req, res = response) => {
    //console.log (req.body)
    const { nombre, cantidad, precio_venta, precio_compra,img,categoria,estado} = req.body;
    const articulos = new Articulo({ nombre, cantidad, precio_venta, precio_compra,img,categoria,estado });

    // Guardar en BD
    await articulos.save();

    res.json({
        articulos
    });
}

const articulosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, nombre, ...resto } = req.body;

    

    const articulo = await Articulo.findByIdAndUpdate( id, resto );

    res.json(articulo);
}

const articulosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - articulosPatch'
    });
}

const articulosDelete = async(req, res = response) => {

    const { id } = req.params;

    //Fisicamente lo borramos
    const articulo = await Articulo.findByIdAndDelete( id );

    //const Articulo = await Articulo.findByIdAndUpdate( id, { estado: false } );


    res.json(articulo);
}




module.exports = {
    articulosGet,
    articulosPost,
    articulosPut,
    articulosPatch,
    articulosDelete,
}
