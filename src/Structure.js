import React from 'react'
import './Structure.css';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Training from './Training';
import Result from './Result';
import Feedback from './Feedback';
import Footer from './Footer';
import Information from './Information';
function Structure() {
  return (
    <div className='container'>
      <div className="nav-bar">

     <Navbar />
        
      </div>
      <div className="banner">
        <Banner />
        </div>
      <div className="about-us"><About /></div>
      <div className="training-modules"><Training /></div>
      <div className="getting-results"><Result /></div>
      <div className="customer-feedback"><Feedback /></div>
      <div className="footer"><Footer /></div>
      <div className="armoury-info"><Information /></div>
      
    </div>
  )
}

export default Structure