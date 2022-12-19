import React, { Component } from "react";
import { connect } from "react-redux";

import { requestData, changeDate } from "./actions";
import "./App.css";

const mapStateToProps = (state) => ({
  apiVal: state,

})

const mapDispatchToProps = (dispatch) => {
  return {
    requestnewData: (start, end)=>requestData(dispatch, start, end),
    changenewDate: (id,val)=>changeDate(dispatch,id,val)
  }
}

class App extends Component {
  componentDidMount() {
    this.props.requestnewData(this.props.apiVal.startDate, this.props.apiVal.endDate);
  }

  setDate=(event)=>{
    const val=event.target.value;
    const id=event.target.id;

    this.props.changenewDate(id,val);
  }
  
  changeFormat=(date)=>{
    const d =new Date(date);
    const nameOfMonth = d.toLocaleString('default', {
      month: 'long',
    });
    return `${d.getDate()} ${nameOfMonth} ${d.getFullYear()}`;
  }

  render() {
    
    return (
      <div className="App">
      <div className="bar"></div>
        <h1>Analytics</h1>
        <input id='startDate' type='date' value={this.props.apiVal.startDate} onChange={(event)=>{this.setDate(event)}} />
        <input id='endDate' type='date' value={this.props.apiVal.endDate} onChange={(event)=>{this.setDate(event)}} /> 
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>App Name</th>
              <th>Clicks</th>
              <th>AD Requests</th>
              <th>AD Response</th>
              <th>Impression</th>
              <th>Revenue</th>
              <th>Fill Rate</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
          {
            !this.props.apiVal.isPending ? (
              this.props.apiVal.data.map((item,index)=>{
                 return(
                  <tr key={index}>
                    <td>{this.changeFormat(item.date)}</td>
                    {
                      this.props.apiVal.appName.map((it,ind)=>{
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
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
