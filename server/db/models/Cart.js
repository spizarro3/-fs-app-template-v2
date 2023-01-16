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

Cart.prototype.addItem = async function (productId) {
  const product = await this.getProduct(productId);
  if (product) {
    await product.cartProduct.increment("quantity");
  } else {
    await this.addProduct(productId, { through: { quantity: 1 } });
  }
  await this.updateTotal();
};



module.exports = Cart;
