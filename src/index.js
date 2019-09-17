import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

// STORE (A GLOBALISED STATE)
// ACTION (WHAT YOU WANNA DO) FOR EXAMPLE LIKE INCREMENT
// REDUCER (HOW YOUR ACTION TRANSFORM THE STATE INTO NEXT STATE)
// ACTION IS CALLED AND REUCER ON THE BASIS OF ACITON CALLED THE REDUCER CHANGES THE STATE
// add to the store
// Display it in the console
//DISPATCH (WHERE WE EXACTLY EXECUTE OUR ACTION FOR EXAMPLE HEY DISPATCH THIS ACTION TO THE REDUCER)

const store = createStore(
  allReducers,

  // FOR REDUX DEVTOOLS EXTENSION
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    // to make global avaiable to the App we are using Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
