import React from 'react';
import css from './Header.module.css';
import ListItems from '../../ListItems/ListItems';
//import ListItems from '../../ListItems/ListItem/ListItem';

const Header = () => {

    return (
        <div className={css.Header}>
            <nav className={css.Menu}>
                <ListItems />
            </nav>
        </div>
    );
};

export default Header;