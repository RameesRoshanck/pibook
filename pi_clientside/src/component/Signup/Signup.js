import React,{useContext, useState} from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import OTPInput, { ResendOTP } from "otp-input-react";


function Signup() {
  let navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [otpverify,setOtpVerify]=useState(false)
  const [userDetails,setUserDetails]=useState({})

  const [input,setInput]=useState({
      username:"",
      email:"",
      phone:"",
      password:""
  })
  const [signErr,setSignErr]=useState(false)
   

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
    // console.log(e.target,'hai');
    setInput({
      ...input,[name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!input.username || !input.email || !input.phone || !input.password ){
      setSignErr(true)
      return false
    }else{
      // console.log(input,'input');
      axios.post("http://localhost:8000/Signup",input).then((result)=>{
          console.log(result.data.user,'user details');
          if(result.data.message === 'successfully Registered'){
            setUserDetails(result.data.user)
            setOtpVerify(true)
            // swal({
            //   title: "Done!",
            //   text: "successfully Registered",
            //   icon: "success",
            //   timer: 2000,
            //   button: false
            // })

          }else if(result.data.message==='this email is already exist'){
               toast('T`his email is already exist',toastOptions)
               return false
          }else if(result.data.message==='This phone number is already exist'){
            toast('This phone number is already exist',toastOptions)
            return false
       }
      }).catch(err => { 
        console.log(err) 
      });
  }
}
//  console.log(userDetails._id,'OTP');
const verify=(e)=>{
  e.preventDefault()

  let data={
      otp:OTP,
      userId:userDetails._id
  }
   if(OTP.length < 4){
    console.log('enter the 4 digit otp');
   }
   else{
    axios.post("http://localhost:8000/verifyotp",data).then((data)=>{
      console.log(data.data.message,'message');
      navigate("/")
    }).catch((error)=>{
      console.log(error,'otp catch errror');
    })
   }
}

  return (
    
    <div className="parantDiv">


     {otpverify? 
      <div className="auth-form-conatiner">
      <h2>Enter the OTP</h2>
      <br />
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
      <br />
        <button className="btn" type="submit" onClick={(e)=>{verify(e)}} >Verify</button>
      </div>
      :
     
    <div className="auth-form-conatiner" >
      <h2>Sign-up Page</h2>
      <form onSubmit={handleSubmit} className="login-form">

      <TextField 
      label="username"
      name='username'
      value={input.username}
      onChange={handleChange}
      type='text'
      id="username"
      variant="standard" />
      <p>{signErr && !input.username && <label style={{color:"red"}}>username is required</label>}</p>

      <TextField
      label="email"
      name='email' 
      value={input.email}
      onChange={handleChange}
      id="email"
      type='email'
      variant="standard" />
       <p>{signErr && !input.email && <label  style={{color:"red"}}>email is required</label> }</p>

      <TextField  
      label="phone number" 
      type='phone'
      id="phone"
      name='phone'
      value={input.phone}
      onChange={handleChange}
      variant="standard" />
      <p>{signErr && !input.phone && <label  style={{color:"red"}}>phone number is required</label> }</p>

      <TextField
      label="password"
      name='password'
      value={input.password}
      onChange={handleChange}
      type="password"
      id="password"
      autoComplete="current-password"
      variant="standard"
    />
    <p>{signErr && !input.password && <label  style={{color:"red"}}>password is required</label> }</p>
        <button className="btn" type="submit" >Register</button>
      </form>
      <button className="link-btn">Forgotten password? </button>
      <button className="link-btn">Don't have an account ? Sign up here..</button>
      <ToastContainer/>
    </div>
    }
     

  </div>
  )
}

export default Signup