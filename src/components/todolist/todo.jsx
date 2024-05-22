import React, { useContext, useState } from 'react'
import './style.css';
import Additem from './Additem';
import Showitem from './Showitem';
import Remall from './Remall';

const list=localStorage.getItem("myitems");
const getitem=()=>{
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}

const Todolist = () => {
    const [Items,setItems]=useState(getitem());
    const Additems=(names)=>{
      const nam={"name":names};
      const new_items=[...Items,nam];
      setItems(new_items);
      localStorage.setItem("myitems", JSON.stringify(new_items));
    }
    const Removeall=()=>{
      setItems([]);
    }
    const removeone=(names)=>{
      const updatedItems = Items.filter((curElem) => {
        return curElem.name !== names;
      });
      setItems(updatedItems);
      localStorage.setItem("myitems", JSON.stringify(updatedItems));
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
          {/* show our items  */}
          <Showitem Items={Items} removeone={removeone}/>

          {/* rmeove all button  */}
          <Remall Removeall={Removeall}/>
          
        </div>
      </div>
    </>
  );
    
}

export default Todolist
