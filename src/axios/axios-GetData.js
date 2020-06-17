import axios from 'axios';




const instance = axios.create({


    baseURL: "https://react-burger-7c156.firebaseio.com/"


});


export default instance;