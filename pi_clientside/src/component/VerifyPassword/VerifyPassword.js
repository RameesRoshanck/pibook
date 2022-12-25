import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import swal from 'sweetalert'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import './Verifypassword.css'
import { useNavigate,useParams } from "react-router-dom";

function VerifyPassword() {
  let navigate = useNavigate();
  const {token}=useParams()
  console.log(token,'hai token');
    const [reset,setReset]=useState({
      password:"",
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
      //  if(!reset.password){
      //   setResetErr(true)
      //   return false
      //  }
      console.log(token,'5566');
       axios.post("http://localhost:8000/resetNew",{reset,token}).then((result)=>{
        navigate("/home")
          console.log(result.data.message,'result');
       }).catch((error)=>{
        console.log(error,'error');
       })
    }

  return (
    <div className="parantDiv">
        <div className="auth-form-conatiner" >
          <h2 className='font-bold underline'>Pibook</h2>
          <form onSubmit={handleSubmit} className="login-form">

          <TextField
          label="password"
          name='password' 
          value={reset.password}
          onChange={handleChange}
          id="password"
          type='password'
          variant="standard" />
          <p>{resetErr && !reset.password && <label style={{color:"red"}}>password is required</label>}</p>
            <button className="btn" type="submit" >Submit</button>
          </form>
        </div>
        <ToastContainer/>
      </div>
  )
}

export default VerifyPassword