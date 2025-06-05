import React, { Component } from 'react'
import { Link } from 'react-router';
import Navbar from './Navbar';

export default class DateAndTime extends Component {
    FormChange =(event)=>{
        console.log(event.target.value);
    }
  render() {
    return (
      <>
      <Navbar/>
      <div>
        
        <br /><br />
        <input type="date" name="CreationDate" onChange={this.FormChange} className="form-control"/><br /><br />
        <textarea name="About" onChange={this.FormChange} placeholder='Tell Me About Yourself'></textarea><br /><br />
        <input type="radio" value="Male" name="gender" onChange={this.FormChange} />
        <label htmlFor="gender">Male</label>
        <input type="radio" value="FeMale"  name="gender" onChange={this.FormChange} />
        <label htmlFor="gender">Female</label>
      </div>
      </>
    )
  }
}
