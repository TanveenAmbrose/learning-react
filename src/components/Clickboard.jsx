import React from 'react'
import { Link } from 'react-router';
import Navbar from './Navbar';

function Clickboard() {
    const CopyText = ()=>{
        alert("Text has been copied");
    }
    const CutText =()=>{
        alert("Text has been Cut");
        console.log("Text Cut successfully");
    }
  return (
    <>
    <Navbar/>
    <div>
      <p onCopy={CopyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, non!</p>
      <h3 onCut={CutText}>Lorem ipsum dolor sit amet.</h3>
    </div>
    </>
  )
}

export default Clickboard
