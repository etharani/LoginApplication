import React from 'react'
import "./Signup.css";


function Signup() {
  return (
    <section class="register-block">
    <div class="container">
       <div class="row ">
          <div class="col register-sec">
             <h2 class="text-center">Register Now</h2>
             <form class="register-form" action="" >
             <div class="form-group">
                <label for="exampleInputEmail1" class="text-uppercase">User Name</label>
                <input type="text" class="form-control" name="name" id=""  />
             </div>
             <div class="form-group">
                <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                <input  class="form-control" type="password"  name="password" id="" />
             </div>
             <div class="form-group">
                <input type="submit" class="btn btn-login float-right"  value="Register"/>
             </div>
             <div class="form-group">
                <div class="signup_link">Already a member ? <a href="index.html">Login now</a></div>
             </div>
             </form>
          </div>
       </div>
    </div>
  </section>
  )
}

export default Signup