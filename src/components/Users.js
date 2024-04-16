import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Table ,Modal } from 'react-bootstrap'
import SideBar from './SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header'
import Footer from './Footer'
import { faCircleUser, faHand, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faBell, faPaw, faUser } from '@fortawesome/fontawesome-free-solid'

export default function Users() {
    const navigate= useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data,setData]= useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const getData = await fetch(`http://localhost/stadium-backend/get.php`);
        const response = await getData.json();
        setData(response);
        fetchData();
    };

    const handleDelete=async(id)=>{
        
        try{
        const delteData = await fetch(`http://localhost/stadium-backend/deleteUser.php?id=${id}`,{
            method:'DELETE'
        });
    
    }
    catch(err){
        console.error(err);
    }
    // window.location.reload();

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
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p className="">Dashboard</p></div>
                        <div className='d-flex flex-row sidebar-links text-danger' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
                        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
                        </div>
                      </div>
                    </div>
      

{/* sidebar end */}
                </Col>
                <Col sm={'9'} className='table-bg'>
                <div className='my-4'><h3 className='d-inline' style={{textDecoration:'underline'}}>Users</h3><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis userlogo rounded-circle' onClick={handleShow}  /></div>
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
                    <div className='overflow-auto scroll' style={{maxHeight:'600px'}}>
                    <Table bordered hover striped >
                        <thead  className="sticky-top bg-info">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value,index)=>
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.username}</td>
                                <td>{value.password}</td>
                                <td><Button variant='danger' onClick={()=>handleDelete(value.id)}>Delete</Button></td>
                            </tr>
                            )}
                            
                        </tbody>
                    </Table>
                    </div>
                    </Col>
                    </Row>

                  </Col>
                  </Row>
            </Container>
       <Footer />
    </>
  )
}
