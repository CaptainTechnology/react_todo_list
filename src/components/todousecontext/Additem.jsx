import React, { useContext, useRef} from 'react'
import { TodoContextItem } from '../Assests/TodoContextItem';

const Additem = () => {
  const {set}=useContext(TodoContextItem);
  const itm=useRef();
  const Addsitm=(names)=>{
    const nam={"name":names};
    set((new_items)=>{
     return [...new_items,nam];
    });
  }
  const add=()=>{
    const itemname=itm.current.value;
    if(itemname===""){
      alert("Enter at least one word");
    }else{
      Addsitm(itemname);
      itm.current.value="";
    }
  }
  return (
    <div className="addItems">
      <input
        type="text"
        placeholder="✍ Add Items"
        className="form-control"  ref={itm} onKeyDown={(e)=>{
          if(e.key==="Enter"){
            add();
          }
        }}
      />
      <i className="fa fa-plus add-btn" onClick={()=>{
        add();
      }} ></i>
    </div>
  )
}

export default Additem;
