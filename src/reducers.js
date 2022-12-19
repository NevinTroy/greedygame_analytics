import { current } from "@reduxjs/toolkit";
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
  appName: [],
  startDate:'2021-05-01',
  endDate:'2021-05-03',
  enable:['clicks', 'requests', 'response', 'impression', 'fillRate', 'CTR']  
};

export const gatherData = (state =initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
        isPending: false,
        appName: action.payload.appName,
        cache_time: action.payload.cache_time,
        enable: initialState.enable,
        startDate: initialState.startDate,
        endDate: initialState.endDate
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

let dateState={

}

// export const changeDate=(state={dateState}, action={})=>{
//   return Object.assign({}, state,{
//     [action.payload.id]: action.payload.val
//   })
// }