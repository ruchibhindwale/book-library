import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import * as actionCreators from '../../../store/actions';
import { connect } from 'react-redux';

class listBooks extends Component {
    componentDidMount(){
       if(this.props.books && this.props.books.length == 0){
         this.props.listBooks();
       }
    }

    componentDidUpdate(){
        if(this.props.books & this.props.books.length == 0){
            this.props.listBooks();
          }
    } 

    render () {
        let books = 'Currently there are no books in library';
        if(this.props.books.length > 0) {
            books = '';
        }
        return (
            <div className='booksContainer'>
                <div>
                    {this.props.books.map((book) => (<Card book={book} key={book.id}></Card>))}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        books : state.books
    };
}

const mapDispatchToProps = dispatch => {
    return {
        listBooks: () => dispatch(actionCreators.list())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listBooks);