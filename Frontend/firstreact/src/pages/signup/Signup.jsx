import React, { useState } from 'react'
import "./Signup.css";


function Signup() {
   const initialStateErrors={
      username:{required:false},
      password:{required:false}
   }

   const [errors,setErrors]=useState(initialStateErrors)

const [error,setError]=useState('');

   const handleSubmit=(event)=>{
      event.preventDefault();
      let errors=initialStateErrors;
      let hashError=false;
      if(inputs.username=""){
       errors.username.required=true;
       setError("error");
      }
      if(inputs.password=""){
       errors.password.required=true;
       setError("error");
       
      }
      setErrors(errors);
      console.log(errors);
   }

   const [inputs,setInputs]=useState({
      username:"",
      password:""
   })

   const handleInput=(event)=>{
     setInputs({...inputs,[event.target.username]:event.target.value})
    
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
            // errors.username.required?
            // <span class="text-danger" >User Name is required.</span>:null
                                error=='error'&&<span>user name is required</span>

                                
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
            <div className="signup_link">Already a member ? <a href="index.html">Login now</a></div>
    </form>
    
</div>
  )
}

export default Signup