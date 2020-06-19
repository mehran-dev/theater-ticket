import React from 'react';
import css from './InputElement.module.css';
const InputElement = (props) => {
    return (
        <div className={css.InputPair}>
            <label>{props.lbl}</label>
            <input onChange={props.changed} type={props.eltype} />
        </div>
    );
};

export default InputElement;