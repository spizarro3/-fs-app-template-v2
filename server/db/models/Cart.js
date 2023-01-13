const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  totalQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: [],
  },
});

Cart.prototype.updateTotal = function () {
  this.totalQuantity = this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity;
  }, 0);
  this.totalPrice = this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity * product.price;
  }, 0);
};

Cart.prototype.addItem = function () {
  this.items.push(product.id);
};
  
Cart.prototype.removeItem = function () {
  this.items = this.items.filter((item) => item !== product.id);
};


module.exports = Cart;
