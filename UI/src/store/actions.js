import * as actionTypes from './actionTypes';
import axios from 'axios';

export const listBooksAction = (response) => {
    return {type: actionTypes.LIST, response: response}
}

export const list = () => {
    return dispatch => {
        axios.get('http://localhost:3003/books')
            .then((response) => {
                console.log('Response', response);
               dispatch(listBooksAction(response));
        })
        .catch(error => {
            console.log('Error', error);
        })
    }
}