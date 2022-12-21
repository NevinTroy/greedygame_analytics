import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  ENABLE_CHANGE,
  START_DATE_CHANGE,
  END_DATE_CHANGE
} from "./constants.js";

let initialState = {
  isPending: false,
  cache_time: 0,
  data: [],
  error: "",
  appName: [],
};

let initialSetDate={
  startDate:'2020-12-11',
  endDate:'2020-12-12'
}

let initialStartDate={
  startDate:'2020-12-11'
}
let initialEndDate={
  endDate:'2020-12-12'
}

export const setDate=(state=initialSetDate, action={})=>{
  switch(action.type){
    case START_DATE_CHANGE:
      return Object.assign({},state, {
        startDate: action.payload
    })
    case END_DATE_CHANGE:
        return Object.assign({},state, {
          startDate: action.payload
    })
    default:
      return state
  }
}
export const setStartDate=(state=initialStartDate, action={})=>{
  switch(action.type){
    case START_DATE_CHANGE:
      return Object.assign({},state, {
        startDate: action.payload
      })
    default:
      return state
  }
}
export const setEndDate=(state=initialEndDate, action={})=>{
  switch(action.type){
    case END_DATE_CHANGE:
      return Object.assign({},state, {
        endDate: action.payload
      })
    default:
      return state
  }
}
export const requestData = (state =initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
        isPending: false,
        appName: action.payload.appName,
        cache_time: action.payload.cache_time
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

let enableState={
  enableVal:['Clicks', 'AD Requests', 'AD Responses', 'Impressions','Revenue', 'Fill Rate', 'CTR']
}

export const setEnable=(state=enableState, action={})=>{
    switch(action.type){
      case ENABLE_CHANGE:
        return Object.assign({}, state,{enableVal:action.payload})
      default:
        return state;
    }
}