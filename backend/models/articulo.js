
const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatorio']
    },
    precio_venta: {
        type: Number,
        required: [true, 'El Precio de Venta es obligatoria'],
    },
    precio_compra: {
        type: Number,
        required: [true, 'El Precio de Compra es obligatoria'],
    },
    img: {
        type: String,
    },
    categoria : {
        type: Schema.Types.ObjectId,
        ref:'categoria'
    },
    estado: {
        type: Boolean,
        default: true
    },
});


//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Articulo', ArticuloSchema );
