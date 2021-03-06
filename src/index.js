import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import authenticationReducer from './store/reducers/Auth';
import getTicketsREducer from './store/reducers/available-tickets';


//const store = createStore(reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootReducer = combineReducers({
  Auth: authenticationReducer,
  tickets: getTicketsREducer
});



const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(


  <Provider store={store} >
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>



  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
