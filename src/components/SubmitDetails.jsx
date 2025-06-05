import React, { Component } from 'react'
import Navbar from './Navbar';

export default class SubmitDetails extends Component {
  state ={
    FullName:"",
    Age:"",
    BirthDate:"",
    Department:"",
    CheckBox: false,
    Gender:"",
  }

  FormChange =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  CheckBoxHandler =(event)=>{
    this.setState({
      CheckBox : event.target.checked
    })
  }
  render() {
    const {FullName,Age,BirthDate,Department,CheckBox,Gender} = this.state
    return (
      <div>
        <Navbar/>
        <input type="text" placeholder='Enter Your Full Name' name='FullName' className='input text-center flex justify-center' value={FullName} onChange={this.FormChange}/><br />

        <input type="number" placeholder='Enter Your Age'
        name='Age' className='input text-center flex justify-center' value={Age} onChange={this.FormChange}/><br />

        <label className="input">
        <span className="label">Publish date</span>
        <input type="date" name='BirthDate' value={BirthDate} onChange={this.FormChange}/>
        </label><br />

        <label className="select">
        <select name='Department'  onChange={this.FormChange} value={Department}>
            <option value="Engineering">Engineering</option>
            <option value="BBA">BBA</option>
            <option value="Math">Math</option>
            <option value="Others">Others</option>
        </select>
        </label><br /><br />

        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <legend className="fieldset-legend">Login options</legend>
        <label className="label">
            <input type="checkbox"  className="checkbox" name='CheckBox' checked={CheckBox} onChange={this.CheckBoxHandler} value={CheckBox}/>
            Remember me
        </label>
        </fieldset><br /><br />

        <input type="radio" name='Gender' value= "Male" onChange={this.FormChange} />
        <label htmlFor="Gender">Male</label>
        <input type="radio" name='Gender' value="Female" onChange={this.FormChange}/>
        <label htmlFor="Gender">FeMale</label><br /><br />

        <button className="btn btn-dash btn-success" onClick={()=>{console.log(this.state)}}>Submit</button>


      </div>
    )
  }
}
