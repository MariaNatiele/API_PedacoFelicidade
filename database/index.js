const Sequelize = require('sequelize');


const conection = new Sequelize('bdsitedoces','root', '@lotus25', 
    { dialect:'mysql', 
    host:'localhost'}
    );



module.exports = conection;



