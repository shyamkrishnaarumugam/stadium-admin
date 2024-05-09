import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [getLogin,setGetLogin] = useState();
  const onChangeName=(e)=>{
    setUsername(e.target.value)
  }
 useEffect(()=>{
  if(localStorage.getItem('admin')) navigate('/')
 })
  const onChangePassword=(e)=>{
    setPassword(e.target.value)
  }


    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        if (!username || !password) { // Changed from && to ||
          throw new Error("Username or password is empty");
        }
      
        const response = await axios.post('http://localhost/stadium-backend/login-admin.php',

        { action:'login',
          username:username,
          password:password
        },
      {

        headers:{
          'content-type':'application.json'
        }
      });
      // setGetLogin(response.data);
      // console.log(response.data);
        if (response.data.status === 'success') {
          localStorage.setItem("admin",true);
          navigate("/");
        } else {
          setError("Incorrect username or password");
        }
      } catch (error) {
        console.error('Error:', error.message);
        setError("An error occurred during login");
      }
  };
  return (
    <>
    <div className='login-bg d-flex '>
     
    <Card className='login-card w-25 p-5 mx-auto my-auto'>
      <h2 className='text-center text-light '>Admin</h2>
      <Form  onSubmit={handleLogin}>
     <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-3">
        <Form.Control type="text"   placeholder="name@example.com" onChange={onChangeName} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
        <Form.Control type="password"  placeholder="Password" onChange={onChangePassword}/>
      </FloatingLabel>
      <Button variant="success" type='submit' className='mx-auto d-block ' >Login</Button>
      </Form>
      {error && <div className='error-message text-danger'>{error}</div>}
      </Card>
      </div>
    </>
  )
}
