const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use('/add-product', (req,res,next) => {
//     console.log('In the middleware of add product !');
//     // next();     // Allows the request to continue to the next middleware in line
// });

// app.use( (req,res,next) => {
//     console.log('In another middleware !');
//     res.send('<h1>Hello world !</h1>');
// });   

// app.use('/', (req,res,next) => {
//     console.log('In the middleware !');
//     //  next();     // Allows the request to continue to the next middleware in line
// });

// ---------------------------------------------------------------------------------------

// app.use('/', (req,res,next) => {
//     console.log('I always run');
//     next();
// });

// app.use('/add-product', (req,res) => {
//     res.send('<h1>i am learning ExpressJS in /add-product</h1>');
//     console.log(req.baseUrl);
// });

// app.use('/', (req,res) => {
//     res.send('<h1>i am learning ExpressJS in /</h1>');
//     console.log(req.url);
// });

// ----------------------------------------------------------------------- -----------

// app.use(bodyParser.urlencoded( { extended: false} ));

// app.use('/', (req,res,next) => {
//     console.log('I always run');
//     next();
// });

// app.use('/add-product', (req,res,next) => {
//     res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add product</button></form>')
//     console.log(req.baseUrl);
// });

// app.use('/product', (req,res,next) => {
//     console.log(req.body);
//     res.redirect('/product-done');
// });

// app.use('/product-done', (req,res) => {
//     res.send('Product added !!');
// });


// ----------------------------------------------------------------------- -----------

app.use(bodyParser.urlencoded( { extended: false} ));


app.get('/add-product', (req,res,next) => {
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add product</button></form>')
    console.log(req.baseUrl);
});

app.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/product-done');
});

app.get('/product-done', (req,res) => {
    res.send('Product added !!');
});

app.get('/', (req,res,next) => {
    console.log('Hello world');
});

const PORT = 3000;
app.listen(PORT);