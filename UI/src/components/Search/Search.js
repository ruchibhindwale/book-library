import React from 'react';
import { Redirect } from 'react-router-dom';

const style = {
    width: '70%',
    height: '20px',
    margin: '0 5px 20px',
    borderRadius: '5px',
    border: '1px solid black',
    marginLeft: '10px'
}

const searchBooks = (e) => {
    console.log()
}

const Search = () => {
    return (
        <React.Fragment>
            <input type='text' style={style} placeholder='Search using book name' id='searchTxt'/>
            <button type='button' onClick={searchBooks}>Search</button>
        </React.Fragment>
    );
}

export default Search;