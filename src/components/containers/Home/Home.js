import React, { Component } from 'react';
import Carts from '../../Carts/Carts';
import { DateTimeInput } from 'react-hichestan-datetimepicker';
import { connect } from 'react-redux';
import css from './Home.module.css';
import { getTicketsFromDB } from '../../../store/actions/reserve-ticket';









class Home extends Component {



    state = {
        myDateTime: "1399/02/02"
    }


    cartClickedHandler = () => {
        if (!this.props.isAuth) {
            alert(" ابتدا وارد سایت شوید .");
        }


    }
    componentDidMount() {
        this.props.onGetTickets()
        //console.log(this.props.tickets);

    }

    componentWillUnmount() {
        //  console.log(this.props.tickets);

    }


   


    render() {



        return (
            <div>
                Home Page
            

                <div className={css.DatePicker}>
                    <DateTimeInput
                        value={this.state.myDateTime}
                        name={'myDateTime'}
                        onChange={this.handleChange} />
                </div>

                <Carts cartClicked={this.cartClickedHandler} />
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



const mapDispatchToProps = dispatch => {
    return {
        onGetTickets: () => {
            dispatch(getTicketsFromDB())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);