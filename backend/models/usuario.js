
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    dni: {
        type: Number,
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE','CLIENT_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    telefono:{
        type:Number,
    },
    direccion:{
        type:String,
    }
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Usuario', UsuarioSchema );
