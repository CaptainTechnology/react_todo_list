import React, { useContext } from 'react'
import { TodoContextItem } from '../Assests/TodoContextItem'

const Showitem = () => {
  const {AllItems}=useContext(TodoContextItem);
  const {set}=useContext(TodoContextItem);
  const removeone=(names)=>{
    const updatedItems = AllItems.filter((curElem) => {
      return curElem.name !== names;
    });
    set(updatedItems);
  }
  
  return (
    <div className="showItems">
    {AllItems.map((e)=>{
      return (
        <div className="eachItem" key={e.name} >
          <h3>{e.name}</h3>
          <div className="todo-btn">
            <i className="far fa-edit add-btn"></i>
            <i className="far fa-trash-alt add-btn" onClick={()=>{
              removeone(e.name);
            }}></i>
          </div>
        </div>
        
      )
    })}
      
  </div>
  )
}

export default Showitem
