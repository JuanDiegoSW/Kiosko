
const { Schema, model } = require('mongoose');

const DetalleVentaSchema = Schema({
    articulo : {
        type: Schema.Types.ObjectId,
        ref:'articulo'
    },
    venta: {
        type: Schema.Types.ObjectId,
        ref:'venta'
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria'],
    },
    precioArticulo:{
        type:Number
    },estado: {
        type: Boolean,
        default: true
    },
});



/*UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}*/

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Detalle_venta', DetalleVentaSchema );
