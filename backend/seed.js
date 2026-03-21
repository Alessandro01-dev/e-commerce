const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./modules/user/user.schema');
const Product = require('./modules/product/product.schema');
const Review = require('./modules/review/review.schema');

const usersData = require('./usersData');
const productsData = require('./productsData');
const reviewsData = require('./reviewsData');

mongoose.set('debug', false);

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB Atlas...");

    console.log("Cleaning existing data...");
    await User.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});

    console.log("Seeding users...");
    const createdUsers = [];
    for (let u of usersData) {
      const newUser = new User(u);
      await newUser.save();
      createdUsers.push(newUser);
    }
    console.log(`${createdUsers.length} users created.`);

    console.log("Preparing products...");
    const productsToCreate = productsData.map((prod, i) => ({
      ...prod,
      userId: createdUsers[i % createdUsers.length]._id
    }));

    const createdProducts = await Product.insertMany(productsToCreate);
    console.log(`${createdProducts.length} products created.`);

    console.log("Linking reviews with duplicate protection logic...");
    const dataToMap = Array.isArray(reviewsData) ? reviewsData : reviewsData.reviewsData;

    const usedPairs = new Set();

    const linkedReviews = dataToMap.map(rev => {
      let userIdx = rev.userIdx;
      let productId = createdProducts[rev.productIdx]._id;

      while (usedPairs.has(`${userIdx % createdUsers.length}-${productId}`)) {
        userIdx++;
      }

      const finalUserIdx = userIdx % createdUsers.length;
      usedPairs.add(`${finalUserIdx}-${productId}`);

      return {
        comment: rev.comment,
        rating: rev.rating,
        userId: createdUsers[finalUserIdx]._id,
        productId: productId
      };
    });

    console.log("Inserting all 2500 reviews...");
    await Review.insertMany(linkedReviews);

    console.log("Calculating average ratings (please wait about 30s)...");

    const savedReviews = await Review.find({});

    for (const product of createdProducts) {
      const productReviews = savedReviews.filter(r => r.productId.equals(product._id));
      const count = productReviews.length;
      const rate = count > 0
        ? (productReviews.reduce((acc, r) => acc + r.rating, 0) / count).toFixed(1)
        : 0;

      await Product.findByIdAndUpdate(product._id, {
        'rating.rate': Number(rate),
        'rating.count': count
      });
    }

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDB();