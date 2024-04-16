import { faBell, faHourglassEnd, faPaw, faUser, faWarehouse } from '@fortawesome/fontawesome-free-solid'
import { faHand, faHouse, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {

  const navigate = useNavigate();
  
  return (
    <><div className=''>
      <div className='p-5'>
      <img src={require("../assets/images/nav-logo.png")} className='w-75 mx-auto' />
      </div>
      <div className='d-flex flex-column container'>
        <div className='mt-5'>
        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/home')}><FontAwesomeIcon icon={faHouseChimney} className='px-3 pt-1' /><p>Dashboard</p></div>
        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/users')}><FontAwesomeIcon icon={faUser}  className='px-3 pt-1' /><p>Users</p></div>
        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/venues')}><FontAwesomeIcon icon={faPaw}  className='px-3 pt-1' /><p>Venues</p></div>
        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/booking')}><FontAwesomeIcon icon={faHand}  className='px-3 pt-1' /><p>Bookings</p></div>
        <div className='d-flex flex-row sidebar-links' onClick={()=>navigate('/alerts')}><FontAwesomeIcon icon={faBell}  className='px-3 pt-1' /><p>Alerts</p></div>
        </div>
      </div>
      </div>
      
    </>
  )
}
