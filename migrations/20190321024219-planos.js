'use strict';
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.createTable('planos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      time: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      percent: {
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
    return queryInterface.dropTable('planos');
  }
};
