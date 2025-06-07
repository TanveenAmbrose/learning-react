import React from 'react'
import Navbar from './Navbar'


const DataReturn=(props)=> {
  return (
    <>
    <div className="container text-center p-4 m-2 border-4 border-indigo-500">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
    </div>
    </>
  )
}

export default DataReturn
