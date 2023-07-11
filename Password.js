import React from 'react'
import './Password.css'

const Password=()=>{
	return(
		<div class="login-page">
            {/* <div class="col login-title">
    <h1>
    Reset Password
    </h1>
  </div> */}
  <div class="form">
  <div class="col login-title">
    <h1>
    Reauthorize
    </h1>
  </div>
    <form>
      <input type="text" placeholder="Email id"/>
      <input type="password" placeholder="New Password"/>
      <input type="password" placeholder="Retype Password"/>
      <button>Reset</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
	)
}

export default Password;