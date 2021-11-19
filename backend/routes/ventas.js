
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators-articulos');

const { ventasGet,
        ventasPost,
        ventasPut,
        ventasPatch,
        ventasDelete } = require('../controllers/ventas');

const router = Router();


router.get('/', ventasGet );

router.put('/:id',[
    /*check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ), 
    validarCampos*/
],ventasPut );

router.post('/',[
    /*check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ), 
    validarCampos*/
], ventasPost );

router.delete('/:id',[
    /*check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos*/
],ventasDelete );

router.patch('/', ventasPatch );


module.exports = router;