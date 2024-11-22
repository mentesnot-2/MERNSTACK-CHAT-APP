const mongoose = require('mongoose');

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to database")
    } catch (error) {
        console.log("error while connecting to mongodb",error.message)
    }
}


module.exports = connectToMongoDb;