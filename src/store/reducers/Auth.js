import * as actypes from '../actions/actionTypes';


const initialSate = {
    isAuth: false,
    userData: {

    }
}
const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actypes.USER_SIGNUP_FAIL:

            return {
                isAuth: false,
            };

        case actypes.USER_SIGNUP_SUCCESS:
            return {
                isAuth: true,
            }
        case actypes.USER_SIGNIN_FAIL:

            return {
                isAuth: false,
            };

        case actypes.USER_SIGNIN_SUCCESS:
            return {
                isAuth: true,
            }

        default:
            return state;
    }
}


export default reducer;