const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://wolfr13:wolf1205@cluster0.xdkd2iw.mongodb.net/";

const connectToMongo = async () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;