import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../../store/actions';
import './addEdit.css';
import axios from 'axios';

class addEditBook extends Component {
    state = {
        id: '',
        name : '',
        author: '',
        description: '',
        count : '',
        isEdit : this.props.match.path.indexOf('edit') !== -1
    }

    componentDidMount(){
        console.log('Component Did Mount - add Edit');
        if (this.state.isEdit){
            this.getBook(this.props.match.params.id);
        }
    }

    getBook = (id) => {
        axios.get('http://localhost:3007/book/' + id)
        .then(response => {
            const respData = response.data[0];
            this.setState({
                id : respData.id,
                name: respData.name,
                author: respData.author,
                description: respData.description,
                count: respData.count
            })
        })
        .catch(error => {})
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    handleSelectChange = (e) => {
        this.setState({'genre': e.target.value});
        console.log(this.state);
    }

    handleSubmit = (e) => {
        const bookObject = {
            id: this.state.isEdit ?  this.state.id : Math.floor(Math.random() * Math.floor(100)),
            name : this.state.name,
            author: this.state.author,
            description: this.state.description,
            count: this.state.count
        }
        if(this.state.isEdit) {
            this.props.editBook(bookObject);
        } else {
            this.props.addBook(bookObject);
        }
        e.preventDefault();
    }

    render() {
        console.log('In add edit render', this.props.booksUpdated);
        let redirect = null;
        if(this.props.booksUpdated){
            redirect = <Redirect to='/list'/>
        }
        return (
            <div>
            {redirect}
            <form className='addEditForm' method='post'>
                <h3> Enter Book Details </h3>
                <div>
                    <label for='name'> Name </label>
                    <input type='text' 
                            placeholder='Enter name' 
                            name='name' 
                            id='name'
                            className='input' 
                            required 
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                </div>
    
                <div>
                    <label for='author'> Author's Name </label>
                    <input type='text' 
                           placeholder='Enter author name' 
                           className='input' 
                           required 
                           name='author' 
                           id='author'
                           value={this.state.author}
                           onChange={this.handleInputChange} />
                </div>
    
                <div>
                    <label for='description' className='bookDescription'> Description </label>
                    <textarea rows='50' 
                              cols='20' 
                              placeholder='Enter description' 
                              name='description' 
                              id='description'
                              className='input' 
                              value={this.state.description}
                              onChange={this.handleInputChange}/>
                </div>
    
                <div>
                    <label for='count'> Number of Copies </label>
                    <input type='number' 
                           name='count' 
                           id='count'
                           max='250' 
                           min='1'
                           className='input' 
                           value={this.state.count}
                           onChange={this.handleInputChange}
                           />
                </div>
    
                <button type='submit' className='submit' onClick={this.handleSubmit}>Submit Details</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        booksUpdated : state.booksUpdated
    };
}

const mapDispatchToProps = dispatch => {
    return{
        addBook : (bookData) => {dispatch(actionCreators.addBook(bookData))},
        getBook: (bookId) => {dispatch(actionCreators.getBook(bookId))},
        editBook: (bookData) => {dispatch(actionCreators.editBook(bookData))} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditBook);