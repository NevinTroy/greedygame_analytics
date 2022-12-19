import React, { Component } from "react";
import { connect } from "react-redux";

import { requestData } from "./actions";

import "./App.css";

const mapStateToProps = (state) => ({
  apiVal: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    requestnewData: ()=>requestData(dispatch)
  }
}

class App extends Component {
  componentDidMount() {
    this.props.requestnewData();
  }


  render() {
    
    let startDate='';
    let endDate='';

    return (
      <div className="App">
      <div className="bar"></div>
        <h1>Analytics</h1>
        <input type='date' onChange={(event)=>{startDate=event.target.value}} />
        <input type='date' onChange={(event)=>{endDate=event.target.value}} />
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
                    <td>{item.date}</td>
                    <td>yo</td>
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
