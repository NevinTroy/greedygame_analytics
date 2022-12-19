import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "./constants.js";

let initialState = {
  isPending: false,
  cache_time: 0,
  data: [],
  error: "",
  appName: ""
};

export const gatherData = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
        isPending: false,
      });
    case REQUEST_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
