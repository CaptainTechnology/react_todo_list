import React, { useRef, useState } from 'react'

const Additem = ({Additem}) => {
  let itm=useRef();
  const add=()=>{
    const itemname=itm.current.value;
    if(itemname==""){
      alert("Enter at least one word");
    }else{
      Additem(itemname);
      itm.current.value="";
    }
  }
  return (
    <div className="addItems">
      <input
        type="text"
        placeholder="✍ Add Items"
        className="form-control"  ref={itm} onKeyDown={(e)=>{
          if(e.key=="Enter"){
            add(e);
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
