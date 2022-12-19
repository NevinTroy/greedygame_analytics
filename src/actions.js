import { apiCall } from "./api";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED } from "./constants";

export const requestData=(dispatch)=>{
    dispatch({type:REQUEST_PENDING});

    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03`)
        .then(res=>res.json())
        .then(data=> dispatch({type:REQUEST_SUCCESS, payload: data}))
        .catch(error=>dispatch({type:REQUEST_FAILED, payload: error}))
}

export const getName=(dispatch)=>{
    dispatch({type:REQUEST_PENDING});

    fetch(`http://go-dev.greedygame.com/v3/dummy/apps`)
        .then(res=>res.json())
        .then(data=>dispatch({type:REQUEST_SUCCESS, payload:data}))
        .catch(error=>dispatch({type:REQUEST_FAILED, payload:error}))
}