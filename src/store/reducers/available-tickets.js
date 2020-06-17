import * as acTypes from '../actions/actionTypes';



const initialState = {
    tickets: [
        //{time  /// disc   /// remaining  ///   }
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case acTypes.GET_TICKETS:

            return {


            };

        default:
            return state;
    }
}



export default reducer;