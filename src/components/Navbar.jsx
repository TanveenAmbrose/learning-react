import React, { Component } from 'react'
import { NavLink,Link } from 'react-router';
import "./active.css"

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
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><NavLink to="/mode">Mode</NavLink></li>
            <li><NavLink to="/DateAndTime">DateAndTime</NavLink></li>
            <li><NavLink to="/Badboy">Badboy</NavLink></li>
            <li><NavLink to="/Clickboard">Clickboard</NavLink></li>
            <li><NavLink to="/Focus">Focus</NavLink></li>
            <li><NavLink to="/SubmitDetails">SubmitDetails</NavLink></li>
            <li><NavLink to="/Expression">Expression</NavLink></li>
            <li><NavLink to="/Form">Form</NavLink></li>
            <li><NavLink to="/mychild">My child</NavLink></li>
            <li><NavLink to="/toggoler">Toggoler</NavLink></li>
            <li><NavLink to="/UseEffect">UseEffect</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/Keyboard">Keyboard</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><NavLink to="/mode">Mode</NavLink></li>
            <li><NavLink to="/DateAndTime">DateAndTime</NavLink></li>
            <li><NavLink to="/Badboy">Badboy</NavLink></li>
            <li><NavLink to="/Clickboard">Clickboard</NavLink></li>
            <li><NavLink to="/Focus">Focus</NavLink></li>
            <li><NavLink to="/SubmitDetails">SubmitDetails</NavLink></li>
            <li><NavLink to="/Expression">Expression</NavLink></li>
            <li><NavLink to="/Form">Form</NavLink></li>
            <li><NavLink to="/mychild">My child</NavLink></li>
            <li><NavLink to="/toggoler">Toggoler</NavLink></li>
            <li><NavLink to="/UseEffect">UseEffect</NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink to="/Keyboard">Keyboard</NavLink></li>
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
