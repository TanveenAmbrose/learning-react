import React from 'react'

function Focus() {
    const OnFocus = ()=>{
        console.log("Focus is on");
    }
    const OnBlur = ()=>{
        console.log("Blur is done");
    }
  return (
    <div> <br /><br />
      <h1 className="text-2xl">Focus Event</h1>

      <input type="text"  onFocus={OnFocus}/>
      <br /><br />
      <input type="text"  onBlur={OnBlur}/>
    </div>
  )
}

export default Focus
