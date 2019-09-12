import * as actionTypes from './actionTypes';

const initialState = {
    books : [],
    booksUpdated : false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LIST:
            return {
                ...state,
                books: action.response.data
            }
        case actionTypes.SEARCH:
            let results = state.books.filter(book => book.name.toLowerCase().includes(action.name.toLowerCase()))
            return {
                ...state,
                books: results
            }
        case actionTypes.ADD_SUCCESS:
            return {
                ...state,
                booksUpdated: true
            }
        case actionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                booksUpdated: true
            }
        case actionTypes.RESET_UPDATE_FLAG:
            return {
                ...state,
                booksUpdated: false
            }
        case actionTypes.ADD_ERROR:
            return {
                ...state
            }
        case actionTypes.UPDATE_ERROR:
            return {
                ...state
            }
    } 
    return state;
}

export default reducer;