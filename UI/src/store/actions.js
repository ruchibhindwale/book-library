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

export const add = (bookData) => {
    console.log('bookData', bookData);
    return dispatch => {
        axios.post('http://localhost:3007/book', bookData)
            .then( response => dispatch(addBookSuccess(response.data)))
            .catch( err => dispatch(addBookError(err)))
        }
    }
