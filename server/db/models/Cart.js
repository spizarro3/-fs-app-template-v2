const Sequelize = require('sequelize')
const db = require('../db')


const Cart = db.define('cart', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
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
