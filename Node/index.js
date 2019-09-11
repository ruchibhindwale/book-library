const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 5555;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');

app.use(cors());

app.get('/books', function(req, res){
    fs.readFile('./data/books.json', 'utf8', (err, data) => {
        let books = JSON.parse(data)
        res.json(books);
    })
})

// PATTERN URL - person/:id example 
app.get('/book/:id', function(req, res){
    res.send('<html><head><link href=assets/main.css type=text/css rel=stylesheet/></head><body><h1> Person '+ req.params.id +'</h1></body></html>');
})


// Reading form body and posting it 
app.post('/book', urlencodedParser, function(req, res){
    res.send('Thank you for form data');
    console.log('First Name', req.body.firstName);
    console.log('Last Name', req.body.lastName);
})

app.listen(3003);

