const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 5555;
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', function(req, res){
    fs.readFile('./data/books.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data));
    })
})

// PATTERN URL - person/:id example 
app.get('/book/:id', function(req, res){
    res.send('<html><head><link href=assets/main.css type=text/css rel=stylesheet/></head><body><h1> Person '+ req.params.id +'</h1></body></html>');
})

// Reading form body and posting it 
app.post('/book', function(req, res){
    fs.readFile('./data/books.json', 'utf-8', function(err, data) {
        if (err) throw err
    
        let bookObjects = JSON.parse(data);
        console.log('bookObjects', bookObjects);
        bookObjects.push(req.body);
        console.log('-------------------------------------------')
        console.log('bookObjects after push', bookObjects);
        
        fs.writeFile('./data/books.json', JSON.stringify(bookObjects), 'utf-8', function(err) {
            if (err) throw err
            res.status(200);
        })
    })
})

app.listen(3007);

