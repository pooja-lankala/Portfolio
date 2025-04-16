import React from 'react'
import { Instagram } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import "../styles/Footer.css";

function Footer() {
  return ( 
  <div className="footer">
    <div className='socialMedia'>  
    <Instagram />
    <Email/>
    <LinkedIn/>
    <GitHub/>
     </div>
    <p>
        &copy; Pooja Lankala
    </p>
  </div>
  )
}

export default Footer;