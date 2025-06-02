import { useState } from "react";
import Layout from "../../Components/Layout";
import {  toast } from 'react-toastify'
import axios from "axios";
import './Auth.css'
// import { useNavigate } from "react-router-dom";

const Register = () => {
    // const navigate = useNavigate();
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
 
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

const handleSubmit = async(e)=>{
 e.preventDefault();
 const response =await  axios.post("http://localhost:3000/api/v1/auth/register",login);
 console.log(response.data);
 toast("Register Successfully");
}


  return (
    <>
      <Layout>
        <section>
          <div className="register">
            <div className="container">
              <div className="row my-3">
                <h1 className="text-center">Register</h1>
                <div className="col-12 col-md-10 offset-md-1">
                  <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label"
                      >
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Enter your Name"
                        name="name"
                        value={login.name}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Enter Name.</div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Email"
                        className="form-label"
                      >
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="Enter your Email"
                        name="email"
                        value={login.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Enter Email.</div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Password"
                        className="form-label"
                      >
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="Password"
                        placeholder="Enter your Password"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Enter Password.</div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Phone"
                        className="form-label"
                      >
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Phone"
                        placeholder="Enter your Mobile No."
                        name="phone"
                        value={login.phone}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Enter Phone Number.</div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="Address"
                        className="form-label"
                      >
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Address"
                        placeholder="Enter your Address"
                        name="address"
                        value={login.address}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Enter Address.</div>
                    </div>

            <div className=" d-flex justify-content-center">
 <button type="submit" className="btn btn-dark">
                      Register
                    </button>
            </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Register;
