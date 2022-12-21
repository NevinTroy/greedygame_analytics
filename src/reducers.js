import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  ENABLE_CHANGE,
} from "./constants.js";

let initialState = {
  isPending: false,
  cache_time: 0,
  data: [],
  error: "",
  appName: [],
  startDate:'',
  endDate:''
};

// let initialDates={
//   startDate:'',
//   endDate:''
// }

// export const setDate=(state=initialDates, action={})=>{
//   return Object.assign({},state, {
//     [action.payload.id]: action.payload.date
//   })
// }

export const requestData = (state =initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
        isPending: false,
        appName: action.payload.appName,
        cache_time: action.payload.cache_time,
        startDate: action.payload.start,
        endDate: action.payload.end
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
    return Object.assign({}, state,{enableVal:action.payload})
}