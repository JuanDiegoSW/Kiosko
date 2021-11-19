
const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    },
    
});
//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Categoria', CategoriaSchema );
