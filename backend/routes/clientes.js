
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { dniExiste, emailExiste, existeClientePorId } = require('../helpers/db-validators-clientes');

const { clientesGet,
        clientesPut,
        clientesPost,
        clientesDelete,
        clientesPatch } = require('../controllers/clientes');

const router = Router();


router.get('/', clientesGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeClientePorId ),
    check('dni','El DNI debe tner 8 digitos').isLength({max:8, min:8}),
    check('telefono','El telefono debe tener 9 digitos').isLength({max:9,min:9}),
    validarCampos
],clientesPut );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    check('dni').custom( dniExiste ),
    check('dni','El DNI debe tner 8 digitos').isLength({max:8, min:8}),
    check('telefono','El telefono debe tener 9 digitos').isLength({max:9,min:9}),
    validarCampos
], clientesPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeClientePorId ),
    validarCampos
],clientesDelete );

router.patch('/', clientesPatch );





module.exports = router;