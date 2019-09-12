import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from '../../containers/Books/list/listBooks';
import addEditBook from '../../containers/Books/addEdit/addEdit';

class BooksContainer extends Component {
    render () {
        console.log('In BooksContainer');
        return(
            <Fragment>
                <Route path='/' exact component={ListBooks} />
                <Route path='/list' component={ListBooks} />
                <Route path='/add' component={addEditBook} />
                <Route path='/edit/:id' component={addEditBook} />
            </Fragment>
        )
    }
}

export default BooksContainer