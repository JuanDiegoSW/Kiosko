
const { Schema, model } = require('mongoose');

const VentasSchema = Schema({
    usuario : {
        type: Schema.Types.ObjectId,
        ref:'cliente'
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatorio']
    },
    total:{
        type:Number,
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
module.exports = model( 'Ventas', VentasSchema );
