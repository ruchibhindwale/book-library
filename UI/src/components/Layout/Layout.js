import React from 'react';
import Header from '../Header/Header';
import Search from '../../containers/Search/Search';
import Navigation from '../Navigation/Navigation';
import BooksContainer from '../../components/Books/Books';
import './Layout.css';

const Layout = () => {
    return (
        <main className='layout'>
            <Header />
            <Search />
            <Navigation />
            <BooksContainer />
        </main>
    );
}

export default Layout;