import React, { useState } from 'react'
import Header from './Header'
import { Col, Container, Row, Table , Modal,Button } from 'react-bootstrap'
import SideBar from './SideBar'
import { faCircleUser, faHand, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faBell, faPaw, faUser } from '@fortawesome/fontawesome-free-solid'
import axios from 'axios'
export default function Booking() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [getBooking,setGetBooking] = useState([]);


    React.useEffect(()=>{
     
      showBooking();
  
      },[]);
  
      const showBooking = async () => {
        try {
          const response = await axios.get(`http://localhost/stadium-backend/getBooking.php`);
          const responseData = Array.isArray(response.data) ? response.data : [];
          setGetBooking(responseData);
          showBooking();
        } catch (err) {
          console.error('Error:', err);
        }
      }


      const handleDelete=async(id)=>{
          await axios.get(`http://localhost/stadium-backend/deleteBooking.php?id=${id}`);
          
      }
      const handleLogout=(e)=>{

        localStorage.removeItem('admin')
        navigate("/login");
    }
  
      React.useEffect(()=>{
        if(!localStorage.getItem('admin')) navigate('/login');
      },[]);
      
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
                        <div className='d-flex flex-row sidebar-links ' onClick={()=>navigate('/')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
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

          <Button variant="danger" onClick={handleLogout}>
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
                              <th>S.No.</th>  
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>venue</th>
                              <th>Date</th>
                              <th>Slot</th>
                              <th>Amount</th>
                              <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >

                          {getBooking.length>0 ?(
                          getBooking.map((value,index)=>(

                         
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.phone}</td>
                                <td>{value.venue}</td>
                                <td>{value.date}</td>
                                <td>{value.slot}</td>
                                <td>{value.amount}</td>
                                <td><Button className="float-end" variant="danger" onClick={()=>handleDelete(value.id)}>
                          Delete
                        </Button></td>
                            </tr>
                            ))
                            
                          ):(
                            <tr>no data found</tr>
                          )}
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
