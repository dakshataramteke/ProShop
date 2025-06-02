import React from 'react'
import Layout from '../Components/Layout'
import aboutus from '../assets/Images/about.jpeg'
const About = () => {
  return (
    <>
      <Layout title={'About us - E-commerce app'}>
        <div className="row m-0 my-3">
          <div className="col-12 col-md-6">
            <img src={aboutus} alt="" style={{width:'100%'}} />
          </div>
          <div className="col-12 col-md-6">
          <h2 className='bg-dark text-white text-uppercase p-2 text-center mb-5'>About US</h2>
            <p style={{lineHeight:'1.75rem'}}>I will create a single HTML file that contains a modern and visually appealing "About Us" page with dummy content. It will have a clean and cool design using inline CSS and may include some interactive elements or nice styling touches to make it interesting. This will be a standalone HTML file so you can open it directly in a browser.</p>
          
          <p style={{lineHeight:'1.75rem'}}>We are a passionate team dedicated to delivering the best solutions with innovation, creativity, and excellence. Our mission is to empower businesses and individuals through technology and design.</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
