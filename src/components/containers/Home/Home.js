import React, { Component } from 'react';
import Carts from '../../Carts/Carts';
import DatePicker from '../../DatePicker/DatePicker';
import { DateTimeInput } from 'react-hichestan-datetimepicker';
import { connect } from 'react-redux';
import css from './Home.module.css';



class Home extends Component {



    state = {
        myDateTime: "1399/02/02"
    }


    cartClickedHandler = () => {
        if (!this.props.isAuth) {
            alert(" ابتدا وارد سایت شوید .");
        }


    }


    render() {
        return (
            <div>
                Home Page

                <DatePicker />
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
        isAuth: state.Auth.isAuth
    }
}
export default connect(mapStateToProps)(Home);