
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existeCategoriaPorId, nombreExiste } = require('../helpers/db-validators-categorias');

const { categoriasGet,
        categoriasPut,
        categoriasPost,
        categoriasDelete,
        categoriasPatch } = require('../controllers/categorias');

const router = Router();


router.get('/', categoriasGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),    
    //check('rol').custom( esRoleValido ), 
    validarCampos
],categoriasPut );

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(nombreExiste),
    validarCampos,    
], categoriasPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos
],categoriasDelete );

router.patch('/', categoriasPatch );





module.exports = router;