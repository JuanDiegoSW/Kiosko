const Role = require('../models/role');
const Proveedor = require('../models/proveedor');

const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Proveedor.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}
const rucExiste = async( ruc = '' ) => {

    // Verificar si el correo existe
    const existeRUC = await Proveedor.findOne({ ruc });
    if ( existeRUC ) {
        throw new Error(`El ruc: ${ ruc }, ya está registrado`);
    }
}
const existeProveedorPorId = async( id ) => {

    // Verificar si el correo existe
    const existeProveedor = await Proveedor.findById(id);
    if ( !existeProveedor ) {
        throw new Error(`El id del proveedor no existe ${ id }`);
    }
}
 /***************Categorias***************/

 const existeCategoriaPorId = async( id ) => {

    // Verificar si el correo existe
    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id de cetegoria no existe ${ id }`);
    }
}


module.exports = {
    esRoleValido,
    rucExiste,
    emailExiste,
    existeProveedorPorId,
    existeCategoriaPorId
}

