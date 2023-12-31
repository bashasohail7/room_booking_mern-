import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">lamabooking</span>
      </Link>
      {/* {user ? user.username : ( */}
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      {/* )} */}
    </div>
  </div>
  )
}
