const mongoose = require('mongoose');

mongoose.connect(process.env.MongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });