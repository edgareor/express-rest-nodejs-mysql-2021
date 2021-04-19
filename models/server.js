const express = require('express');
const cors = require('cors');
const { db } = require('../db/connection');

class Server {
    constructor() {
        this.app = express();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Connection BD Successfully');
        } catch (err) {
            throw new Error(err);
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api', require('../routes/routes'));
    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Levantando puerto: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;