import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <React.Fragment>
            <nav>
              <NavLink to='/add'>Add</NavLink>
              <NavLink to='/edit'>Edit</NavLink>
              <NavLink to='/list'>List</NavLink>
            </nav>
        </React.Fragment>
    );
}

export default Navigation;