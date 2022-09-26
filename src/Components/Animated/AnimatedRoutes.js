import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom';
import Main from '../Main/Main.js';
import Gallery from '../Gallery/Gallery.js';

import Testimonials from '../Testimonials/Testimonials.js';
import Service from '../Service/Service';
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location=useLocation();
  return (
<AnimatePresence>
       <Routes location={location} key={location.pathname} >
      <Route path='/' element={<Main/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
     
      </Routes>
      </AnimatePresence>
 
  )
}

export default AnimatedRoutes
