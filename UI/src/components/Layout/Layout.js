import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import BooksContainer from '../../containers/BooksContainer/BooksContainer';
import './Layout.css';

const Layout = () => {
    return (
        <main className='rar'>
            <Header />
            <Search />
            <Navigation />
            <BooksContainer />
        </main>
    );
}

export default Layout;