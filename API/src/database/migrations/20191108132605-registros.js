'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      motorista_id: {
        type: Sequelize.INTEGER,
        references: { model: 'motoristas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        allowNull: false,
      },
      data_saida: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      previsao_dias: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      localizacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_locacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      container_pes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nivel: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('registros');
  }
};
