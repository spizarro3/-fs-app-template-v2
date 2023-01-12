const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});

Product.prototype.updateQuantity = function (quantity) {
    this.quantity = this.quantity - quantity;
    this.save();
};

Product.prototype.addQuantity = function (quantity) {
    this.quantity = this.quantity + quantity;
    this.save();
};

Product.prototype.updatePrice = function (price) {
    this.price = price;
    this.save();
};


module.exports = Product;
