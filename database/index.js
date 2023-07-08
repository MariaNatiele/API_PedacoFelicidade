const Sequelize = require('sequelize');


const conection = new Sequelize('bdWebSite','root', '@lotus25', 
    { dialect:'mysql', 
    host:'localhost'}
    );



module.exports = conection;



