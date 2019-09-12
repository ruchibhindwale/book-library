const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 3007;
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
    fs.readFile('./data/books.json', 'utf8', (err, data) => {
        const books = JSON.parse(data);
        const selectedBook = books.filter(book => req.params.id == book.id);
        res.json(selectedBook);
    })
})

app.post('/add', function(req, res){
    fs.readFile('./data/books.json', 'utf-8', function(err, data) {
        if (err) throw err
    
        let bookObjects = JSON.parse(data);
        bookObjects.push(req.body);
        
        fs.writeFile('./data/books.json', JSON.stringify(bookObjects), 'utf-8', function(err) {
            if (err) throw err
            res.status(201).json({
                status: 'success',
                message: 'Book successfully added'
              });
        })
    })
})

app.post('/edit', function(req, res){
    fs.readFile('./data/books.json', 'utf-8', function(err, data) {
        if (err) throw err
    
        let bookObjects = JSON.parse(data);

        for (let book of bookObjects){
            if(book.id == req.body.id){
                let updatedBookData = req.body;
                book.name = updatedBookData.name;
                book.author = updatedBookData.author;
                book.description = updatedBookData.description;
                book.count = updatedBookData.count;
                book.publishDate = updatedBookData.publishDate;
                book.genre = updatedBookData.genre;
            }
        }
        
        fs.writeFile('./data/books.json', JSON.stringify(bookObjects), 'utf-8', function(err) {
            if (err) throw err
            res.status(201).json({
                status: 'success',
                message: 'Book successfully edited'
              });
        })
    })
})

app.listen(port);

