import React from 'react';
import InputElement from './InputElement/InputElement';
import Ax from '../../hoc/Ax/Ax';

const InputElements = () => {
    return (
        <Ax>
            <InputElement eltype="email" lbl="ایمیل" placehplder="ایمیل" />
            <InputElement eltype="password" lbl="رمز" placehplder="پسورد" />
        </Ax>
    );
};

export default InputElements;