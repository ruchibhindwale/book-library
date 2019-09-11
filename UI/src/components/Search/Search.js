import React from 'react';

const style = {
    width: '75%',
    height: '100px',
    margin: '0 5px 20px'
}

const Search = () => {
    return (
        <input type='search' style={style} placeholder='Enter book name'/>
    );
}

export default Search;