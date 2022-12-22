import { REQUEST_SUCCESS } from "../redux/constants";
const cache =store => next => action=>{
    const data=window['__data'];
    const appName=window['__appName'];

    if(!data){
        return next(action);
    }
    return store.dispatch({type:REQUEST_SUCCESS, 
        payload: {
            data: data,
            appName: appName
        }})
}

export default cache;