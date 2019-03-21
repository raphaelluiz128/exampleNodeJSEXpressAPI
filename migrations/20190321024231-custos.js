'use strict';
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    

    return queryInterface.createTable('custos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      origin: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      destiny: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('custos');
  }
};
