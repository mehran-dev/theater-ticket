import React, { Component } from 'react'
import ListItem from './ListItem/ListItem';
import css from './ListItems.module.css';
import { connect } from 'react-redux';

class ListItems extends Component {

    state = {
        authTitles: [
            { "caption": "خوش آمدید", "dist": "dashboard" },
            { "caption": "خانه", "dist": "home" },
            { "caption": "رزو شده", "dist": "reserved" },

        ],
        unAuthTitles: [
            { "caption": " ورود", "dist": "login" },
            { "caption": "خانه", "dist": "home" },
        ]

    }


    render() {
        // console.log(this.props.isAuth);
        // console.log(this.state.authTitles);

        let targetMenu = this.state.unAuthTitles;
        //console.log(targetMenu);

        if (this.props.isAuth) {
            //console.log(targetMenu);
            targetMenu = this.state.authTitles
        } else {
            //console.log(targetMenu);
            targetMenu = this.state.unAuthTitles

        };


        const menuItems = targetMenu.map((t, i) => {
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

const mapStateToProps = state => {
    return {

        isAuth: state.Auth.isAuth
    }
}


//const mapDispatchToProps = null;

export default connect(mapStateToProps)(ListItems);