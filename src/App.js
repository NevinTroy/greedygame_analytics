import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { requestData, setEnable, setStartDate, setEndDate} from "./actions";
import Settings from "./components/Settings/Settings";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import "./App.css";
import Table from './components/Table/Table';
import logo from './logo.png';

import { GoSettings } from "react-icons/go";

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

  const [toggle,setToggle]=useState(false);

  useEffect(()=>{
      requestData(dispatch,'2020-12-11','2020-12-12');
  },[error])

  const setDate=(event)=>{
    event.target.id === 'startDate' ? setStartDate(dispatch, event.target.value): setEndDate(dispatch, event.target.value);
  }

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
              console.log('none')
          }
        </div>
        {
          Object.keys(data).length !== 0
            ?
          <div className='table'>
            <Table enableVal={enableVal} isPending={isPending} data={data} appName={appName} /> 
          </div>
          : 
          <div className='errorBoundary'>
            <ErrorBoundary />
          </div>
        }
      </div>
    )
}

export default App;