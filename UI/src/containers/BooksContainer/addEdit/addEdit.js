import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import './addEdit.css';

class addEditBook extends Component {
    state = {
        name : 'Musings',
        author: 'Ruchi',
        description: 'Light',
        count : 10,
        publishDate: '',
        genre: 'comedy'
    }

    componentDidMount(){
        //if (this.props.match.path.contains('edit')){
            // Get the id
            // Get the book details from the id
            // Populate the state using the book details 
        //}
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
            id: Math.floor(Math.random() * Math.floor(100)),
            name : this.state.name,
            author: this.state.author,
            description: this.state.description,
            publishDate: this.state.author.publishDate,
            count: this.state.count,
            genre: this.state.genre
        }
        this.props.addBook(bookObject);
        e.preventDefault();
    }

    render() {
        return (
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
                           className='input' 
                           value={this.state.count}
                           onChange={this.handleInputChange}
                           />
                </div>
    
                <div>
                    <label for='publishDate'> Date of Publishing </label>
                    <input type='date' 
                           name='publishDate' 
                           id='publishDate'
                           value={this.state.publishDate} 
                           onChange={this.handleInputChange} />
                </div>
    
                <div>
                    <label for='genre'> Select Genre</label>
                    <select name='genre' id='genre' onChange={this.handleSelectChange}>
                        <option value='1'> Comedy </option>
                        <option value='2'> Adventure Fiction </option>
                        <option value='3'> Thriller </option>
                        <option value='4'> Non Fiction </option>
                        <option value='5'> Biography </option>
                    </select>
                </div>
    
                <button type='submit' className='submit' onClick={this.handleSubmit}>Submit Details</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addBook : (bookData) => {dispatch(actionCreators.add(bookData))}
    }
}

export default connect(null, mapDispatchToProps)(addEditBook);