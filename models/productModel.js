
const mongoose = require('mongoose');

// Define the schema for your product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    seller: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Product = mongoose.model('popularpro', productSchema);

module.exports = Product; // Export the model for use in other parts of your application
