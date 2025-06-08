import React, { useEffect, useState } from 'react'
import DataReturn from './DataReturn'
import Navbar from './Navbar';


function FetchData() {
    const [saveData, setData] = useState(null);
    const [saveImg,setImg] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>setData(data))
        },1000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=>res.json())
            .then((dataImg)=>setImg(dataImg))
        },2000)
    },[])
  return (
    <>
    <div>
        <Navbar/>
    {
        saveData && 
        saveData.map((data)=>{
           return <DataReturn name={data.name} email={data.email} id={data.id} street={data.address.street}/>
        })
    }
    {
          saveImg &&
          <img src={saveImg.message} alt="" />
          
        }
    </div>
    </>
    
  )
}

export default FetchData
