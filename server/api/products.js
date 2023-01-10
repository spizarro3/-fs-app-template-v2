const router = require("express").Router();
module.exports = router;

const { Product, Cart } = require("../db");

// All products route
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: Cart });
    res.send(products);
  } catch (error) {
    console.log("Error in all products route");
    next(error);
  }
});

// Single product route
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: Cart,
    });
    res.send(product);
  } catch (error) {
    console.log("error in single product route");
    next(error);
  }
});

// create product route
router.post("/", async (req, res, next) => {
  try {
    const { product } = await Product.create(req.body);
    res.send(product);
  } catch (error) {
    console.log("error in post product route");
    next(error);
  }
});

// Update product route
router.put("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(await product.update(req.body));
  } catch (error) {
    console.log("Error in update product route");
    next(error);
  }
});

// Delete product route
router.delete(":productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    await product.destroy();
    res.send(product);
  } catch (error) {
    console.log("Error in delete product route");
    next(error);
  }
});
