const express = require('express');
const path = require('path');
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
    // res.sendFile(path.join( __dirname, '..', 'views', 'add-product.html'));
    res.render('add-product',{pageTitle: 'Add Product'})
    console.log(req.baseUrl);
});

// /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    products.push({ title: req.body.title});
    res.redirect('/admin/product-done');
});

router.get('/product-done', (req ,res) => {
    res.send('Product added !!');
});

module.exports = {
    routes: router,
    products: products
}