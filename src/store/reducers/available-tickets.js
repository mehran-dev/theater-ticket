import * as acTypes from '../actions/actionTypes';



const initialState = {
    tickets: [

    ]
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case acTypes.SET_TICKETS:
            // console.log(action.tickets);


            return {

                tickets: action.tickets
            };

        default:
            return state;
    }
}



export default reducer;