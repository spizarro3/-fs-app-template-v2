const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cartProduct", {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

CartProduct.prototype.updateQuantity = async function () {
  this.quantity = await this.products.reduce((acc, product) => {
    return acc + product.cartProduct.quantity;
  }, 0);
};

module.exports = CartProduct
