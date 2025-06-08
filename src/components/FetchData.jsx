import React, { useEffect, useState } from 'react'
import DataReturn from './DataReturn'
import Navbar from './Navbar';

function FetchData() {
    const [saveData, setData] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>setData(data))
        },1000)
    },[])
  return (
    <div>
        <Navbar/>
    {
        saveData &&
        saveData.map((data)=>{
           return <DataReturn name={data.name} email={data.email} id={data.id} street={data.address.street}/>
        })
    }
    </div>
  )
}

export default FetchData
