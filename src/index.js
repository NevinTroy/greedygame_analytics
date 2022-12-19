import React from "react";
import ReactDOM from "react-dom/client";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import { gatherData, } from "./reducers";

const logger = createLogger();
const rootReducers = combineReducers({gatherData})

const store = createStore(
  gatherData,
  compose(applyMiddleware(logger), applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
