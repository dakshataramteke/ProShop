import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='bg-dark text-light py-3'>
         <h5 className='text-center '> All rights reserved &copy; 2025 </h5>
         <div className="text-center">
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact</Link> |
          <Link to="/policy">Privacy Policy</Link>
         </div>
        </div>
      </section>
    </>
  )
}

export default Footer
