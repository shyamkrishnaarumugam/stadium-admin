import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleUser, faHand, faHouseChimney, faL } from '@fortawesome/free-solid-svg-icons';
import { faBell, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Cricket() {

    const [showNew, setShowNew] = useState(false);
    const handleCloseNew = () => setShowNew(false);
    const handleShowNew = () => setShowNew(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [logout, setLogout] = useState(false);
    const hideLogout = () => { setLogout(false) };
    const showLogout = () => { setLogout(true) };
  
    const navigate = useNavigate();
    const [getData,setGetData] = useState([]);
    
    // const [editData, setEditData] = useState();
    //     id: '',
    //     name: '',
    //     games: '',
    //     address: '',
    //     city: '',
    //     direction: '',
    //     contact: '',
    //     description: '',
    //     amount: '',
    //     image: null,
    // });
//   const [editedData, setEditedData] = useState({});


    const handleImageChange=(e)=>{
      
        const file=e.target.files[0];
        setDatas({...datas,image:file})
    }
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('name',name);
        formData.append('games',games);
        formData.append('address',address);
        formData.append('city',city);
        formData.append('direction',direction);
        formData.append('contact',contact);
        formData.append('description',description);
        formData.append('amount',amount);
        formData.append('image',datas.image);
            try {
                const response = await axios.post(`http://localhost/stadium-backend/addcricket.php`,formData,
            {
                headers:{
                    'Content-Type':'application.json'
                }
            });
            setShowNew(false);
            console.log(response.data);
            getCricket();
            } 
            catch (error) {
                console.error(error);
            }
    setName('');
    setGames('');
    setAddress('');
    setCity('');
    setDirection('');
    setContact('');
    setDescription('');
    setAmount('');
    setDatas('');
}
// const [id,setId]= useState();
const [name,setName] = useState();
const [games,setGames] = useState();
const [address,setAddress] = useState();
const [city,setCity] = useState();
const [direction,setDirection] = useState();
const [contact,setContact] = useState();
const [description,setDescription] = useState();
const [amount,setAmount] = useState();
const [datas,setDatas]= useState({
    image:null
});



    const getCricket=async()=>{
        try {
            const response = await axios.get(`http://localhost/stadium-backend/getCricket.php`);
            const convert = await response.data;
            if(Array.isArray(convert)){
                setGetData(convert);
            }
            

        } catch (error) {
            console.error(error);
        }    
    };
    useEffect(()=>{
        getCricket();
    }, []);

    const deleteId=async(id)=>{
        try {
            const response=await axios.get(`http://localhost/stadium-backend/deleteCricket.php?id=${id}`);
            

        } catch (error) {
            
        }
        getCricket();
    }
    const handleLogout=(e)=>{

        localStorage.removeItem('admin')
        navigate("/login");
    }
  
    React.useEffect(()=>{
        if(!localStorage.getItem('admin')) navigate('/login');
      },[]);
      
    // const handleEditInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditData(prevData => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

//     const editId = (data) => {
//         setEditData(data);
//         setId(data.id);
//         setName(data.name);
//         setGames(data.games);
//         setAddress(data.address);
//         setCity(data.city);
//         setDirection(data.direction);
//         setContact(data.contact);
//         setDescription(data.description);
//         setAmount(data.amount);
//         // setDatas.image(data.image);
        
//         handleShow(); // Show the edit modal
//     };

//     const handleEdit=async()=>{
//         const formData = new FormData();
        
//         formData.append('name',name);
//         formData.append('id',id);
//         formData.append('games',games);
//         formData.append('address',address);
//         formData.append('city',city);
//         formData.append('direction',direction);
//         formData.append('contact',contact);
//         formData.append('description',description);
//         formData.append('image',datas.image);
//         formData.append('amount',amount);

// try{
//         const response= await axios.post(`http://localhost/stadium-backend/updateCricket.php?=${id}`,formData,{
//             headers:{
//                 "Content-Type":"application.json"
//             }
//         })
//         setShow(false);
//             console.log(response.data);
//             getCricket();
//     }

// catch(err){
//     console.error(err);
// }

//     }


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
              <div className='my-4'><h3 style={{textDecoration:'underline',display:'inline'}}>Cricket Venues</h3> <Button variant='outline-primary' className='ms-4' onClick={handleShowNew}> <FontAwesomeIcon icon={faCirclePlus} className='me-2' />Add</Button><FontAwesomeIcon icon={faCircleUser} className='float-end fs-1 mx-5 text-danger-emphasis userlogo rounded-circle' onClick={showLogout} /></div>
 {/* modal box*/}
 <Modal show={logout} onHide={hideLogout} centered>
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
{/* modal box create */}
<Modal show={showNew} onHide={handleCloseNew} size='lg'>
    <Modal.Header closeButton>
        <Modal.Title className='text-decoration-underline'>Add Cricket Data</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Games:</Form.Label>
                <Form.Control type="text" value={games} onChange={(e)=>setGames(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address:</Form.Label>
                <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>City:</Form.Label>
                <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Direction:</Form.Label>
                <Form.Control type="text" value={direction} onChange={(e)=>setDirection(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control type="text" value={contact} onChange={(e)=>setContact(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Upload images:</Form.Label>
                <Form.Control type="file"  accept='.jpg, .jpeg, .png' onChange={handleImageChange} multiple />

                
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Amount:</Form.Label>
                <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </Form.Group>
            {datas.image && (
            <img
              src={URL.createObjectURL(datas.image)}
              alt="Profile Preview"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
            {/* <img src={URL.createObjectURL(image)} /> */}
        </Form>
    </Modal.Body>
    <Modal.Footer>
   
        <Button variant="secondary" onClick={handleCloseNew}>
            Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal>

{/* modal box end */}
{/* modal box edit */}



{/* 
<Modal show={show} onHide={handleClose} size='lg'>
    <Modal.Header closeButton>
        <Modal.Title className='text-decoration-underline'>Update the Data</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Games:</Form.Label>
                <Form.Control type="text" value={games} onChange={(e)=>setGames(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address:</Form.Label>
                <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>City:</Form.Label>
                <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Direction:</Form.Label>
                <Form.Control type="text" value={direction} onChange={(e)=>setDirection(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control type="text" value={contact} onChange={(e)=>setContact(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Upload images:</Form.Label>
                <Form.Control type="file"  accept='.jpg, .jpeg, .png' onChange={handleImageChange} multiple />

                
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
                <Form.Label>Amount:</Form.Label>
                <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </Form.Group>
            {datas.image && (
            <img
              src={URL.createObjectURL(datas.image)}
              alt="Profile Preview"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
            
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal> */}

{/* modal box end */}
<div className='overflow-auto scroll' style={{maxHeight:'600px'}}>
                    <Table bordered hover striped className='table-venues'>
                    <thead  className="position-sticky top-0 bg-info" >
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Games</th>
                                <th>Address</th>
                                <th>City</th>
                                <th >Direction</th>
                                <th>Contact No.</th>
                                <th style={{paddingRight:'100px', paddingLeft:'100px'}}>Description</th>
                                <th>Amount</th>
                                <th>image</th>
                                {/* <th>Edit</th> */}
                                <th>Delete</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            {getData.length>0 ?
                        (getData.map((value,index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.games}</td>
                                <td>{value.address}</td>
                                <td>{value.city}</td>
                                <td>{value.direction}</td>
                                <td>{value.contact}</td>
                                <td>{value.description}</td>
                                <td>{value.amount}</td>
                                <td><img src={`http://localhost/stadium-backend/${value.image}`} style={{maxWidth:150}} />
                                {/* <a href={`http://localhost/stadium-backend/${value.image}`} >link</a> */}
                                </td>  
                                {/* {console.log(value.image)} */}
                                {/* <td><Button variant='warning' onClick={()=>editId(value)}>Edit</Button></td> */}
                                <td><Button variant='danger' onClick={()=>deleteId(value.id)}>Delete</Button></td>
                            </tr>
                            ) ))
                            :<p>no data Found</p>}
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
