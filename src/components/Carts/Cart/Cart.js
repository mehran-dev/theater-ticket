import React from 'react';
import css from './Card.module.css';


const Card = (props) => {
    const classes = [css.Cart]
    if (props.remain <= 0) {
        classes.push(css.NotAvailable);
    }
    return (
        <div className={classes.join(" ")}>
            <span>:شرح بلیط </span>
            <p>{props.disc}</p>
            <span>: ساعت <span>{props.hour}</span> </span>
            <br />
            <span>روز <span>{props.date}</span> </span>
            <br />
            <span>تعداد باقی مانده :  <span className={css.Badge}>{props.remain}</span></span>
            <button
                disabled={props.remain <= 0}
                onClick={props.clicked}
            >
                رزرو
            </button>
        </div>
    );
};

export default Card;