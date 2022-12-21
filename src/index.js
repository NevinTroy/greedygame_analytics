import React from "react";
import ReactDOM from "react-dom/client";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import { requestData, setEnable,setStartDate, setEndDate} from "./reducers";

const logger = createLogger();
const rootReducers = combineReducers({requestData, setEnable, setStartDate, setEndDate});

const store = createStore(
  rootReducers,
  compose(applyMiddleware(thunk), applyMiddleware(logger))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
