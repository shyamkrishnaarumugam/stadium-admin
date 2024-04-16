import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import SideBar from './SideBar';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHand, faHouseChimney, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark, faDice, faPaw, faPuzzlePiece, faUser } from '@fortawesome/fontawesome-free-solid';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <>
    <div className='h100vh'>
        
      <Container fluid>
        <Row>
                <Col sm={'3'} className=''>
{/* sidebar start */}

                    <div className=''>
                      <div className='p-5'>
                      <img src={require("../assets/images/nav-logo.png")} className='w-75 mx-auto' />
                      </div>
                      <div className='d-flex flex-column container'>
                        <div className='mt-5'>
                        <div className='d-flex flex-row sidebar-links text-danger' onClick={()=>navigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
                        </div>
                      </div>
                    </div>
      

{/* sidebar end */}
                </Col>
                <Col sm={'9'} className='home-bg'>
                  
                  <div className='my-4'><h3 className='d-inline' style={{textDecoration:'underline'}}>Dashboard</h3><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis  rounded-circle userlogo' onClick={handleShow} /></div>
{/* modal box*/}
                  <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Logout!</Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={()=>navigate('/login')}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
{/* modal box end*/}
                    <Row>
                      <Col md={'3'}>
                          <Card className='card-cus bg-primary' style={{color:'white'}}>
                            <h1>1000</h1>
                            <p>Total students enrolled</p>
                            <FontAwesomeIcon icon={faPeopleGroup} className='card-icons' />
                          </Card> 
                          
                       
                      </Col>
                      <Col md={'3'}>
                      <Card className='card-cus bg-secondary' style={{color:'white'}}>
                            <h1>110</h1>
                            <p>Total Venues registered</p>
                            <FontAwesomeIcon icon={faPuzzlePiece} className='card-icons' />
                          </Card>
                        </Col>
                        <Col md={'3'}>
                        <Card className='card-cus bg-success' style={{color:'white'}}>
                            <h1>10</h1>
                            <p>Total slots booked</p>
                            <FontAwesomeIcon icon={faBookmark} className='card-icons' />
                          </Card>
                        </Col>
                        <Col md={'3'}>
                        <Card className='card-cus bg-danger' style={{color:'white'}}>
                            <h1>9</h1>
                            <p>Total Games</p>
                            <FontAwesomeIcon icon={faDice} className='card-icons' />
                          </Card>
                        </Col>
                    </Row>

                  </Col>
                </Row>
            </Container>
       <Footer className="fixed-bottom" />
       </div>
    
    </>
  )
}
