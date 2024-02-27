import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from './data/users.js';
import products from "./data/products.js";
import User from "./models/userModel.js"
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import connectDB from './config/db.js';

// Running env file
dotenv.config();

// Connect to database
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id

        const sampleProducts = products.map((products) => {
            return { ...products, user: adminUser }
        })
        await Product.insertMany(sampleProducts)
        console.log(colors.green('Data imported successfully!'))
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log(colors.green('Data destroyed successfully!'))
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
