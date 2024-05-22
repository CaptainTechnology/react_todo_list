import React, { useState } from 'react'
import './Calculator.css'
import Buttons from '../Assests/Buttons';
import Calitem from './Calitem';

const Calculator = () => {
    const [Btn,setBtn]=useState(Buttons);
    let [Textval,SetTextval]=useState("");
    const Clk=(btnname)=>{
        const new_textval=Textval+btnname;
        SetTextval(new_textval);
        if(btnname=="="){
            let result;
            try {
                result=eval(Textval);
            } catch (error) {
                alert("invalid operator");
            }
            SetTextval(result);                
        }
        if(btnname=="Cls"){
            SetTextval("");
        }
    }

  return (
    <div className='container'>
      <div className="input-box">
        <input type="text" className='input' value={Textval}/>
      </div>
      <div className="buttons">
        <Calitem Btn={Btn} Clk={Clk}/>
      </div>
    </div>
  )
}

export default Calculator
