import React, { Component } from 'react'
import { Link } from 'react-router';

export class Navbar extends Component {
  render() {
    return (
      <>
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><Link to="/mode">Mode</Link></li>
            <li><Link to="/DateAndTime">DateAndTime</Link></li>
            <li><Link to="/Badboy">Badboy</Link></li>
            <li><Link to="/Clickboard">Clickboard</Link></li>
            <li><Link to="/Focus">Focus</Link></li>
            <li><Link to="/SubmitDetails">SubmitDetails</Link></li>
            <li><Link to="/Expression">Expression</Link></li>
          </ul>
        </li>
        <li><Link to="/Keyboard">Keyboard</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><Link to="/mode">Mode</Link></li>
            <li><Link to="/DateAndTime">DateAndTime</Link></li>
            <li><Link to="/Badboy">Badboy</Link></li>
            <li><Link to="/Clickboard">Clickboard</Link></li>
            <li><Link to="/Focus">Focus</Link></li>
            <li><Link to="/SubmitDetails">SubmitDetails</Link></li>
            <li><Link to="/Expression">Expression</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/Keyboard">Keyboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline btn-success">LOG IN</a>
  </div>
</div>
        </div>
      </>
    )
  }
}

export default Navbar
