import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

const style = {
    width: '70%',
    height: '20px',
    margin: '0 5px 20px',
    borderRadius: '5px',
    border: '1px solid black',
    marginLeft: '10px'
}

class Search extends Component {

    render(){
        console.log('In Search');
        return (
            <React.Fragment>
                <input type='text' 
                       style={style} 
                       placeholder='Search using book name' 
                       id='searchTxt' 
                       ref={(input) => this.textInput = input} />

                <button type='button' onClick={() => this.props.searchBooks(this.textInput.value)}>Search</button>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchBooks : (txt) => dispatch(actionCreators.searchBook(txt))
    }
}

export default connect(null, mapDispatchToProps)(Search);