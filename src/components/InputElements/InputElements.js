import React from 'react';
import InputElement from './InputElement/InputElement';
import Ax from '../../hoc/Ax/Ax';

import css from './InputElements.module.css';



const InputElements = (props) => {
    return (
        <div className={css.InputElements}>
            <InputElement changed={props.usernameChanged} eltype="email" lbl="ایمیل" placehplder="ایمیل" />
            <InputElement changed={props.passwordChanged} eltype="password" lbl="رمز" placehplder="پسورد" />
        </div>
    );
};

export default InputElements;