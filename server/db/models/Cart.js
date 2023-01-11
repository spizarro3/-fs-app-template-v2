const Sequelize = require('sequelize')
const db = require('../db')


const Cart = db.define('cart', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  totalQuantity: { 
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
})

module.exports = Cart
