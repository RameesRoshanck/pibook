import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import './ResetPassword.css'
import axios from 'axios';
import swal from 'sweetalert'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from "react-router-dom";


function ResetPassword(){
  let navigate = useNavigate();
    const [reset,setReset]=useState({
      email:"",
    })
    const [resetErr,setResetErr]=useState(false)

    const toastOptions = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
        };

   const handleChange=(e)=>{
    e.preventDefault()
      const {name,value}=e.target
     setReset({
       ...reset,[name]:value
     })
    }
   
    const handleSubmit=async(e)=>{
       e.preventDefault()
       if(!reset.email){
        setResetErr(true)
        return false
       }else{
            axios.post("http://localhost:8000/reset",reset).then((result)=>{
            console.log(result.data.message);
            // navigate('/reset/:token')
           })
       }

    }

  return (
    <div className="parantDiv">
        <div className="auth-form-conatiner" >
          <h2 className='font-bold underline'>Pibook</h2>
          <form onSubmit={handleSubmit} className="login-form">

          <TextField
          label="email"
          name='email' 
          value={reset.email}
          onChange={handleChange}
          id="email"
          type='email'
          variant="standard" />
          <p>{resetErr && !reset.email && <label style={{color:"red"}}>email is required</label>}</p>
            <button className="btn" type="submit" >Submit</button>
          </form>
        </div>
        <ToastContainer/>
      </div>
  )
}

export default ResetPassword