const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true, 
            // useUnifiedTopology: true,
            // useFindAndModify: false //stops warning in console
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (err) {
        console.log(err);
        process.exit(1); // 1 means exit with failure                
    }
}

module.exports = connectDB;