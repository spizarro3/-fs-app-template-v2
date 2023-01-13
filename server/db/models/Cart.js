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
});

Cart.prototype.updateTotal = async function () {
  this.totalQuantity = await this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity;
  }, 0);
  this.totalPrice = await this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity * product.price;
  }, 0);
};

Cart.prototype.addItem = async function (product) {
  await this.items.push(product.id);
};
  
Cart.prototype.removeItem = async function (product) {
  this.items = await this.items.filter((item) => item !== product.id);
};


module.exports = Cart;
