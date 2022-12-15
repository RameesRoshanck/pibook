import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
    let navigate = useNavigate();
  return (
    <div className="parantDiv">
        <div className="auth-form-conatiner" >
          <h2>Login</h2>
          <form action="" className="login-form">
          <TextField id="standard-basic" 
          label="Email" 
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
          <button onClick={()=>{
                 navigate("/signup")
          }} className="link-btn">Don't have an account ? Sign up here..</button>
        </div>
      </div>
  )
}

export default Login