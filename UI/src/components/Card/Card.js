 import React from 'react';
 import './Card.css';
 
 const Card = (props) => {
    return (
        <div className='card'>
            <img alt={props.book.title} src={props.book.src}/>
            <h3>{props.book.name}</h3><br/>
            <div>{props.book.description}</div><br/>
            <strong><em>{props.book.author}</em></strong>
        </div>
    )
 }

 export default Card;