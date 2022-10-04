import React from 'react'
import './Footer.css';

function Footer() {
  return (
   
    <div className='footer_container'>
        
        <div className='footer_one'>
        <h1 className='footer_heading'>Services</h1>
                       
                            
                            <p ><a  className='footer_header_para' href="/">Small Group Personal Training</a></p>
                            <p ><a className='footer_header_para' href="/">1:1 Personal Training</a></p>
                            <p ><a className='footer_header_para' href="/">1:1 Personal Training</a></p>
                            <p ><a className='footer_header_para' href="/">​Online Personal Training</a></p>
                            
                        
                        </div>


                        <div className='footer_two'>
                            <h1 className='footer_heading'>Company</h1>
                        <p><a  className='footer_header_para' href="/">About</a></p>
                            <p><a  className='footer_header_para' href="/">Blog</a></p>
                        </div>


                        <div className='footer_three'>
                            <h1 className='footer_heading' >Support</h1>
                            <p><a  className='footer_header_para' href="/">Contact</a></p>
                        </div>


                        <div className='footer_four'>
                            <h1 className='footer_heading' >Address</h1>
                            <p><b>The Armoury Coaching Studio LTD</b></p>
                            <p>Victory Ct</p>
                            <p>Third Ave</p>
                            <p>Bletchley</p>
                            <p>Milton Keynes</p>
                            <p>MK1 1EW</p>

                            
                            
                            
                        </div>
          
                        


        

    </div>
    
  )
}

export default Footer