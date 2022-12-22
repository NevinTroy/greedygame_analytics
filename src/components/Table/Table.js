import React from 'react'
import './Table.css'

const changeFormat=(date)=>{
    const d =new Date(date);
    const nameOfMonth = d.toLocaleString('default', {
      month: 'long',
    });
    return `${d.getDate()} ${nameOfMonth} ${d.getFullYear()}`;
}

const Table = (props) => {
    const {enableVal, isPending, data, appName}= props;
    return (
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
                          return (
                              <td key={ind}>{it.app_name}</td>
                          )
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
                            return <td key={ind}>{item.responses}</td>
                          case 'Impressions':
                            return <td key={ind}>{item.impressions}</td>
                          case 'Revenue':
                            return <td key={ind}>{item.revenue.toFixed(2)}</td>
                          case 'Fill Rate':
                            return <td key={ind}>{((item.requests/item.responses)*100).toFixed(2)}</td>                        
                          case 'CTR':
                            return <td key={ind}>{((item.clicks/item.impressions)*100).toFixed(2)}</td>
                          default:
                            return null;
                        }
                      })
                    } 
                  </tr>
                )
              })
            )
            :
            <td>Loading</td>
          }
          </tbody>
        </table>
    )
}

export default Table