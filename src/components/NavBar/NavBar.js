import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav className='nav-bar'>
      <h1>The Realest Realtor</h1>
      <div className="link-wrapper">
        <NavLink to="/sale" className="nav">For Sale</NavLink>
        <NavLink to="/rent" className="nav">For Rent</NavLink>
        <NavLink to="/" className="nav">Home</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;