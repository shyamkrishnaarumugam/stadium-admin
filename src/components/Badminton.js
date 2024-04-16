import React, { useState } from 'react'
import Header from './Header'
import { Button, Col, Container, Form, Modal, Row, Table,Dropdown } from 'react-bootstrap'
import SideBar from './SideBar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleUser, faHand, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faBell, faPaw, faUser } from '@fortawesome/fontawesome-free-solid'

export default function Badminton() {

    const [showNew, setShowNew] = useState(false);
    const handleCloseNew = () => setShowNew(false);
    const handleShowNew = () => setShowNew(true);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [logout, setLogout] =useState(false);
    const hideLogout =()=>{setLogout(false)};
    const showLogout = ()=>{setLogout(true)};

    const navigate= useNavigate();
  return (
    <>
     
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
                        <div className='d-flex flex-row sidebar-links ' onClick={()=>navigate('/')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
                        
                        <div className='d-flex flex-row sidebar-links text-danger'><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p><div class="dropdown">
                            <span>Venues</span>
                            <div class="dropdown-content">
                            <p  onClick={()=>navigate('/venues')}>Football</p>
                            <p onClick={()=>navigate('/cricket')}>Cricket</p>
                            <p onClick={()=>navigate('/batmition')}>Batmition</p>
                            </div>
                            </div></p></div>
                        {/* <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues-Criket</p></div>
                        <div className='d-flex flex-row sidebar-links ' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Batmiton</p></div> */}
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
                        </div>
                      </div>
                    </div>
      

{/* sidebar end */}
                </Col>
                <Col sm={'9'} className='table-bg'>
              <div className='my-4'><h3 style={{textDecoration:'underline',display:'inline'}}>Batminton Venues</h3> <Button variant='outline-primary' className='ms-4' onClick={handleShowNew}> <FontAwesomeIcon icon={faCirclePlus} className='me-2' />Add</Button><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis userlogo rounded-circle' onClick={showLogout} /></div>
 {/* modal box*/}
 <Modal show={logout} onHide={hideLogout} centered>
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
                    <Col>
{/* modal box create */}
<Modal show={showNew} onHide={handleCloseNew} size='lg'>
                            <Modal.Header closeButton>
                            <Modal.Title className='text-decoration-underline'>Update the Datas</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" value={''} autoFocus />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Games:</Form.Label>
                                <Form.Control type="text" value={''} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type="text" value={''} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>City:</Form.Label>
                                <Form.Control type="text" value={''} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Direction:</Form.Label>
                                <Form.Control type="text" value={''}  />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact No.:</Form.Label>
                                <Form.Control type="text" value={'double double'}  />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>Description:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Upload images:</Form.Label>
                                <Form.Control type="file"  multiple />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
{/* modal box end */}
{/* modal box edit */}
                        <Modal show={show} onHide={handleClose} size='lg'>
                            <Modal.Header closeButton>
                            <Modal.Title className='text-decoration-underline'>Update the Datas</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" value={'double double'} autoFocus />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Games:</Form.Label>
                                <Form.Control type="text" value={'double double'} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type="text" value={'double double'} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>City:</Form.Label>
                                <Form.Control type="text" value={'double double'} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Direction:</Form.Label>
                                <Form.Control type="text" value={'double double'} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact No.:</Form.Label>
                                <Form.Control type="text" value={'double double'} />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>Description:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Upload images:</Form.Label>
                                <Form.Control type="file"  multiple />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
{/* modal box end */}
<div className='overflow-auto scroll' style={{maxHeight:'600px'}}>
                    <Table bordered hover striped className='table-venues'>
                    <thead  className="position-sticky top-0 bg-info">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Games</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Direction</th>
                                <th>Contact No.</th>
                                <th style={{paddingRight:'100px', paddingLeft:'100px'}}>Description</th>
                                <th>Upload images</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Double Double</td>
                                <td>Criket, Football</td>
                                <td>No.2 First cross, lawspet</td>
                                <td>lawspet</td>
                                <td>location</td>
                                <td>+918974586598</td>
                                <td>Stadiums in ancient Greece and Rome were built for different purposes, and at first only the Greeks built structures called "stadium"; Romans built structures called "circus". Greek stadia were for foot races, whereas the Roman circus was for horse races. Both had similar shapes and bowl-like areas around them for spectators. The Greeks also developed the theatre, with its seating arrangements foreshadowing those of modern stadiums.</td>
                                <td><input type='file' multiple /></td>
                                <td><Button variant='warning'  onClick={handleShow}>Edit</Button></td>
                                <td><Button variant='danger'>Delete</Button></td>
                            </tr>
                           
                        </tbody>
                    </Table>
                    </div>
                    </Col>
                    </Row>

                  </Col>
                  </Row>
            </Container>
       <Footer className="fixed-bottom" />
    </>
  )
}
