import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact" id='Contact'>

      <div className="contactMe">
     
        <form >
{/* <label >Name</label> <br /> */}
<input type="text" placeholder='Name' /> <br /> <br /> <br />
{/* <label >Fiances Name</label> <br /> */}
<input type="text" placeholder='Fiances Name'  /> <br /> <br /><br />
{/* <label >Phone NO</label> <br /> */}
<select id="code">
    <option >+91</option>
    <option>+81</option>
    <option>+61</option>
    <option>+41</option>
    <option>+31</option>
</select>
<input type="tel" id='tel' placeholder='Phone Number' /> <br /> <br /> <br />
{/* <label >Email</label> <br /> */}
<input type="email" placeholder='email@gmail.com' /> <br /> <br /> <br />
{/* <label >Venue And Location</label> <br /> */}
<input type="text" placeholder='Venue And Location' /> <br /> <br /> <br />
{/* <label >Other Details</label> <br /> */}
<textarea cols="40" rows="7" placeholder='Tell Me MOre..' id='more'></textarea> <br /> <br /> <br />
<button type='submit' className='register'>REGISTER HERE</button>
        </form>
      </div>
      <div className="talkME">
      <div className="details">
      <h2 className='lets_talk'>Let's Talk..</h2>
        <span>Daneshwari Nagar 3 <sup>rd</sup> Cross Vidyagiri Dharwad--580004</span>
        <h4>Tel: 8971078420</h4>
        <h4>sharangadagi@gmail.com</h4>
      </div>
        
      </div>
        </div>
    </>
  )
}

export default Contact