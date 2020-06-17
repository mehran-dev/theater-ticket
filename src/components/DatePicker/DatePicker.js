import React from 'react';

import css from './DatePicker.module.css';


const DatePicker = () => {
    return (
        <div className={css.DatePicker}>
            <input type="date" id="userDate" />
            <label htmlFor="userDate">انتخاب تاریخ مورد نظر</label>
        </div>
    );
};

export default DatePicker;