import React, { useState } from 'react'

const Additem = ({Additem}) => {
  const [oneitem,setoneitem]=useState("");
  return (
    <div className="addItems">
      <input
        type="text"
        placeholder="✍ Add Item"
        className="form-control" value={oneitem} onKeyDown={(e)=>{
          if(e.key=="Enter"){
            if(oneitem==""){
              alert("Enter at least one word");
            }else{
              Additem(oneitem);
              setoneitem(""); 
            }
          }
        }} onChange={(e)=>{
          setoneitem(e.target.value);
        }}
      />
      <i className="fa fa-plus add-btn" onClick={()=>{
        if(oneitem==""){
          alert("Enter at least one word");
        }else{
          Additem(oneitem);
          setoneitem(""); 
        }
      }} ></i>
    </div>
  )
}

export default Additem;
