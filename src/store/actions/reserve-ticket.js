import * as  acType from '../actions/actionTypes';
import axios from 'axios';


export const showTickets = (tickets) => {
    //  console.log(tickets)

    return {
        type: acType.SET_TICKETS,
        tickets: tickets
    }

}




export const getTicketsFromDB = () => {

    return dispatch => {
        axios.get('https://amphitheater-a6ff5.firebaseio.com/availabletickets.json')
            .then(response => {
                // console.log(response.data);


                dispatch(showTickets(response.data))
            })
            .catch(err => {
                console.log("errrrrrrooooorrrr", err);

                //dispatch(submitting())
            }
            )

    }
}
