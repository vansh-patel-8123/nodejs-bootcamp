const express = require('express');
const path = require('path');

const adminData = require('./admin');


const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    console.log('shop.js',adminData.products);
});

module.exports = router;