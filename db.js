const mongoose = require("mongoose");

require('dotenv').config()
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB Connected");
})
db.on('disconnected', () => {
    console.log("MongoDB Disconnected")
})
db.on('error', (err) => {
    console.log(err)
})