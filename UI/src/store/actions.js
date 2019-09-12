import * as actionTypes from './actionTypes';
import axios from 'axios';

export const listBooksAction = (response) => {
    return {type: actionTypes.LIST, response: response}
}

export const addBookSuccess = (response) => {
    return {type: actionTypes.ADD_SUCCESS, response: response}
}

export const addBookError = (error) => {
    return {type: actionTypes.ADD_ERROR, error: error}
}

export const updateBookSuccess = (response) => {
    return {type: actionTypes.UPDATE_SUCCESS, response: response}
}

export const updateBookError = (error) => {
    return {type: actionTypes.UPDATE_ERROR, error: error}
}

export const resetUpdateFlag = () => {
    return {type: actionTypes.RESET_UPDATE_FLAG}
}

export const list = () => {
    return dispatch => {
        axios.get('http://localhost:3007/books')
            .then((response) => {
               dispatch(listBooksAction(response));
        })
        .catch(error => {
            console.log('Error', error);
        })
    }
}

export const addBook = (bookData) => {
    return dispatch => {
        axios.post('http://localhost:3007/add', bookData)
            .then( response => dispatch(addBookSuccess(response.data)))
            .catch( err => dispatch(addBookError(err)))
        }
}

export const editBook = (bookData) => {
    return dispatch => {
        axios.post('http://localhost:3007/edit', bookData)
            .then( response => dispatch(updateBookSuccess(response.data)))
            .catch( err => dispatch(updateBookError(err)))
        }
}

export const getBook = (bookId) => {
    return dispatch => {
        axios.get('http://localhost:3007/book' + bookId)
            .then(response => {})
            .catch(error => {})
    }
}

export const searchBook = (bookName) => {
    return {
        type: actionTypes.SEARCH,
        name: bookName
    }
}
