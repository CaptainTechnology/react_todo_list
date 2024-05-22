import React, { useState } from 'react'
import './style.css';
import Additem from './Additem';
import Showitem from './Showitem';
import Remall from './Remall';
import { TodoContextItem } from '../Assests/TodoContextItem';


const Todolist = () => {
    const [Items,setItems]=useState([]);
      return (
    <>
    <TodoContextItem.Provider value={{
      AllItems:Items,
      set:setItems,
      }}>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>✌ Add Your List Here using context ✌</figcaption>
          </figure>
          <Additem />
          <Showitem/>
          <Remall/>
        </div>
      </div>
    </TodoContextItem.Provider>
    </>
  );
    
}

export default Todolist
