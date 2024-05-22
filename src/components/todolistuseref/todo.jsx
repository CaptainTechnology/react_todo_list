import React, { useState } from 'react'
import './style.css';
import Additem from './Additem';
import Showitem from './Showitem';
import Remall from './Remall';



const Todolist = () => {
    const [Items,setItems]=useState([]);
    const Additems=(names)=>{
      const nam={"name":names};
      setItems((new_items)=>{
       return [...new_items,nam];
      });
    }
    const Removeall=()=>{
      setItems([]);
    }
    const removeone=(names)=>{
      const updatedItems = Items.filter((curElem) => {
        return curElem.name !== names;
      });
      setItems(updatedItems);
    }
      return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <Additem Additem={Additems}/>
          <Showitem Items={Items} removeone={removeone}/>
          <Remall Removeall={Removeall}/>
          
        </div>
      </div>
    </>
  );
    
}

export default Todolist
