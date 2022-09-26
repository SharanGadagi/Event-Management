import React from 'react'
import './footer.css'
import f1 from '../images/f5.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'

const Footer = () => {



  return (
    <div className='footer'>
      <div className="footer1">
      <div className="up" onClick={()=> window.scrollTo({top:0,left:0,behavior:"smooth"})} >
      <img src={f4} alt="upArroow" className='upArroow'  />
      </div>
      

        <div className="socialMedial">
        <a href="https://www.instagram.com/sharangadagi/" target='_blank' rel="noreferrer"><img src={f1} alt="instagram" className='social' /></a>

        <a href="https://www.facebook.com/profile.php?id=100006538277747" target='_blank' rel="noreferrer"> <img src={f2} alt="facebook" className='social' /></a>
        
        

        <a href="https://github.com/SharanGadagi" target='_blank' rel="noreferrer">  <img src={f3} alt="github" className='social github' /></a>
      
        </div>
        <div className="copyright">
            <p className='copy1'>Events & Weddings by <b className='shaan'>SHAAN</b></p>
            <p className='copy2'> © 2022 <b className='shaan'>SHAAN</b> | Website Design by <span className='developer'>SHAAN Developers.</span></p>
        </div>

      </div>

    </div>
  )
}

export default Footer
