/*'use strict';


  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('armazena', {
        fields: ['id'], // Nome da coluna que será a FK
        type: 'foreign key',
        name: 'fk_armazena', // Nome da chave estrangeira (opcional)
        references: {
          table: 'cadastros', // Nome da tabela referenciada
          field: 'id' // Nome da coluna referenciada
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        references: {
          model: 'usuarios', // Nome da tabela referenciada
          key: 'id' // Nome da coluna referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      });
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('armazena', 'fk_armazena');
    }
  };
  */
  

