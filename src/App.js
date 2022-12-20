import React, { Component } from "react";
import { connect } from "react-redux";

import { requestData, setEnable} from "./actions";
import Settings from "./components/Settings";
import "./App.css";

let startDate=''
let endDate=''
let defaultEnable=['Clicks', 'AD Requests', 'AD Responses', 'Impressions','Revenue', 'Fill Rate', 'CTR']

const mapStateToProps = (state) => ({
  isPending: state.requestData.isPending,
  cache_time: state.requestData.cache_time,
  data: state.requestData.data,
  appName: state.requestData.appName,
  startDate: state.requestData.startDate,
  endDate: state.requestData.endDate,
  error: state.requestData.error,
  enableVal: state.setEnable.enableVal,
})

const mapDispatchToProps = (dispatch) => {
  return {
    requestnewData: (start, end)=>requestData(dispatch, start, end),
    setNewEnable: ()=>setEnable(dispatch)
  }
}

class App extends Component {
  componentDidMount() {
    this.props.requestnewData(startDate, endDate);
  }
  setDate=(event)=>{
    event.target.id === 'startDate' ? startDate=event.target.value : endDate=event.target.value;
  }
  
  changeFormat=(date)=>{
    const d =new Date(date);
    const nameOfMonth = d.toLocaleString('default', {
      month: 'long',
    });
    return `${d.getDate()} ${nameOfMonth} ${d.getFullYear()}`;
  }

  fetchNewData=()=>{
    this.props.requestnewData(startDate, endDate);
  }

  render() {
    return (
      <div className="App">
        <div className="bar"></div>
        <h1>Analytics</h1>
        <input id='startDate' type='date' value={this.props.startDate} onChange={(event)=>{this.setDate(event)}} />
        <input id='endDate' type='date' value={this.props.endDate} onChange={(event)=>{this.setDate(event)}} /> 
        <button onClick={()=>{this.fetchNewData()}}>Submit</button>
        {
          this.props.data === undefined ? <h1>wrong</h1>
          :
          <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>App Name</th>
              {
                typeof this.props.enableVal === 'object' 
                  ? 
                defaultEnable.map((val,index)=>{
                  return <th key={index}>{val}</th>
                })
                  :
                this.props.enableVal.map((val,index)=>{
                  return <th key={index}>{val}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
          {
            !this.props.isPending ? (
              this.props.data.map((item,index)=>{
                 return(
                  <tr key={index}>
                    <td>{this.changeFormat(item.date)}</td>
                    {
                      this.props.appName.map((it,ind)=>{
                        if(it.app_id === item.app_id){
                          return <td>{it.app_name}</td>
                        }
                      })
                    }
                    <td>{item.clicks}</td>
                    <td>{item.requests}</td>
                    <td>{item.responses}</td>
                    <td>{item.impressions}</td>
                    <td>{item.revenue.toFixed(2)}</td>
                    <td>{((item.requests/item.responses)*100).toFixed(2)}</td>
                    <td>{((item.clicks/item.impressions)*100).toFixed(2)}</td>
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
        <Settings defaultEnable={defaultEnable} />   
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
