import React, {useState} from 'react'
import { useDispatch} from 'react-redux';

import './Settings.css'

function Settings(props){
  
  const dispatch=useDispatch();

  const [listItems,setListItems]=useState(props.defaultenableVal);
  const [filteredListItems,setFilteredListItems]=useState(props.defaultenableVal);

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
    const { name } = e.target;
    if (e.target.checked) {
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
    props.requestData(dispatch,props.startDate,props.endDate);
    props.setEnable(dispatch,res);
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
                onDragOver={(e)=>e.preventDefault()}
              >
                <input 
                  id={index} name={item} 
                  type='checkbox' 
                  checked={isChecked(item)} 
                  onChange={handleChange}
                />
                <label htmlFor={index}>{item}</label> 
              </div>
            )
          })    
        } 
      <button onClick={applyChanges}>Apply</button>
    </div>
  ) 
}

export default Settings;