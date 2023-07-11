import React from 'react'
import './Login.css'

const Login=()=>{
	return(
        <div class="container row login-box">
  <div class="col login-title">
    <h1>
      Unlock the magic of your next event
    </h1>
    
    <span class="small-text">Let's get started!</span>
  </div>
  <div class="col login-form">
    <div class="avatar">
  </div>
    <div class="registration">
      Need an Account? <a href="#">Sign Up</a>
    </div>
    <form action="" method="POST">
      <label for="login" class="login">
        <input id="login" type="text" placeholder="Username" />
      </label>
      <label for="passwd" class="passwd">
        <input id="passwd" type="password" placeholder="Password" />
      </label>
      <button class="button" type="submit">Sign In</button>
    </form>
    <div class="lost-passwd">
      <a href="#">Forgot your password?</a>
    </div>
  </div>
</div>
	)
}

export default Login  