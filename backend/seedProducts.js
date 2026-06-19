const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Onigiri",
    japaneseName: "おにぎり",
    category: "Snack",
    price: 150,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1580150946326-6c4f4a58b8c8",
    description: "Traditional Japanese rice ball.",
    vegetarian: true,
    vegan: true,
    mustTry: true,
  },

  {
    name: "Matcha KitKat",
    japaneseName: "抹茶キットカット",
    category: "Snack",
    price: 220,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    description: "Famous Japanese matcha flavored KitKat.",
    vegetarian: true,
    vegan: false,
    mustTry: true,
  },

  {
    name: "Pocky Chocolate",
    japaneseName: "ポッキー",
    category: "Snack",
    price: 180,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834",
    description: "Chocolate coated biscuit sticks.",
    vegetarian: true,
    vegan: false,
    mustTry: false,
  },

  {
    name: "Pocari Sweat",
    japaneseName: "ポカリスエット",
    category: "Drink",
    price: 180,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    description: "Popular Japanese sports drink.",
    vegetarian: true,
    vegan: true,
    mustTry: true,
  },

  {
    name: "Calpis",
    japaneseName: "カルピス",
    category: "Drink",
    price: 160,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1542444459-db63c36f7b29",
    description: "Sweet Japanese milk-based drink.",
    vegetarian: true,
    vegan: false,
    mustTry: false,
  },

  {
    name: "Ramune",
    japaneseName: "ラムネ",
    category: "Drink",
    price: 220,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc",
    description: "Iconic Japanese marble soda.",
    vegetarian: true,
    vegan: true,
    mustTry: true,
  },

  {
    name: "Mochi",
    japaneseName: "餅",
    category: "Dessert",
    price: 250,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56",
    description: "Soft Japanese rice cake.",
    vegetarian: true,
    vegan: true,
    mustTry: true,
  },

  {
    name: "Dorayaki",
    japaneseName: "どら焼き",
    category: "Dessert",
    price: 220,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    description: "Red bean pancake sandwich.",
    vegetarian: true,
    vegan: false,
    mustTry: false,
  },

  {
    name: "Melon Pan",
    japaneseName: "メロンパン",
    category: "Dessert",
    price: 180,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description: "Sweet Japanese melon bread.",
    vegetarian: true,
    vegan: false,
    mustTry: true,
  },

  {
    name: "Udon Bowl",
    japaneseName: "うどん",
    category: "Instant Meal",
    price: 450,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
    description: "Thick Japanese noodle bowl.",
    vegetarian: true,
    vegan: false,
    mustTry: true,
  },

  {
    name: "Yakisoba",
    japaneseName: "焼きそば",
    category: "Instant Meal",
    price: 420,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3",
    description: "Japanese stir-fried noodles.",
    vegetarian: false,
    vegan: false,
    mustTry: true,
  },

  {
    name: "Curry Rice",
    japaneseName: "カレーライス",
    category: "Instant Meal",
    price: 550,
    currency: "JPY",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    description: "Japanese curry served with rice.",
    vegetarian: false,
    vegan: false,
    mustTry: true,
  }
];

const seedProducts = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log(`${products.length} Products Inserted`);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedProducts();