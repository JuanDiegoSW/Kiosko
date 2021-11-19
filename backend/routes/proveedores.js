
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { rucExiste,emailExiste, existeProveedorPorId } = require('../helpers/db-validators-proveedores');

const { proveedoresGet,
        proveedoresPut,
        proveedoresPost,
        proveedoresDelete,
        proveedoresPatch } = require('../controllers/proveedores');

const router = Router();


router.get('/', proveedoresGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeProveedorPorId ),
    check('telefono','El telefono debe tener 9 digitos').isLength({max:9,min:9}),
    validarCampos
],proveedoresPut );

router.post('/',[
    check('ruc', 'El RUC debe tener 11 digitos').isLength({ min: 11, max:11 }),
    check('ruc').custom( rucExiste ),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatorio').not().isEmpty(),
    check('telefono','El telefono debe tener 9 digitos').isLength({max:9,min:9}),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( emailExiste ),
    validarCampos
], proveedoresPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeProveedorPorId ),
    validarCampos
],proveedoresDelete );

router.patch('/', proveedoresPatch );


module.exports = router;