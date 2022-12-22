import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import "./index.css";
import App from "./App";
import { requestData, 
  setEnable,
  setStartDate,
  setEndDate} 
from "./redux/reducers.js";
import cache from './middleware/cache.middleware'

import { loadState, saveState } from "./localStorage";

const rootReducers = combineReducers({requestData, setEnable, setStartDate, setEndDate});
const persistedState=loadState();

const store = createStore(
  rootReducers,
  persistedState,
  // applyMiddleware(cache)

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
