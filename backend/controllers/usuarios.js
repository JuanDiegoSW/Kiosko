const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');



const usuariosGet = async(req,res) => {

    //const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    
    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
    ]);

    return res.json(usuarios)
    /*
    res.json({
        total,
        usuarios
    });*/
}

const usuariosPostLogin = async (req, res) => {
    const { correo, password } = req.body;
    
    const usuario = await Usuario.findOne({correo});
    if (!usuario) return res.status(401).send('The email doen\' exists');
    if (usuario.password !== password) return res.status(401).send('Wrong Password');
    
        const token = jwt.sign({_id: usuario._id}, 'secretkey');

        return res.status(200).json({token});    
}

const usuariosPost = async(req, res = response) => {
    
    const { nombre, correo, password,dni , rol, img,estado, telefono,direccion } = req.body;
    const usuario = new Usuario({ nombre, correo, password,dni , rol, img,estado, telefono,direccion });

    // Encriptar la contraseña
    //const salt = bcryptjs.genSaltSync();
    //usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    const usuario = await Usuario.findByIdAndDelete( id );

    //const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );


    res.json(usuario);
}
const usuariosPostRegister = async (req, res) => {
    const { email, password } = req.body;
    const newUsuario = new Usuario({nombre, correo, password,dni , rol, img,estado, telefono,direccion});
    await newUsuario.save();
		const token = await jwt.sign({_id: newUsuario._id}, 'secretkey');
    res.status(200).json({token});
};

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
        //console.log(payload)
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}



module.exports = {
    usuariosGet,
    verifyToken,
    usuariosPost,
    usuariosPut,
    usuariosPostLogin,
    usuariosPostRegister,
    usuariosPatch,
    usuariosDelete,
}