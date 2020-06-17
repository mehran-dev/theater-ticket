import React, { Component } from 'react'

import InputElements from '../../InputElements/InputElements';
import css from './Login.module.css';
import { connect } from 'react-redux';
import { submitting } from '../../../store/actions/Auth-process';


class Login extends Component {


    state = {
        newUser: true
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    switchHandler = () => {




        this.setState(prevState => ({ newUser: !prevState.newUser }))

    }
    render() {

        let switchStatement = "قبلا عضو شده ام ";
        let btnStatement = "ثبت نام  ";
        if (!this.state.newUser) {
            switchStatement = "  رفتن به ثبت نام "
            btnStatement = "ورود "
        }

        return (

            <div className={css.Frm}>



                <form onSubmit={this.submitHandler}>

                    <InputElements />
                    <button> {btnStatement} </button>
                    <span
                        onClick={this.switchHandler}
                        className={css.Switcher}
                    >
                        {switchStatement}
                    </span>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onSubmit: userData => {
            dispatch(submitting(userData))
        }
    }
}



export default connect(null, mapDispatchToProps)(Login);