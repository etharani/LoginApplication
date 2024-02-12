import React, { useState } from 'react'
import axios from 'axios'; // Import Axios
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
   const initialStateErrors={
      username:{required:false},
      password:{required:false}
   }

  const [errors,setErrors]=useState(initialStateErrors)

  const navigate =useNavigate();

  const handleSubmit=async(event)=>{
      event.preventDefault();
      let errors=initialStateErrors;
      
      if(inputs.username === ""){
       errors.username.required=true;
      }
      if(inputs.password === ""){
       errors.password.required=true; 
      }
      setErrors(errors);
      console.log(inputs);
      try {
        //Connection
        const data=await axios.post("http://localhost:8088/login",inputs)
        console.log(data.status);
        if(data.status==200){
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        alert("Not Match Username or Password");
      }
   }
   //Handle to input 
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
        <h1>Login</h1>
    </div>
    <form action="=#" onSubmit={handleSubmit}>
    <div className="mb-3">
          <label htmlFor="user" className="form-label">User Name :</label>
          <input type="text" className="form-control" id="user" name="username" onChange={handleInput} placeholder="Enter your User name"/>
          {
            errors.username.required?
            // If there is an error in providing username input then the comment in span will be displayed.
            <span class="text-danger" >User Name is required.</span>:null
            }
    </div>
    <div className="mb-3">
          <label htmlFor="password" className="form-label">Password :</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleInput} placeholder="Enter your Password"/>
          {
            errors.password.required?
            <span class="text-danger" >Password is required.</span>:null
          }
    </div>
    <div className="btn"> 
            <input type="submit" className="btn btn-login float-right"  value="Login"/>
    </div>
            
    </form>
    
</div>
  )
}

export default Login