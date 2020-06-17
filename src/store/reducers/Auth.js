import * as actypes from '../actions/actionTypes';


const initialSate = {
    isAuth: false,
    userData: {

    }
}
const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actypes.LOGIN:

            return {
                isAuth: false,
            };

        case actypes.ENROLL:
            return {
                isAuth: true,
            }

        default:
            return state;
    }
}


export default reducer;