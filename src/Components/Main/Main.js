import React from 'react'
import './main.css'

import Contact from '../Contact/Contact.js';
import {motion} from 'framer-motion'
import About1 from '../About/About1';
import {Link} from 'react-scroll'


const Main = () => {
  return (
    <>
    <motion.div id='Main'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}


    >

<div className="title">
    <h2 className='title_heading'>WE MAKE EVERY</h2>
    <h2 className='title_heading'>MOVEMENT SPECIAL!</h2>
  <Link span={true} smooth="true" to='Contact'><button className='see_btn'>CONTACT US</button></Link>  
</div>
    </motion.div>

    <About1></About1>
  <Contact></Contact>
    </>
  )
}

export default Main
