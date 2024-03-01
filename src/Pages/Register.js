import React from 'react'
import { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/register", {
        
        username: input.username,
        email: input.email,
        password: input.password
      });
      if (data.success) {
        alert("User registered successfully");
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <Box maxWidth={450}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"} margin={"auto"} marginTop={5} boxShadow={"10px 10px 20px #ccc"}
          padding={3} borderRadius={5}>
          <Typography variant='h4' textAlign="center">Register</Typography>
          <TextField placeholder="username" name='username' value={input.username} required onChange={handlechange} />
          <TextField placeholder='email' name='email' value={input.email} required onChange={handlechange} />
          <TextField placeholder="password" name='password' value={input.password} required onChange={handlechange} />

          <Button type="submit" sx={{ borderRadius: 3, marginTop: 3 }} variant="container" color='primary'>Submit</Button>
          <Button type="submit" onClick={() => navigate("/login")}>Already have an account? Login</Button>
        </Box>
      </form>
    </>
  )
}

export default Register;
