import React from "react";
import ReactDOM from "react-dom/client";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import { requestData, 
  setEnable,
  setStartDate,
  setEndDate} 
from "./reducers";

import { loadState, saveState } from "./localStorage";


const logger = createLogger();
const rootReducers = combineReducers({requestData, setEnable, setStartDate, setEndDate});
const persistedState=loadState();

const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunk),applyMiddleware(logger))
  // persistedState,

);

store.subscribe(()=>{
  saveState(store.getState());
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
