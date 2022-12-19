import { apiCall } from "./api";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED } from "./constants";

export const requestData=(dispatch,startDate,endDate)=>{
    dispatch({type:REQUEST_PENDING});

    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`)
        .then(res=>res.json())
        .then(data=>{
            fetch(`http://go-dev.greedygame.com/v3/dummy/apps`)
              .then(res1=>res1.json())
              .then(d1=>{
                dispatch({type:REQUEST_SUCCESS, 
                    payload: {
                        cache_time: data.cache_time,
                        data: data.data,
                        appName: d1.data
                    }})
              })
          })
        .catch(error=>dispatch({type:REQUEST_FAILED, payload: error}))
}

export const changeDate=(dispatch, id, val)=>{
  console.log(id,val);
  // dispatch({payload: {id, val}})
}