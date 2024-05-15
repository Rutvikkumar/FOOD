const { models } = require("mongoose");
const Product = require("../models/productModel");
const { json } = require("body-parser");


// Controller function to fetch all products from the database
exports.getAllProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();
        

        // If no products found, return 404 Not Found status
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        // If products found, return them as JSON response


        
        // Assuming you want to fetch the second product
        res.render('index');

       
    } catch (error) {
        console.error('Error fetching products:', error);
        // If an error occurs, return 500 Internal Server Error status
        res.status(500).json({ message: 'Internal Server Error' });
    }
};






