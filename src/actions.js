import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED, ENABLE_CHANGE, DATE_CHANGE } from "./constants";

export const requestData=(dispatch,start,end)=>{
    dispatch({type:REQUEST_PENDING});

    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${start}&endDate=${end}`)
        .then(res=>res.json())
        .then(data=>{
            fetch(`http://go-dev.greedygame.com/v3/dummy/apps`)
              .then(res1=>res1.json())
              .then(d1=>{
                dispatch({type:REQUEST_SUCCESS, 
                    payload: {
                        cache_time: data.cache_time,
                        data: data.data,
                        appName: d1.data,
                        startDate: start,
                        endDate:end
                    }})
              })
          })
        .catch(error=>dispatch({type:REQUEST_FAILED, payload: error}))
}

// export const setDate=(dispatch, date, id)=>{
//     dispatch({type: DATE_CHANGE, payload: {}})
// }

export const setEnable=(dispatch,enable)=>{
    dispatch({type:ENABLE_CHANGE,payload:enable})
}