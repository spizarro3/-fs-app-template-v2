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

Cart.prototype.updateTotal = function() {
  this.totalQuantity = this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity
  }, 0)
  this.totalPrice = this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity * product.price
  }, 0)
}


module.exports = Cart
