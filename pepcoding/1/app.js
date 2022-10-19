// server creation

// http module

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log('request has been made from browser to server');

    // request
    console.log(req.method);
    console.log(req.url);


    // response
    res.setHeader('Content-Type','text/html');
    // res.write(`<h1>hello world :   </h1>`);
    // res.end();

    let path = './views';
    switch(req.url){
        case '/': 
            path+='/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path+='/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile( path, (err,fileData) => {
        if(err){
            console.log(err);
        }else{
            res.end(fileData);
        }
    });

});



const PORT = 3000;

// port number, host, call back
server.listen(PORT, () => {
    console.log(`server is listing on port ${PORT}`);
});