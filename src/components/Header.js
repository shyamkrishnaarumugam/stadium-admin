import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate= useNavigate();
  return (
    <>
   
    <div className='dark-mode'>
    <Container>
      <div className=' justify-content-between align-items-center d-flex'>
      <div>
        <h1></h1>
      </div>
      <div>
        <Button variant="success" onClick={()=>navigate('/login')}>Sign out</Button>
      </div>
      </div>
      </Container>  
      
      </div>  
    </>
  )
}
