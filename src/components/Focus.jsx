import React from 'react'
import { Link } from 'react-router';
import Navbar from './Navbar';

function Focus() {
    const OnFocus = ()=>{
        console.log("Focus is on");
    }
    const OnBlur = ()=>{
        console.log("Blur is done");
    }
  return (
    <>
    <Navbar/>
    <div>
       <br /><br />
      <h1 className="text-2xl">Focus Event</h1>

      <input type="text"  onFocus={OnFocus}/>
      <br /><br />
      <input type="text"  onBlur={OnBlur}/>
    </div>
    </>
  )
}

export default Focus
