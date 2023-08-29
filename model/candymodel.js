// models/candy.js
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Candy = sequelize.define('candy', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quan: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Candy;
