import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink to={'/'} className="navbar-brand" >Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/signup'} className="nav-link" >Sign Up</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/register'} className="nav-link" >Register</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/login'} className="nav-link" >Login</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/login'} className="nav-link" >Cart(0)</NavLink>
        </li>
     </ul>
      
    </div>
  </div>
</nav>
      </header>
    </>
  )
}

export default Header
