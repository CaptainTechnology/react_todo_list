import React from 'react'

const Showitem = ({Items,removeone}) => {
  return (
    <div className="showItems">
    {Items.map((e)=>{
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
