import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup=()=>{
	return(
        <div class="container row login-box">
  <div class="col login-title">
    <h1>
      Crafting Cherished Memories
    </h1>
    
    <span class="small-text">Design your dream with us!</span>
  </div>
  <div class="col login-form">
    <div class="avatar">
 {/* <img src="https://68.media.tumblr.com/avatar_8671f0f36a5f_128.png" alt="" />  */}
    </div>
    <div class="registration">
     Already have an account? 
    </div>
    <form action="" method="POST">
      <label for="login" class="login">
        <input id="login" type="text" placeholder="Username" />
        </label>
        <label for="email" class="email">
        <input id="email" type="text" placeholder='Email id'/>
      </label>
      <label for="phone" class="phone">
        <input id="phone" type="text" placeholder='Phone Number'/>
        <i class="fa fa-phone" aria-hidden="true"></i>
      </label>
      <label for="address" class="address">
        <input id="address" type="text" placeholder='Address'/>
      </label>
      <label for="passwd" class="passwd">
        <input id="passwd" type="password" placeholder="Password" />
      </label>
      <button class="button" type="submit"><Link to="./signin" className="see">Sign Up</Link></button>
    </form>
    <div class="lost-passwd">
      <a href="#">Forgot your password?</a>
    </div>
  </div>
</div>
	)
}

export default Signup  