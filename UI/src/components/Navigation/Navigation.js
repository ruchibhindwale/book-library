import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/add'>Add</NavLink>
            <NavLink to='/list'>List</NavLink>
        </nav>
    );
}

export default Navigation;