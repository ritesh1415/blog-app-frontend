import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {authActions} from '../Redux/Store.js'
const Login = () => {  
const navigate=useNavigate()
const dispatch =useDispatch()
const [input,setInput]=useState({
  email:"",
  password:""
})
const handlechange=(e)=>{
setInput((prevState)=>({
...prevState,
[e.target.name]: e.target.value,

}))
}
const handlesubmit=async(e)=>{
  e.preventDefault()
  try {
  const {data}=await axios.post("http://localhost:8080/login",{
    email:input.email,
    password:input.password
  })  ;
  if(data.success){
    localStorage.setItem('userId', data?.user._id);
    dispatch(authActions.login());
    alert("login successfully")
    navigate("/")
  }
  } catch (error) {
   console.log(error) 
  }
}
  return (
   <><form onSubmit={handlesubmit}>
   <Box maxWidth={450} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Typography>Login</Typography>
    <TextField placeholder='email' name='email' value={input.email} onChange={handlechange}/>
    <TextField placeholder='password' value={input.password} name='password' onChange={handlechange}/>
    

    <Button type='submit'>Submit</Button>
    <Button>dont have account ? register</Button>
   </Box></form>
   </>
  )
}

export default Login
