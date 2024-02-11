import React, { useState } from 'react'
import "./Signup.css";


function Signup() {

   useState({
      username:{required:false},
      password:{required:false}
   })
  return (
   <div class="container">
    <div class="register-sec">
        <h1>Registration</h1>
    </div>
    <form action="=#">
    <div class="mb-3">
          <label for="user" class="form-label">User Name :</label>
          <input type="text" class="form-control" id="user" placeholder="Enter your User name"/>
    </div>
    <div class="mb-3">
          <label for="password" class="form-label">Password :</label>
          <input type="password" class="form-control" id="password" placeholder="Enter your Password"/>
    </div>

         
            <div class="btn"> 
            <input type="submit" class="btn btn-login float-right"  value="Register"/>
            </div>
            <div class="signup_link">Already a member ? <a href="index.html">Login now</a></div>
    </form>
    
</div>
  )
}

export default Signup