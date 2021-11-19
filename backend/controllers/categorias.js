const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Categoria = require('../models/categoria');



const categoriasGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, categorias ] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        categorias
    });
}

const categoriasPost = async(req, res = response) => {
    
    const { nombre,img,estado } = req.body;
    const categoria = new Categoria({ nombre,img,estado });
    

    // Encriptar la contraseña
    //const salt = bcryptjs.genSaltSync();
    //Categoria.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await categoria.save();

    res.json({
        categoria
    });
}

const categoriasPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;
    /*
    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }*/

    const categoria = await Categoria.findByIdAndUpdate( id, resto );

    res.json(categoria);
}

const categoriasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - categoriasPatch'
    });
}

const categoriasDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const Categoria = await Categoria.findByIdAndDelete( id );

    const categoria = await Categoria.findByIdAndUpdate( id, { estado: false } );


    res.json(categoria);
}




module.exports = {
    categoriasGet,
    categoriasPost,
    categoriasPut,
    categoriasPatch,
    categoriasDelete,
}