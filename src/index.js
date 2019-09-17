import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
 
// STORE (A GLOBALISED STATE)

// ACTION (WHAT YOU WANNA DO) FOR EXAMPLE LIKE INCREMENT 
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT' // we may name it name instead of type
    }
}

// REDUCER (HOW YOUR ACTION TRANSFORM THE STATE INTO NEXT STATE)
// ACTION IS CALLED AND REUCER ON THE BASIS OF ACITON CALLED THE REDUCER CHANGES THE STATE
const counter = (state = 0, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
} 

// add to the store
let store = createStore(counter);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH (WHERE WE EXACTLY EXECUTE OUR ACTION FOR EXAMPLE HEY DISPATCH THIS ACTION TO THE REDUCER)
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
