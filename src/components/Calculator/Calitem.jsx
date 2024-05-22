
import React from 'react'

const Calitem = ({Btn,Clk}) => {
  return (
    <>
      {Btn.map((e)=>{
        return  <div className="btn" key={e.name} onClick={()=>{
          Clk(e.name);
        }}> {e.name} </div>
       })}
    
    </>
  )
}

export default Calitem
