import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import * as actionCreators from '../../../store/actions';
import { connect } from 'react-redux';

const styles = {
    width: '80%', 
    margin: '30px auto'
}

class listBooks extends Component {

    componentDidMount(){
       if((this.props.books && this.props.books.length == 0) || this.props.booksUpdated){
         this.props.listBooks();
         if(this.props.booksUpdated){
            this.props.resetUpdateFlag();
         }
       }
    }

    componentDidUpdate(){
        if((this.props.books && this.props.books.length == 0) || this.props.booksUpdated){
            this.props.listBooks();
            if(this.props.booksUpdated){
                this.props.resetUpdateFlag();
            }
        }
    } 

    render () {
        let books = 'Currently there are no books in library';
        if(this.props.books.length > 0) {
            books = '';
        }
        return (
            <div style={styles}>
                <div>
                    {this.props.books.map((book) => (<Card book={book} key={book.id}></Card>))}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        books : state.books,
        booksUpdated : state.booksUpdated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        listBooks: () => dispatch(actionCreators.list()),
        resetUpdateFlag: () => dispatch(actionCreators.resetUpdateFlag())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listBooks);