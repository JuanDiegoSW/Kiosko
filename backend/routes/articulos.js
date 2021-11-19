
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existeArticuloId,existeCategoriaId } = require('../helpers/db-validators-articulos');

const { articulosGet,
        articulosPut,
        articulosPost,
        articulosDelete,
        articulosPatch } = require('../controllers/articulos');

const router = Router();


router.get('/', articulosGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeArticuloId ),
    validarCampos
],articulosPut );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatoria').not().isEmpty(),
    check('precio_venta', 'El precio de venta es obligatoria').not().isEmpty(),
    check('precio_compra', 'El precio de compra es obligatoria').not().isEmpty(),
    check('categoria').custom(existeCategoriaId),
    validarCampos
], articulosPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeArticuloId ),
    validarCampos
],articulosDelete );

router.patch('/', articulosPatch );


module.exports = router;