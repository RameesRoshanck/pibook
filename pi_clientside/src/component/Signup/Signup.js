import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';

function Signup() {
  return (
    <div className="parantDiv">
    <div className="auth-form-conatiner" >
      <h2>Sign-up Page</h2>
      <form action="" className="login-form">

      <TextField id="standard-basic" 
      label="username" 
      variant="standard" />

      <TextField id="standard-basic" 
      label="Email" 
      variant="standard" />

      <TextField id="standard-basic" 
      label="Phone number" 
      variant="standard" />

      <TextField
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="standard"
    />
        <button className="btn" type="submit" >Log In</button>
      </form>
      <button className="link-btn">Forgotten password? </button>
      <button className="link-btn">Don't have an account ? Sign up here..</button>
    </div>
  </div>
  )
}

export default Signup