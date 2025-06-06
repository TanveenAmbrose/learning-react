import React from 'react'

function MyChild(props) {
    props.OnMethord("Hi i am tanveen");
  return (
    <>
    <h1>Hi i am a child component</h1>
    <h1>{props.title}</h1>
    <h1>{props.OnMethord}</h1>
    </>
  )
}

export default MyChild
