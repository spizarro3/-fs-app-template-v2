const router = require("express").Router();
module.exports = router;

const {
  models: { Product, Cart },
} = require("../db");

// Update product route
router.put("/products/:productId", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      res.send(await product.update(req.body));
    } catch (error) {
      console.log("Error in update product route");
      next(error);
    }
  });

  // Delete product route
  router.delete("/products/:productId", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      res.send( await product.destroy());
    } catch (error) {
      console.log("Error in delete product route");
      next(error);
    }
  });
