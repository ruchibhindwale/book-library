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
    return state;
}

export default reducer;