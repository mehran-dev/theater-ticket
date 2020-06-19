import React, { Component } from 'react'
import Spinner from '../../utility/UI/Spinner/Spinner';
import Cart from './Cart/Cart';
import css from './Carts.module.css';
import { connect } from 'react-redux';




class Carts extends Component {
    state = {
        carts: null
    }


    componentDidMount() {

    }


    render() {
        let availableCarts = <Spinner />
        //console.log(this.state.carts);
        //console.log(this.props.tickets);
        availableCarts = Object.keys(this.props.tickets).map(k => {
            // console.log(k);
            //  console.log(this.props.tickets[k].disc);

            return (


                <Cart
                    key={this.props.tickets[k].date + " " + this.props.tickets[k].hour + " " + this.props.tickets[k].remaining + Math.random()}
                    disc={this.props.tickets[k].disc}
                    time={this.props.tickets[k].date + " " + this.props.tickets[k].hour}
                    date={this.props.tickets[k].date}
                    hour={this.props.tickets[k].hour}
                    remain={this.props.tickets[k].remaining}
                    clicked={this.props.cartClicked} />



            )
        })

        if (availableCarts == null) {
            availableCarts = <p>بلیطی یافت نشد ..</p>;
        }

        return (
            <div className={css.Carts}>
                {availableCarts}
            </div>
        )
    }
}



const mapStateToProps = state => {

    return {
        isAuth: state.Auth.isAuth,
        tickets: state.tickets.tickets
    }
}



export default connect(mapStateToProps)(Carts);