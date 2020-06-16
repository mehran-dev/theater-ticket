import React from 'react';
import { NavLink } from "react-router-dom"
import css from './ListItem.module.css';

const ListItem = (props) => {
    return (
        <li className={css.ListItem} >
            <NavLink to={props.dist}>

                {props.caption}

            </NavLink>
        </li>
    );
};

export default ListItem;