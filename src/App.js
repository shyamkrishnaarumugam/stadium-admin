import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/style.css";
import Users from './components/Users';
import Venues from './components/Venues';
import Booking from './components/Booking';
import Alerts from './components/Alerts';
import Login from './components/Login';
import Cricket from './components/Cricket';
import Badminton from './components/Badminton';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/venues' element={<Venues />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/alerts' element={<Alerts />} />
        
        <Route path='/cricket' element={<Cricket />} />
        <Route path='/batmition' element={<Badminton />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
