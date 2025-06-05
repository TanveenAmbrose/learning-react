import React from 'react'
import { Link } from 'react-router';
import Navbar from './Navbar';

function Keyboard() {
    const onKeyDownText =()=>{
        console.log("Key Pressed Down");
    }
    const onKeyUpText =()=>{
        console.log("Key Pressed Up");
    }
    const onKeyPressText =()=>{
        console.log("Key Pressed");
    }
  return (
    <>
     <Navbar/>
    <div>
     
      <br /><br />
    <h1 className='text-xl'>KeyBoard</h1>
       <input type="text" onKeyDown={onKeyDownText}/> <br /><br />
       <input type="text" onKeyUp={onKeyUpText}/> <br /> <br /> 
       <input type="text" onKeyPress={onKeyPressText}/>                                  
    </div>
    </>
  )
}

export default Keyboard
