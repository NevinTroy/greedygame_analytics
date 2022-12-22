import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware,compose } from "redux";

import "./index.css";
import App from "./App";
import { requestData, 
  setEnable,
  setStartDate,
  setEndDate} 
from "./redux/reducers.js";
// import cache from './middleware/cache.middleware'

import { loadState, saveState } from "./localStorage";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const rootReducers = combineReducers({requestData, setEnable, setStartDate, setEndDate});
const persistedState=loadState();
const logger=createLogger();


const store = createStore(
  rootReducers,
  persistedState,
  compose(applyMiddleware(thunkMiddleware))
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
