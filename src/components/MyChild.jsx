import React from 'react'
import Navbar from './Navbar'

function MyChild(props) {
    
  return (
    <>
    <Navbar/>
    <h1>Hi i am a child component</h1>
    <h1>{props.title}</h1>
    </>
  )
}

export default MyChild
