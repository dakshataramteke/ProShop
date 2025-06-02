
import {Link, NavLink } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";;

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to={'/'} className="navbar-brand" ><GiShoppingCart style={{fontSize:'2.5rem'}}/> Ecommerce App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link"  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/signup'} className="nav-link" >Sign Up</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/category'} className="nav-link" >Category</NavLink>
        </li>
            <li className="nav-item">
          <NavLink to={'/register'} className="nav-link" >Register</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/login'} className="nav-link" >Login</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to={'/cart'} className="nav-link" >Cart(0)</NavLink>
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
