import React from 'react'
import { connect } from "react-redux";

import { requestData, setEnable} from "../actions";
import './Settings.css'

const mapStateToProps = (state) => ({
  enableVal: state.setEnable.enableVal,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setNewEnable: (enable)=>setEnable(dispatch, enable)
  }
}
class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state={
      listItems: this.props.defaultEnable
    }
    this.dragItem = React.createRef();
    this.dragOverItem = React.createRef();
  }
  handleSort=()=>{
    let _listItems=[...this.state.listItems];

    const draggedItemContent=_listItems.splice(this.dragItem.current,1)[0];

    _listItems.splice(this.dragOverItem.current,0, draggedItemContent);

    this.dragItem.current=null;
    this.dragOverItem.current=null;

    this.setState({listItems: _listItems});
  }
  setSettingsList=()=>{
    this.props.setNewEnable(this.state.listItems);
  }
  render(){
    return(
      <div className='container'>
        <h3>Dimensions and Metrics</h3>
          {
            this.state.listItems.map((item,index)=>{
              return (
                <div 
                  key={index} 
                  draggable 
                  onDragStart={(e)=>this.dragItem.current=index}
                  onDragEnter={(e)=>this.dragOverItem.current=index}
                  onDragEnd={this.handleSort}
                  onDragOver={(e)=>e.preventDefault()}>
                  <h4>{item}</h4>
                </div>
              )
            })
          }
          <button onClick={()=>{this.setSettingsList()}}>Apply Changes</button>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);