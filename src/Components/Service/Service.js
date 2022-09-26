import React from 'react'
import './service.css'
import s1 from '../images/s11.jpg'
import s2 from '../images/s8.jpg'
// import s3 from '../images/s2.jpg'
import s4 from '../images/s1.jpg'
import s5 from '../images/s3.jpeg'
import s6 from '../images/s7.jpeg'
import s7 from '../images/s12.jpg'
import {motion} from 'framer-motion'

const Service = () => {
  return (
    <motion.div className='service'
       initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
     <div className="service_heading">
        <h2 className='service_title'>OUR</h2>
        <h2 className='service_title border_service'>SERVICES</h2>
     </div>
     <div className="service_container">
     <div className="service_detail">
     <img src={s1} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>Full Time WEDDING</h3>
            <p>We offer our clients comprehensive wedding planning and execution - from initial discussions of your vision, to day-of, on-site coordination and every step in between. We start with a consultation with you and your loved ones to fully understand your desires, then work closely with you along the way to bring your vision to life and produce a truly memorable and unique event.</p>
           
            <p>Our goal is to help you have a stress-free planning process from beginning to end. We handle all of the details and work behind the scenes so you can enjoy the planning experience and every memorable moment of your special day.</p>
        </div>
     </div>

     <div className="service_detail">
     <img src={s5} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>Partial Wedding Planning </h3>
            <p>Oftentimes, our clients start planning their own weddings, but as the day approaches, they become overwhelmed juggling all of the details as they prepare for their big day. That's where we can help. We are happy to jump in during your planning process at any point before the big day to provide as much or as little support as you may need. That support might include recommending vendors, reviewing contracts, selecting hotels, organizing transportation. We become the main contact on your behalf, complete the remainder of the planning and assist on the day of the event. That way you can allow yourself to take it all in and enjoy!</p>
          
        </div>
     </div>

     <div className="service_detail">
     <img src={s4} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>Event Decor Staging</h3>
            <p>We provide high-quality event staging at any facility. Our event designers and managers will be onsite to execute your decor installation. We direct vendor deliveries, work closely with venue staff and style your decor the day of your event. We have the ability to service multiple locations, deliver personal decor, assemble decor, set decor, assemble welcome gifts, deliver welcome gifts and facilitate a teardown plan at the end of your event. </p>
          
        </div>
     </div>


     <div className="service_detail">
     <img src={s2} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>Event Design Consultation </h3>
            <p>You have a decor vision and we have the design expertise, inspirational ideas and concepts to turn your vision into a reality. Let our fresh approach and style decorate your event. Our professional design service includes creating a theme, accessorizing, styling, and vendor sourcing.  </p>
          
        </div>
     </div>

     <div className="service_detail">
     <img src={s7} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>International Weddings & Honeymoons  </h3>
            <p>Whether it's an adventurous safari wedding in the African bush, an elegant hilltop Italian villa wedding overlooking the Mediterranean Sea, or a romantic barefoot beach wedding in Mexico, we have the planning expertise, experience and knowledge to help you navigate the myriad obstacles that come with planning an international destination wedding. Let us help turn your dream into reality. </p>
          
        </div>
     </div>


     <div className="service_detail">
     <img src={s6} alt="service_img" className='service_img' />
        <div className="service_info">
        <h3>PRE WEDDING SHOOT  </h3>
            <p>Established photographers and wedding industry experts are of the view that there are several reasons for the popularity of pre-wedding photoshoots. Every couple wants to save moments that tell a romantic story of the duo. The brides and grooms prefer the concept of the pre-wedding photo shoot so much because they want to celebrate their romance in a more informal way.</p>
          
        </div>
     </div>
        


        
     </div>
    </motion.div>
  )
}

export default Service
