import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import BooksContainer from '../../containers/BooksContainer/BooksContainer';

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Search />
            <Navigation />
            <BooksContainer />
        </Fragment>
    );
}

export default Layout;