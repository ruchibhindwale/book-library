import React, { Component } from 'react';

class addEditBook extends Component {
    render() {
        return (
            <form>
                <h3> Enter Book Details </h3>
            <div>
                <label for='bookName'> Name </label>
                <input type='text' placeholder='Enter name' name='bookName' required />
            </div>
    
            <div>
                <label for='author'> Author's Name </label>
                <input type='text' placeholder='Enter author name' required name='bookAuthor'/>
            </div>
    
            <div>
                <label for='bookDescription'> Description </label>
                <textarea type='text' placeholder='Enter description' name='bookDescription'/>
            </div>
    
            <div>
                <label for='bookCount'> Number of Copies </label>
                <input type='number' name='bookCount' max='250'/>
            </div>
    
            <div>
                <label for='bookPublishDate'> Date of Publishing </label>
                <input type='date' name='bookPublishDate'/>
            </div>
    
            <div>
                <label for='bookGenre'> Select Genre</label>
                <select name='bookGenre'>
                    <option id='1'> Comedy </option>
                    <option id='2'> Adventure Fiction </option>
                    <option id='3'> Thriller </option>
                    <option id='4'> Non Fiction </option>
                    <option id='5'> Biography </option>
                </select>
            </div>
    
            <button type='button'>Submit Details</button>
        </form>
        )
    }
}

export default addEditBook;