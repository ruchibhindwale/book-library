import * as actionTypes from './actionTypes';

const initialState = {
    books : []
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.LIST) {
        return {
            ...state,
            books: action.response.data
        }
    }
    if(action.type === actionTypes.ADD_SUCCESS) {
        return {
            ...state,
            books: this.state.books.push(action.response.data)
        }
    }
    return state;
}

export default reducer;