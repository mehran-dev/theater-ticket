import React from 'react';
import css from './Card.module.css';


const Card = (props) => {
    return (
        <div className={css.Cart}>
            <span>شرح بلیط</span>
            <p>{props.disc}</p>
            <span>ساعت <span>{props.time}</span> </span>
            <br />
            <span>تعداد باقی مانده  <span className={css.Badge}>{props.remain}</span></span>
            <button onClick={props.clicked}>رزرو</button>
        </div>
    );
};

export default Card;