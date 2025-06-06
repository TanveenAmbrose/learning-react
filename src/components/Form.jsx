import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const SubmitName =(e)=>{
        setName(e.target.value)
    }
    const SubmitEmail =(e)=>{
        setEmail(e.target.value)
    }
    const SubmitPass =(e)=>{
        setPass(e.target.value)
    }
    const SubmitAll =(e)=>{
        console.log("Name :", name, "Email :", email, "Password :", pass);
        e.preventDefault();
    }

  return (
    <>
    <div className='container'>
        <h1 className='text-center'>Requiment Form</h1>
        <form action="" className='form' onSubmit={SubmitAll}>
            <div className='mb-3'>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder='Enter Your name' className='form-control' name='name' id='name' value={name} onChange={SubmitName} required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Email :</label>
                <input type="email" placeholder='Enter Your Email' className='form-control' name='email' id='email' value={email} onChange={SubmitEmail} required/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Password :</label>
                <input type="password" placeholder='Enter Your password' className='form-control' name='password' id='password' value={pass} onChange={SubmitPass} required/>
            </div>
            <button className='btn btn-success mb-3' type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form
