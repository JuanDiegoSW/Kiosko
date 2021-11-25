
const { Schema, model } = require('mongoose');

const ProveedorSchema = Schema({
    ruc: {
        type: Number,
        required: [true, 'El ruc es obligatorio'],
        unique:true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre de proveedor es obligatorio'],
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
    },
    telefono : {
        type: Number,
        required: [true, 'El telefono del proveedor es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
});


/*
UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}*/

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Proveedor', ProveedorSchema );
