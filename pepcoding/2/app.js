const express = require('express');
const app = express();

// app.get('/', (req,res) => {
//     res.send('hello world');
// });


app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/404', (req,res) => {
    res.sendFile('./views/404.html', {root: __dirname});
});
app.get('/index', (req,res) => {
    res.sendFile('/Users/vanshpatel/Desktop/code/nodejs-bootcamp/pepcoding/2/views/index.html');
});

// redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

// 404 Page
app.use((req,res) => {
    res.status(404)
        .sendFile('./views/404.html', {root: __dirname});
});

const PORT = 3000;
app.listen(PORT);


