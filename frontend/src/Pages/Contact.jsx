import React from 'react'
import Layout from '../Components/Layout';
import contactus from '../assets/Images/contactus.jpeg';
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall ,BiSupport} from "react-icons/bi";

const Contact = () => {
  return (
    <>
     <Layout>
       <div className='row contactus m-0 my-3'>
        <div className="col-md-6">
          <img src={contactus} alt="" style={{width:'100%'}} />
        </div>
        <div className="col-md-4">
          <h1 className='bg-dark p-2 text-white text-center text-uppercase'>Contact Us</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24 X 7 available
          </p>
          <p className="mt-2">
          <MdEmail/>  www.help@commerce.com
          </p>
            <p className="mt-2">
           <BiSolidPhoneCall/> 012-3456789
          </p>
            <p className="mt-2">
            <BiSupport/> 1800-0000-0000 (toll-free)
          </p>
        </div>
       </div>
     </Layout> 
    </>
  )
}

export default Contact;