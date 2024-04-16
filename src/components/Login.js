import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const onChangeName=(e)=>{
    setUsername({username})
  }

  const onChangePassword=(e)=>{
    setPassword({password})
  }


    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        if (!username || !password) { // Changed from && to ||
          throw new Error("Username or password is empty");
        }
      
        const response = await axios.post(
          'http://localhost/stadium-backend/login-admin.php',
          {
            Username: username,
            Password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      
        if (response.data.status === 'success') {
          localStorage.setItem("credentials", JSON.stringify(response.data.user_details));
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
        <Form.Control type="password"  placeholder="Password" onChange={onChangeName}/>
      </FloatingLabel>
      <Button variant="success" type='submit' className='mx-auto d-block ' onClick={handleLogin}>Login</Button>
      </Form>
      </Card>
      
      </div>
    </>
  )
}
