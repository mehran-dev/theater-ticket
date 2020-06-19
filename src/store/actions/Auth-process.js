import * as acTypes from './actionTypes';
import axios from 'axios';
//project API Key :
//AIzaSyBncies-MiITlCeZLFYTb0xepogEXW7B5M 
//  https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]



//////////////////////////////////////////////////////////
//////////////         SIGN IN    ////////////////////////
//////////////////////////////////////////////////////////


export const trySignUp = (email, password) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    console.log(authData);

    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBncies-MiITlCeZLFYTb0xepogEXW7B5M', authData)
            .then(response => {
                console.log(response);
                dispatch(signUpSuccess())
            })
            .catch(err => {
                console.log("ERRORR ytyt", err);

                dispatch(signUpFail())
            }
            )

    }
}



export const signUpSuccess = (email, password) => {
    return {
        type: acTypes.USER_SIGNUP_SUCCESS,
        email: email,
        password: password

    }
}

export const signUpFail = () => {
    return {
        type: acTypes.USER_SIGNUP_FAIL,
    }


}




//////////////////////////////////////////////////////////
//////////////         SIGN IN    ////////////////////////
//////////////////////////////////////////////////////////





export const trySignIn = (email, password) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBncies-MiITlCeZLFYTb0xepogEXW7B5M', authData)


            .then(response => {
                console.log(response);

                dispatch(signInSuccess())
            })
            .catch(err => {
                console.log("ERRORR", err);

                dispatch(signInFail)
            }
            )

    }
}





export const signInSuccess = () => {
    return {
        type: acTypes.USER_SIGNIN_SUCCESS,
    }
}
export const signInFail = () => {
    return {
        type: acTypes.USER_SIGNIN_FAIL,
    }
}