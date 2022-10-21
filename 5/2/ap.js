const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded( { extended: false} ));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

// 404 page
app.use((req,res) => {
    res.status(404)
        .sendFile('./views/404.html', {root: __dirname});
        // .sendFile(path.join( __dirname, '.' , 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT);