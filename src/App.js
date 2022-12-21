import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { requestData, setEnable, setStartDate, setEndDate} from "./actions";
import Settings from "./components/Settings";
import "./App.css";

let defaultenableVal=['Clicks', 'AD Requests', 'AD Responses', 'Impressions','Revenue', 'Fill Rate', 'CTR'];

function App(){
    const dispatch=useDispatch();

    const isPending=useSelector(state=>state.requestData.isPending);
    const cache_time=useSelector(state=>state.requestData.cache_time);
    const data=useSelector(state=>state.requestData.data);
    const appName=useSelector(state=>state.requestData.appName);
    let startDate=useSelector(state=>state.setStartDate.startDate);
    let endDate=useSelector(state=>state.setEndDate.endDate);
    let enableVal=useSelector(state=>state.setEnable.enableVal) ;
    const error=useSelector(state=>state.requestData.error);


    useEffect(()=>{
        requestData(dispatch,'2020-12-11','2020-12-12');
    },[error])

    const changeFormat=(date)=>{
        const d =new Date(date);
        const nameOfMonth = d.toLocaleString('default', {
          month: 'long',
        });
        return `${d.getDate()} ${nameOfMonth} ${d.getFullYear()}`;
      }
    
    const setDate=(event)=>{
        event.target.id === 'startDate' ? setStartDate(dispatch, event.target.value): setEndDate(dispatch, event.target.value);
      }
    
    const fetchNewData=()=>{
      requestData(dispatch,startDate,endDate);
    }
    return(
        <div className="App">
            <div className="bar"></div>
            <h1>Analytics</h1>
            <input id='startDate' type='date' value={startDate} onChange={(event)=>{setDate(event)}} />
            <input id='endDate' type='date' value={endDate} onChange={(event)=>{setDate(event)}} /> 
            <button onClick={()=>fetchNewData()}>Submit</button>
        {
            data === undefined ? <h1>wrong</h1>
            :
            <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>App Name</th>
              {
                enableVal.map((val,index)=>{
                  return <th key={index}>{val}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
          {
            !isPending ? (
              data.map((item,index)=>{
                 return(
                  <tr key={index}>
                    <td>{changeFormat(item.date)}</td>
                    {
                      appName.map((it,ind)=>{
                        if(it.app_id === item.app_id){
                          return <td key={ind}>{it.app_name}</td>
                        }
                      })
                    }
                    {
                      enableVal.map((it,ind)=>{
                        switch(it){
                          case 'Clicks':
                            return <td key={ind}>{item.clicks}</td>
                          case 'AD Requests':
                            return <td key={ind}>{item.requests}</td>
                          case 'AD Responses':
                            return <td>{item.responses}</td>
                          case 'Impressions':
                            return <td>{item.impressions}</td>
                          case 'Revenue':
                            return <td>{item.revenue.toFixed(2)}</td>
                          case 'Fill Rate':
                            return <td>{((item.requests/item.responses)*100).toFixed(2)}</td>                        
                          case 'CTR':
                            return <td>{((item.clicks/item.impressions)*100).toFixed(2)}</td>
                        }
                      })
                    } 
                  </tr>
                )
              })
            )
            :
            <h1>Loading</h1>
          }
          </tbody>
        </table>
        } 
        <Settings defaultenableVal={defaultenableVal}/>
      </div>
    )
}

export default App;