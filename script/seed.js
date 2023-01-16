const faker = require("faker");
const {
  db,
  models: { User, Product, Cart },
} = require("../server/db/index.js");

const seed = async () => {
  await db.sync({ force: true });
  console.log("db synced!");
  for (let i = 0; i <= 100; i++) {
    const newUser = await User.create({
      username: faker.internet.userName(),
      password: faker.internet.password(),
    });
    const newCart = await Cart.create({userId : newUser.id});
    await Product.create({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.imageUrl(),  
      quantity : Math.floor(Math.random() * 100),   
    });
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
