import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './BooksContainer.css';

class BooksContainer extends Component {
    state = {
        books : [{
                name: 'Raavan: Enemy of Aryavarta',
                author: 'Amish Tripathi',
                description: 'This exhilarating third book of the Ram Chandra series sheds light on Raavan, the king of Lanka. And the light shines on darkness of the darkest kind. Is he the greatest villain in history or just a man in a dark place, all the time?',
                count: 5,
                genre: 'thriller',
                publishDate: 'July 2019'
            },
            {
                name: 'The Inimitable Jeeves: (Jeeves & Wooster)',
                author: 'P. G. Wodehouse',
                description: 'A classic collection of stories featuring some of the funniest episodes in the life of Bertie Wooster, gentleman, and Jeeves, his gentleman\'s gentleman - in which Bertie\'s terrifying Aunt Agatha stalks the pages, seeking whom she may devour, while Bertie\'s friend Bingo Little falls in love with seven different girls in succession (including the bestselling romantic novelist Rosie M. Banks).',
                count: 10,
                genre: 'comedy',
                publishDate: '17 May 1923'
            },
            {
                name: 'Brief Answers to the Big Questions',
                author: 'Stephen Hawking',
                description: 'The final book from Professor Stephen Hawking, the bestselling author of A BRIEF HISTORY OF TIME and arguably the most famous scientist of our age, BRIEF ANSWERS TO THE BIG QUESTIONS is a profound, accessible and timely reflection on the biggest questions in science.',
                count: 25,
                genre: 'Science',
                publishDate: '16 October 2018'
            },
            {
                name: 'Three Thousand Stitches: Ordinary People, Extraordinary Lives',
                author: 'Sudha Murthy',
                description: ' From the quiet joy of discovering the reach of Indian cinema and the origins of Indian vegetables to the shallowness of judging others based on appearances, these are everyday struggles and victories, large and small. Unmasking both the beauty and ugliness of human nature, each of the real-life stories in this collection is reflective of a life lived with grace.',
                count: 12,
                genre: 'Non Fiction',
                publishDate: '14 July 2017'
            },
            {
                name: 'Life of Pi',
                author: 'Yann Martel',
                description: ' From the quiet joy of discovering the reach of Indian cinema and the origins of Indian vegetables to the shallowness of judging others based on appearances, these are everyday struggles and victories, large and small. Unmasking both the beauty and ugliness of human nature, each of the real-life stories in this collection is reflective of a life lived with grace.',
                count: 7,
                genre: 'Adventure fiction',
                publishDate: '4 October 2012'
            },

        ]
    }

    render () {
        let books = 'No books in library';
        if(this.state.books.length > 0) {
            books = '';
            
        }
        console.log('books',books);
        return (
            <div className='booksContainer'>
                <h2> List of books</h2>
                <div>
                    {this.state.books.map((book) => (<Card book={book}></Card>))}
                </div>
            </div>
        );
    }

}

export default BooksContainer