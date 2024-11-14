// import mongoose
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect to the database
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to the database!');

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is running @ http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Connection failed!');
        console.log(error);
    })