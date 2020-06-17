import React, { Component } from 'react'

import Cart from './Cart/Cart';
import css from './Carts.module.css';

export default class Carts extends Component {
    state = {
        carts: [

            { "disc": "", "time": "", "remain": "3" },
            { "disc": "", "time": "", "remain": "3" },
            { "disc": "", "time": "", "remain": "3" }
        ]
    }

    render() {


        return (
            <div className={css.Carts}>
                <Cart disc="تئاتر شماره یک" time="20/3/2020" remain="25" clicked={this.props.cartClicked} />
                <Cart disc="تئاتر خنده دار" time="21/3/2020" remain="25" clicked={this.props.cartClicked} />
                <Cart disc="گروه هنری  هنراین" time="22/3/2020" remain="25" clicked={this.props.cartClicked} />
                <Cart disc="گروه موسیقی شفق" time="25/3/2020" remain="25" clicked={this.props.cartClicked} />
            </div>
        )
    }
}
