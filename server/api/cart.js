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
