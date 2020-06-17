import * as acTypes from './actionTypes';

//import axios 


export const submitting = userData => {


    alert("pressed")
    return {
        type: acTypes.ENROLL, // acTypes.USER_SUBMITTING,
        userData: userData,


    }
}





/*
EXAMPLE OF ASYNC DISPATCH

export const initIngredients = () => {

    return dispatch => {
        axios.get("https://react-burger-7c156.firebaseio.com/ingredients.json")
            .then(response => {

                dispatch(setIngredients(response.data))
            })
            .catch(
                dispatch(fetchIngredientsFailed())
            )

    }
} */