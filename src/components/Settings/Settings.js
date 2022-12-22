import React, {useState} from 'react'
import { useDispatch} from 'react-redux';

import './Settings.css'

const Settings=(props)=>{
  
  const {setEnable, requestData, startDate, endDate, defaultenableVal, setToggle}=props;
  const dispatch=useDispatch();

  const [listItems,setListItems]=useState(defaultenableVal);
  const [filteredListItems,setFilteredListItems]=useState(defaultenableVal);

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

  const handleChange=(e) =>{
    const { name,checked } = e.target;
    if (checked) {
      setFilteredListItems([...filteredListItems, name]);
    } else {
      setFilteredListItems(filteredListItems.filter((item) => item !== name));
    }
  }

  function isChecked(item){
    return filteredListItems.includes(item);
  }

  const applyChanges= ()=>{
    const res=listItems.filter(item => filteredListItems.includes(item));
    requestData(dispatch,startDate,endDate);
    setEnable(dispatch,res);
  }
  return(
    <div className='container'>
      <h3>Dimensions and Metrics</h3>
      <div className='yuhh'>
      {
          defaultenableVal.map((item,index)=>{
            return (
              <div className='checkbox'
                key={index} 
                draggable 
                onDragStart={(e)=>dragItem.current=index}
                onDragEnter={(e)=>dragOverItem.current=index}
                onDragEnd={handleSort}
                onDragOver={(e)=>e.preventDefault()}
              >
                <label>
                  <input 
                    id={index} name={item} 
                    type='checkbox' 
                    checked={isChecked(item)} 
                    onChange={handleChange}
                  /><span>{item}</span>
                </label>
              </div>
            )
          })    
        } 
      </div>
      <button onClick={applyChanges} className='apply'>Apply</button>
      <button className='close' onClick={()=>{setToggle(false)}}>Close</button>
    </div>
  ) 
}

export default Settings;