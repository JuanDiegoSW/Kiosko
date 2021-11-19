const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/v1/usuarios';
        this.categoriaPath = '/api/v1/categorias';
        this.clientePath = '/api/v1/clientes';
        this.articulosPath = '/api/v1/articulos';
        this.proveedorPath = '/api/v1/proveedores';
        this.ventasPath = '/api/v1/ventas';
        this.detalleVentaPath = '/api/v1/detalleventas';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.articulosPath, require('../routes/articulos'));
        this.app.use( this.categoriaPath, require('../routes/categorias'));
        this.app.use( this.clientePath, require('../routes/clientes'));
        this.app.use( this.proveedorPath, require('../routes/proveedores'));
        this.app.use( this.ventasPath, require('../routes/ventas'));
        this.app.use( this.detalleVentaPath, require('../routes/detalle_ventas'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
