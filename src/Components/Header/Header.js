import React from 'react'
import './header.css'
// import { Link } from 'react-router-dom'
// import logo from '../images/logo.png'
import shaan from '../images/shan2.png'
import {Link} from 'react-scroll'
import {  NavLink } from 'react-router-dom'
// import {HashLink as Link} from 'react-router-hash-link'
// import Main from '../Main/Main.js';
// import About from '../About/About.js';
// import Contact from '../Contact/Contact.js';


// span='true' smooth={true}
const Header = () => {
  return (
    <>
    <div id='Header'>
       <div className='header1'>
       <ul>
       <li><NavLink className='main_menu'   to='/'  >Home</NavLink></li>  
       <li><Link span={true} smooth="true" to='About1' 
      >About</Link></li>
       {/* <li><Link>Testinomals</Link></li> */}
       <li><Link span={true} smooth="true" to='Contact'
     
      >Contact</Link></li>
      
        
        
        </ul>
       </div>
       <div className='header_logo'>
       <NavLink to='/'><img src={shaan} alt="logo" /></NavLink>

       
       </div>
       <div className='header2'>
       <ul>

       <li><NavLink to='/gallery' className='active'
      >Gallery</NavLink></li>
       <li><NavLink to='/service' className='active'>Services</NavLink></li>
       <li><NavLink to='/testimonials' className='active' >Testimonials</NavLink></li>
    
    </ul>
       </div> 
    </div>
  
 

    </>
    
  )
}

export default Header
