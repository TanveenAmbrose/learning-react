import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DataReturn from './DataReturn';

const FetchData =()=> {
    const [saveData, setData]= useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setData(data))
    },[])
  return (
    <>
    <Navbar/>
    <div className="container">
        {saveData &&
            saveData.map((data)=>{
                return <DataReturn name={data.name} email={data.email} id={data.id}
                phone={data.phone}/>
            })
        }
    </div>
    </>
  )
}

export default FetchData
