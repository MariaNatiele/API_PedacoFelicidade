const Sequelize = require('sequelize') ;
const database = require('../config/database.js') ;
const Produtos = require('../models/produtos.js') ;


const conection = new Sequelize('bdsitedoces','root', '@lotus25', 
    { dialect:'mysql', 
    host:'localhost'}
    );


//Produtos.init(conection);
//Produtos(conection);
module.exports = conection;
/*
try{
    conection.authenticate();
    console.log('Conecção estabelecida com sucesso.');
}catch(error){
    console.error('Conecção não estabelecida:', error);
}*/
/*conection.close();*/
