import { REQUEST_PENDING, 
    REQUEST_SUCCESS, 
    REQUEST_FAILED, 
    ENABLE_CHANGE, 
    START_DATE_CHANGE,
    END_DATE_CHANGE } from "./constants";


export const requestData=(dispatch,start,end)=>{
    dispatch({type:REQUEST_PENDING});

    fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${start}&endDate=${end}`)
        .then(res=>res.json())
        .then(data=>{
            fetch(`http://go-dev.greedygame.com/v3/dummy/apps`)
              .then(res1=>res1.json())
              .then(d1=>{
                //Storing in the cache
                // window['__appName'] = d1;
                // window['__data']=data.data;
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

export const setStartDate=(dispatch, date)=>{
    dispatch({type: START_DATE_CHANGE, payload: date})
}

export const setEndDate=(dispatch, date)=>{
    dispatch({type: END_DATE_CHANGE, payload: date})
}

export const setEnable=(dispatch,enable)=>{
    dispatch({type:ENABLE_CHANGE,payload:enable})
}