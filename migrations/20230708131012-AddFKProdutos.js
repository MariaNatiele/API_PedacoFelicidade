/*'use strict';


  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('produtos', {
        fields: ['id'], // Nome da coluna que será a FK
        type: 'foreign key',
        name: 'fk_produtos_usuarioId', // Nome da chave estrangeira (opcional)
        references: {
          table: 'usuarios', // Nome da tabela referenciada
          field: 'id' // Nome da coluna referenciada
        },
        onDelete: 'CASCADE', // Ação a ser realizada ao excluir o registro referenciado
        onUpdate: 'CASCADE' // Ação a ser realizada ao atualizar o registro referenciado
      });
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint('produtos', 'fk_produtos_usuarioId');
    }
  };*/
  
