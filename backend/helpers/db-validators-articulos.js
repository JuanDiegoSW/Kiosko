const Role = require('../models/role');
const Articulo = require('../models/articulo');
const Categoria = require('../models/categoria');

const existeCategoriaId = async( id ) => {

    // Verificar si el correo existe
    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id no existe ${ id }`);
    }
}
const existeArticuloId = async( id ) => {

    // Verificar si el correo existe
    const existeArticuloId = await Articulo.findById(id);
    if ( !existeArticuloId ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    existeArticuloId,
    existeCategoriaId
}

