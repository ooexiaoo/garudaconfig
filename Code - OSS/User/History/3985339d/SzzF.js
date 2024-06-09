const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://wolfr13:1205mongo@cluster0.xdkd2iw.mongodb.net/";

const connectToMongo = async () => {
    try {
        mongoose.connect(mongoURI, () => {
            console.log("Connected to mongo successfully");
    }
    )} catch (error) {
        console.log(error)
        process.exit()
    }
    
    }

module.exports = connectToMongo;