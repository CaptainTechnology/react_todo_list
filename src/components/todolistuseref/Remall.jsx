import React from 'react'

const Remall = ({Removeall}) => {
  return (
    <div className="showItems">
    <button
      className="btn effect04"
      data-sm-link-text="Remove All" onClick={()=>{
        Removeall();
      }}>
      <span> CHECK LIST</span>
    </button>
  </div>
  )
}

export default Remall;
