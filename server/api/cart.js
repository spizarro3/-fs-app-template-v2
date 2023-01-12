const router = require("express").Router();
module.exports = router;

const { models: {Product, Cart} } = require("../db");

// All products route
router.get("/", async (req, res, next) => {
  try {
    const products = await Cart.findAll({where : {userId : req.user.id}});
    res.send(products);
  } catch (error) {
    console.log("Error in all products route");
    next(error);
  }
});

router.delete("/:cartId", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    res.send( await cart.destroy());
  } catch (error) {
    console.log("Error in delete cart route");
    next(error);
  }
});
