const Product = require('../models/product')

const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({products})
    } catch(error) {
        res.status(500).json({msg:error})
    }
};

const createProduct = async(req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({product})
    } catch(error) {
        res.status(500).json({msg:error})
    }
};

const getProduct = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({product})
    } catch(error) {
        res.status(500).json({msg:error})
    }
    //res.status('Get task');
};

//Patch- Update Task
const updateProduct = async(req,res) => {
    console.log(req.body)
    try {
        // const task = await Task.findByIdAndUpdate(req.body)
        const product = await Product.findByIdAndUpdate(req.params.id, {name: req.body.name, featured: req.body.featured})
        res.status(200).json({product})
    } catch(error) {
        res.status(500).json();
    }
    // res.status('Update task');
};

const deleteProduct = async(req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({product})
    } catch(error) {
        res.status(500).json({msg:error})
    }
    res.status('Delete product');
};

module.exports = {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct};