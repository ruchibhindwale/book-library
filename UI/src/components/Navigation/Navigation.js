import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <React.Fragment>
            <nav>
              <a href='/add'>Add</a>
              <a href='/edit'>Edit</a>
              <a href='/list'>List</a>
            </nav>
        </React.Fragment>
    );
}

export default Navigation;