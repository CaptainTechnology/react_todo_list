import React, { useContext } from 'react'
import { TodoContextItem } from '../Assests/TodoContextItem';

const Remall = () => {
  const {set}=useContext(TodoContextItem);
  const rall=()=>{
    set([]);
  }
  return (
    <div className="showItems">
    <button
      className="btn effect04"
      data-sm-link-text="Remove All" onClick={()=>{
        rall();
      }}>
      <span> CHECK LIST</span>
    </button>
  </div>
  )
}

export default Remall;
