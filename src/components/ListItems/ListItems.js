import React, { Component } from 'react'
import ListItem from './ListItem/ListItem';
import css from './ListItems.module.css';


export default class ListItems extends Component {

    state = {
        titles: [
            { "caption": "ورود", "dist": "login" },
            { "caption": "خانه", "dist": "home" },
            { "caption": "رزو شده", "dist": "reserved" },

        ]
    }


    render() {
        const menuItems = this.state.titles.map((t, i) => {
            //  console.log(t.caption);

            return <ListItem
                key={t.caption}
                dist={t.dist}
                caption={t.caption}


            />
        })


        return (
            <ul className={css.Menu}
            //   style={{ props.isVertical?  flexDirection="column" }}
            >
                {menuItems}
            </ul>
        )
    }
}
