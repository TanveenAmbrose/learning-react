import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'

function UseEffect() {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        document.title = `Chat ${count}`
        setTimeout(()=>{
            setCount(count + 1);
        },1000);
    })
  return (
    <>
    <Navbar/>
    <p className='text-center'>I have Been waiting for {count} seconds</p>
    </>
  )
}

export default UseEffect
