const mongoose = require("mongoose");
// const env = require("dotenv");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = "mongodb+srv://raj2902patel:rajpatel2902@cluster0.dwmxrto.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

const URI = process.env.MONGODB_URI;



// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfull to database");
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;