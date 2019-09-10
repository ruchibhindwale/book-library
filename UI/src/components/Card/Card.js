 import React from 'react';
 import './Card.css';
 
 const Card = (props) => {
    return (
        <div className='card'>
            <img alt={props.book.title} src={props.book.src}/>
            <h3>{props.book.name}</h3>
            <div>{props.book.description}</div>
            <div>{props.book.author}</div>
        </div>
    )
 }

 export default Card;