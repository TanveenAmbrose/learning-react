import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DataReturn from './DataReturn';


const FetchData=()=> {
    const [SaveData, SetData]= useState(null);
    
    useEffect(()=>{
        setTimeout(()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> SetData(data))
        }, 1000)
    },[])
   
  return (
    <>
    <Navbar/>
    <div className="container">
        {SaveData &&
            SaveData.map((data)=>{
                return <DataReturn name={data.name} email={data.email} id={data.id}
                phone={data.phone} street ={data.address.street}/>
            })
        }
    </div>
    </>
  )
}

export default FetchData
