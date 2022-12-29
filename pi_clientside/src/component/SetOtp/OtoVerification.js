import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import swal from 'sweetalert'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './otpverification.css'
import { useNavigate,useParams } from "react-router-dom";


function OtoVerification() {
    (
        <div className="parantDiv">
            <div className="auth-form-conatiner" >
              <h2 className='font-bold underline'>Pibook</h2>
              <form className="login-form">
    
              <TextField
              label="password"
              name='password' 
            //   value={reset.password}
            //   onChange={handleChange}
              id="password"
              type='password'
              variant="standard" />
              {/* <p>{resetErr && !reset.password && <label style={{color:"red"}}>password is required</label>}</p> */}
                <button className="btn" type="submit" >Submit</button>
              </form>
            </div>
            <ToastContainer/>
          </div>
      )
    }

export default OtoVerification