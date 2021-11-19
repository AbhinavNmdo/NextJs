const mongoose = require('mongoose');

const connection = {};

const dbconnect = async ()=>{
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default dbconnect;