const express = require('express');
const path = require('path');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join( __dirname, '..', 'views', 'add-product.html'));
    console.log(req.baseUrl);
});

// /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    console.log('in the router post method');
    res.redirect('/admin/product-done');
});

router.get('/product-done', (req ,res) => {
    res.send('Product added !!');
});


module.exports = router;