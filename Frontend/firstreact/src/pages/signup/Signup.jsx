import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Signup.css";

import { useNavigate } from "react-router-dom";
function Signup() {
   const initialStateErrors={
      username:{required:false},
      password:{required:false}
   }

   const [errors,setErrors]=useState(initialStateErrors)

  const navigate =useNavigate();

   const handleSubmit=async(event)=>{
      event.preventDefault();
      let errors=initialStateErrors;
      
      if(inputs.username ===""){
       errors.username.required=true;
       
      }
      if(inputs.password===""){
       errors.password.required=true;
      
       
      }
      setErrors(errors);
      console.log(inputs);
      try {
        const data=await axios.post("http://localhost:8088/register",inputs)
        console.log(data);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
   }

   const [inputs,setInputs]=useState({
      username:"",
      password:""
   })

   const handleInput=(event)=>{
     setInputs({...inputs,[event.target.name]:event.target.value})
    
   }

  return (
   <div className="container">
    <div className="register-sec">
        <h1>Registration</h1>
    </div>
    <form action="=#" onSubmit={handleSubmit}>
    <div className="mb-3">
          <label htmlFor="user" className="form-label">User Name :</label>
          <input type="text" className="form-control" id="user" name="username" onChange={handleInput} placeholder="Enter your User name"/>
          {
            errors.username.required?
            <span class="text-danger" >User Name is required.</span>:null
                            

                                
            }
    </div>
    <div className="mb-3">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleInput} placeholder="Enter your Password"/>
          {
            errors.username.required?
            <span class="text-danger" >Password is required.</span>:null
          }
    </div>
    <div className="btn"> 
            <input type="submit" className="btn btn-login float-right"  value="Register"/>
    </div>
            <div className="signup_link">Already a member ? <Link to="/login">Login now</Link></div>
    </form>
    
</div>
  )
}

export default Signup