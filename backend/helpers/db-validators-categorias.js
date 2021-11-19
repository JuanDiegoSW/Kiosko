const Role = require('../models/role');
const Categoria = require('../models/categoria');


 /***************Categorias***************/

 const existeCategoriaPorId = async( id ) => {

    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id de cetegoria no existe ${ id }`);
    }
}
const nombreExiste = async( nombre = '' ) => {
    
    const nombreExiste = await Categoria.findOne({ nombre });
    if ( nombreExiste ) {
        throw new Error(`El categoria : ${ nombre } , ya está registrado`);
    }
}


module.exports = {
    existeCategoriaPorId,
    nombreExiste
}

