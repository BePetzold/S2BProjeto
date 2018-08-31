/*

CLASSE DE CONEXÃO MONGODB

Para testes banco local
    #mongodb: //localhost/eventosPoa
Para manter a mesma base de dados para a dupla vamos de Mlab!
    #mongodb://<dbuser>:<dbpassword>@ds133920.mlab.com:33920/eventospoa

*/
require('dotenv').load();
const mongoose = require('mongoose');
const server   = process.env.DB_SERV;
const database = 'poanarua';
const dbUser   = process.env.DB_USER;
const dbPass   = process.env.DB_PASS;

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        //mongoose.connect(`mongodb://${dbUser}:${dbPass}${server}/${database}`)
        mongoose.connect(`mongodb://localhost/poanarua`)
            .then(() => {
                console.log('Vc esta conectado ao MONGOLAB....✌');
                
                
            })
            .catch((err) => {
                console.error('Erro ao conectar ao MongoDb!')
                console.log(err);
                
            })                      
    }
};
/*
mongodb: //<dbuser>:<dbpassword>@ds153380.mlab.com:53380/poanarua

// locaispoa nova collection
*/
module.exports = new Database()