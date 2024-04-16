import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import Header from './Header'
import { Button, Col, Container, Form, ListGroup, Modal, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleUser, faHand, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faBell, faPaw, faUser } from '@fortawesome/fontawesome-free-solid'

export default function Alerts() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [logout,setLogout] = useState(false);
    const showLogout = ()=>{setLogout(true)};
    const hideLogout = ()=>{setLogout(false)};
    const [alert,setAlert]= useState();
    const [getAlert,setGetAlert]=useState([]);

    const navigate = useNavigate();

    const handleDelete=async(id)=>{
        
      try{
      const delteData = await fetch(`http://localhost/stadium-backend/delete-alert.php?id=${id}`,{
          method:'DELETE'
      });
  
  }
  catch(err){
      console.error(err);
  }
    }
    useEffect(()=>{
     
    showAlert();

    },[]);

    const showAlert = async () => {
      try {
        const response = await axios.get(`http://localhost/stadium-backend/view-alerts.php`);
        const responseData = Array.isArray(response.data) ? response.data : [];
        setGetAlert(responseData);
        showAlert();
      } catch (err) {
        console.error('Error:', err);
      }
    }
    

    const handleSubmit=async()=>{
     
        try{
          const formData = new FormData();
      formData.append('alert',alert);

          const postData = await axios.post('http://localhost/stadium-backend/addAlerts.php',formData,{
            headers:{
              'content-type':'application.json'
            }}
          );
          console.log(postData.data); 
          setShow(false);
        
        }
         catch (error) {
          console.error(error);
      }
      
      //  window.location.reload();
   
    }

    
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
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
                        <div className='d-flex flex-row sidebar-links text-danger' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
                        </div>
                      </div>
                    </div>
      

{/* sidebar end */}
                </Col>
                <Col sm={'9'} className='home-bg'>
                  <div className='my-4'><h3 className='d-inline' style={{textDecoration:'underline'}}>Alerts</h3> <Button variant='outline-primary' className='ms-4' onClick={handleShow}> <FontAwesomeIcon icon={faCirclePlus} className='me-2' />Add</Button><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis userlogo'  onClick={showLogout}   /></div>
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
                    <div className='overflow-auto scroll'  style={{maxHeight:'600px'}}>
                      
                <ListGroup as="ol" numbered>
                  {getAlert.length > 0 ? (
                    getAlert.map((data, index) => (
                      <ListGroup.Item action as="li" key={ index}>
                        {data.alert}
                        <Button className="float-end" variant="danger" onClick={() => handleDelete(data.id)}>
                          Delete
                        </Button>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>No alerts found</ListGroup.Item>
                  )}
                </ListGroup>

                        </div>
                    </Col>
                    </Row>

                  </Col>
                </Row>
            </Container>
            
{/* modal box */}
<Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                            <Modal.Title className='text-decoration-underline'>Add Alerts</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Alerts:</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e)=>setAlert(e.target.value)} />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
{/* modal box end */}
   </>
  )
}
