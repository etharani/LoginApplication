import React, { useState } from 'react'
import axios from 'axios';  // Import Axios
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  // Create to the error message and state
   const initialStateErrors={
      username:{required:false},
      password:{required:false}
   }

   const [errors,setErrors]=useState(initialStateErrors)

  const navigate =useNavigate();
  // Called when Onsubmit event
  const handleSubmit=async(event)=>{
    //Preventing browser loading using to preventDefault 
      event.preventDefault();
      let errors=initialStateErrors;
      //Know if there is error
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
   //Set the input
   const [inputs,setInputs]=useState({
      username:"",
      password:""
   })
   //Handle to input 
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
            //Using to if condition
            errors.username.required?
            // If there is an error in providing username input then the comment in span will be displayed.
            <span class="text-danger" >User Name is required.</span>:null                     
            }
    </div>
    <div className="mb-3">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleInput} placeholder="Enter your Password"/>
          {
            errors.username.required?
            //If there is an error in providing password input then the comment in span will be displayed.
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