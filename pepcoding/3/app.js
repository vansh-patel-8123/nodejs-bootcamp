const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT);

// middleware func -> post => front -> json 
app.use(express.json());
let users = [
    {
        'id': 1,
        'name': "Abhishek"
    },
    {
        'id': 2,
        'name': "Abcd"
    },
    {
        'id': 3,
        'name': "Efgh"
    }
];

app.get('/user', (req,res) => {
    // console.log(req.query);
    res.send(users);
});

app.post('/user', (req,res) => {
    console.log(req.body);
    users = req.body.Name;
    res.json({
        message: 'data received successfully'
    })
});


// update

app.patch('/user', (req,res) => {
    console.log('req.body -> ', req.body);

    let dataToBeUpdated = req.body;
    for(key in users){
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "patch successfully"
    })
});

app.delete('/user', (req, res) => {
    users = {};
    res.json({
        message: "data is deleted"
    })
});


// params
app.get('/user/:id/:class', (req,res) => {
    console.log(req.params.id);
    console.log(req.params.class);
    res.send("user id is recived");
});

