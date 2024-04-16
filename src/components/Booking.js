import React, { useState } from 'react'
import Header from './Header'
import { Col, Container, Row, Table , Modal,Button } from 'react-bootstrap'
import SideBar from './SideBar'
import { faCircleUser, faHand, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faBell, faPaw, faUser } from '@fortawesome/fontawesome-free-solid'

export default function Booking() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      
      <Container fluid>
        <Row>
                <Col sm={'3'}>
                   {/* sidebar start */}

                   <div className=''>
                      <div className='p-5'>
                      <img src={require("../assets/images/nav-logo.png")} className='w-75 mx-auto' />
                      </div>
                      <div className='d-flex flex-column container'>
                        <div className='mt-5'>
                        <div className='d-flex flex-row sidebar-links ' onClick={()=>navigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues</p></div>
                        <div className='d-flex flex-row sidebar-links text-danger' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
                        </div>
                      </div>
                    </div>
      

{/* sidebar end */}
                </Col>
                <Col sm={'9'} className='home-bg'>
                  <div className='my-4'><h3 className='d-inline' style={{textDecoration:'underline'}}>Booking</h3><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis userlogo rounded-circle'  onClick={handleShow}  /></div>
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
                    <Col>
                    <div className='overflow-auto scroll'  style={{maxHeight:'600px'}}>
                    <Table bordered hover striped responsive>
                        <thead  className="sticky-top bg-info">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@gmail.com</td>
                                <td>john</td>
                                <td>12345</td>
                                
                            </tr>
                            
                            
                            
                        </tbody>
                    </Table>
                    </div>
                    </Col>
                    </Row>

                  </Col>
                </Row>
            </Container>
    </>
  )
}
