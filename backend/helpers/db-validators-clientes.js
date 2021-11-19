const Role = require('../models/role');
const Cliente = require('../models/cliente');
//const Categoria = require('../models/categoria');



const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Cliente.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}
const dniExiste = async( dni = '' ) => {

    // Verificar si el correo existe
    const existeEDNI = await Cliente.findOne({ dni });
    if ( existeEDNI ) {
        throw new Error(`El DNI: ${ dni }, ya está registrado`);
    }
}

const existeClientePorId = async( id ) => {

    // Verificar si el correo existe
    const existeCliente = await Cliente.findById(id);
    if ( !existeCliente ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    dniExiste,
    emailExiste,
    existeClientePorId,
    //existeCategoriaPorId
}

