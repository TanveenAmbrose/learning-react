import React from 'react'

function DataReturn(props) {
  return (
    <div>
    <div className="container border-4 border-indigo-500 p-4 m-2 text-center">
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.street}</p>
    </div>
    </div>
  )
}

export default DataReturn
