import React, { Component } from 'react'

import InputElements from '../../InputElements/InputElements';
import css from './Login.module.css';
import { connect } from 'react-redux';
import { trySignIn, trySignUp } from '../../../store/actions/Auth-process';


class Login extends Component {


    state = {
        newUser: true,
        username: "",
        password: "",
        isValidForm: true

    }
    componentWillMount() {

        /*     alert("cwm ", this.props.isAuth);
            if (this.props.isAuth) {
                this.props.history.replace("/dashboard");
            } */
    }


    submitHandler = (e) => {
        e.preventDefault();


        if (this.state.newUser) {

            this.subSignUp()
            //  alert(isauth)
        } else {

            this.subSignIn()
        }

        //    this.props.onSubmit(e);

    }

    subSignUp = () => {
        alert("ثبت نام ");
        const email = this.state.username;
        const password = this.state.password;
        this.props.onSignUp(email, password);

    }
    subSignIn = () => {
        alert("ورود");





    }

    switchHandler = () => {
        this.setState(prevState => ({ newUser: !prevState.newUser }))
    }




    usernameChangedHandler = (e) => {
        //  alert(e.target.value)
        this.setState({
            username: e.target.value
        })
        //  alert(this.state.username)
    }
    passwordChangedHandler = (e) => {
        //alert(e.target.value)

        this.setState({
            password: e.target.value
        })
        //alert(this.state.password)
    }

    render() {

        let switchStatement = "قبلا عضو شده ام ";
        let btnStatement = "ثبت نام  ";
        if (!this.state.newUser) {
            switchStatement = "  ثبت نام "
            btnStatement = "ورود "
        }

        return (

            <div className={css.Frm}>



                <form onSubmit={this.submitHandler}>

                    <InputElements
                        passwordChanged={this.passwordChangedHandler}
                        usernameChanged={this.usernameChangedHandler}
                    />
                    <button
                        disabled={false}//{!this.props.isValidForm}
                        onClick={this.submitHandler}
                    >
                        {btnStatement}
                    </button>
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



const mapStateToProps = state => {
    return {
        isAuth: state.Auth.isAuth

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (username, password) => {
            dispatch(trySignIn(username, password))
        },
        onSignUp: (username, password) => {
            dispatch(trySignUp(username, password))
        },
        onGetTest: () => {
            //dispatch(getTest())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);