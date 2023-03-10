import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import qs from 'qs';
import {createBrowserHistory} from 'history';

import { requestData, setEnable, setStartDate, setEndDate} from "./redux/actions";
import Settings from "./components/Settings/Settings";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import "./App.css";
import Table from './components/Table/Table';

import { GoSettings } from "react-icons/go";

const App=()=>{
  const dispatch=useDispatch();

  // const history = createBrowserHistory();

  const isPending=useSelector(state=>state.requestData.isPending);
  const cache_time=useSelector(state=>state.requestData.cache_time);
  const data=useSelector(state=>state.requestData.data);
  const appName=useSelector(state=>state.requestData.appName);
  let startDate=useSelector(state=>state.setStartDate.startDate);
  let endDate=useSelector(state=>state.setEndDate.endDate);
  let enableVal=useSelector(state=>state.setEnable.enableVal) ;
  const error=useSelector(state=>state.requestData.error);

  const [toggle,setToggle]=useState(true);

  useEffect(()=>{
      requestData(dispatch,startDate,endDate);

      // const filterParams=history.location.search.substr(1);
      // const filtersFromParams=qs.parse(filterParams);

      // if(filterParams.count){
      //   setStartDate(dispatch,String(filtersFromParams.startDate));
      //   setEndDate(dispatch,String(filtersFromParams.endDate));
      //   setEnable(dispatch,Array(filtersFromParams.enableVal));
      // }
  },[error])

  const setDate=(event)=>{
    event.target.id === 'startDate' ? setStartDate(dispatch, event.target.value): setEndDate(dispatch, event.target.value);
  }

  // useEffect(()=>{
  //   history.push(`?startDate=${startDate}`);
  // },[startDate])

  // useEffect(()=>{
  //   history.push(`?endDate=${endDate}`);
  // },[startDate])

  // useEffect(()=>{
  //   history.push(`?enableVal=${enableVal}`);
  // },[enableVal])

  return(
    <div className='App'>
      <div className='bar'></div>
        <div className='header'>
          <h1>Analytics</h1>
        </div>
        <div className='settings'>
          <input id='startDate' type='date' value={startDate} onChange={(event)=>{setDate(event)}} />
          <input id='endDate' type='date' value={endDate} onChange={(event)=>{setDate(event)}} />       
          <button onClick={()=>{toggle ? setToggle(false) : setToggle(true)}}><GoSettings className='settingsIcon'/>Settings</button>
          {
            toggle ? 
              <Settings 
              setEnable={setEnable} requestData={requestData} 
              startDate={startDate} endDate={endDate} 
              defaultenableVal={enableVal} setToggle={setToggle}
              />
            :
            console.error()
          }
        </div>
        {
          Object.keys(data).length !== 0
            ?
          <div className='table'>
            <Table enableVal={enableVal} isPending={isPending} data={data} appName={appName} /> 
          </div>
          : 
          <div className='errorBoundary' >
            <ErrorBoundary />
          </div>
        }
      </div>
    )
}

export default App;