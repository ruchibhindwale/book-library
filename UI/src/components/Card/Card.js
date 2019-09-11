 import React from 'react';
 import { Link } from 'react-router-dom';
 import './Card.css';
 
 const Card = (props) => {
    return (
        <div className='card'>
            <img alt={props.book.title} src={props.book.src}/>
            <Link to={'/edit/' + props.book.id}><span className='editIcon'>&#9998;</span></Link>
            <h3>{props.book.name}</h3><br/>
            <div>{props.book.description}</div><br/>
            <strong><em>{props.book.author}</em></strong>
        </div>
    )
 }

 export default Card;