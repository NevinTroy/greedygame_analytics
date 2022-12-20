import React, {useState, useRef} from 'react'
import { connect, useDispatch, useSelector, useStore} from 'react-redux';

import { setEnable} from "../actions";
import './Settings.css'

function Settings(props){
  const dispatch=useDispatch();

  const [listItems,setListItems]=useState(props.defaultenableVal);
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  
  const handleSort=()=>{
    let _listItems=[...listItems];

    const draggedItemContent=_listItems.splice(dragItem.current,1)[0];

    _listItems.splice(dragOverItem.current,0, draggedItemContent);

    dragItem.current=null;
    dragOverItem.current=null;

    setListItems(_listItems);
  }
  const setSettingsList=()=>{
    setEnable(dispatch,listItems);
  }
  return(
      <div className='container'>
        <h3>Dimensions and Metrics</h3>
          {
            listItems.map((item,index)=>{
              return (
                <div 
                  key={index} 
                  draggable 
                  onDragStart={(e)=>dragItem.current=index}
                  onDragEnter={(e)=>dragOverItem.current=index}
                  onDragEnd={handleSort}
                  onDragOver={(e)=>e.preventDefault()}>
                  <h4>{item}</h4>
                </div>
              )
            })
          } 
          <button onClick={()=>{setSettingsList()}}>Apply Changes</button>
    </div>
    )
  
}

export default Settings;