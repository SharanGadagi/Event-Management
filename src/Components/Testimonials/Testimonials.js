import React from 'react'
import './testimonials.css'
import {motion} from 'framer-motion'
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t4 from '../images/t4.jpg'
import t7 from '../images/t7.jpg'
import t10 from '../images/t10.jpeg'
import t11 from '../images/t11.jpg'
import t12 from '../images/t12.jpg'
import t5 from '../images/t5.jpg'
import t14 from '../images/t14.jpg'
import t3 from '../images/t3.jpg'
import t15 from '../images/t15.jpg'
import t8 from '../images/t8.jpg'



const Testimonials = () => {
  return (
    <motion.div className='testimonials'
     initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="testimonials_heading">
       <h2 className='testimonials_title'>TESTIMONIALS</h2>
      </div>

    <div className="comments">
      <div className="single_comment">
      <div className="comment_detail">
      <img src={t1} alt="client_img" className='client_img' />
      <h3 className='client_name'>FBlake + Venecia</h3>
 <p className='client_review'>“Such an enormous help to us! It’s no exaggeration; we would have been lost without Shaan. She was always on top of things making sure we didn’t let any elements of our day slip through the cracks. Her experience and passion for wedding planning is echoed throughout A Day to Cherish. Thanks to them, our special day went off without a hitch....<span className='readmore'>Read More</span></p>
      </div>
      
      </div>

      <div className="single_comment">
      <div className="comment_detail">
      <img src={t2} alt="client_img" className='client_img' />
      <h3 className='client_name'>Betsy + Don</h3>
 <p className='client_review'>“Truthfully, my wedding would have been a disaster without them. Two months into my engagement I had to move from Scottsdale to California because I was accepted into graduate school there. Planning my wedding from out of state (not to mention while in school) would have never been possible without them. They coordinated every....<span className='readmore'>Read More</span> </p>
      </div>
      
      </div>


      <div className="single_comment">
      <div className="comment_detail">
      <img src={t10} alt="client_img" className='client_img' />
      <h3 className='client_name'>Lakshmi + Usha Mittal.</h3>
 <p className='client_review'>“Shaan Morrison and all the staff at A Day to Cherish Weddings and Celebrations did a stellar job of providing impeccable services for our wedding! Our vision was truly listened to, respected, and executed flawlessly. Being one who prides myself on having impeccable and discriminating standards and being a rather tough customer to....<span className='readmore'>Read More</span></p>
      </div>
      </div>


      <div className="single_comment">
      <div className="comment_detail">
      <img src={t4} alt="client_img" className='client_img' />
      <h3 className='client_name'>Thelma + Louise</h3>
 <p className='client_review'>“Shaan is absolutely amazing!! I used her just as a “day of planner” but she does SO much more!!!! She met with me prior at the venue, emailed me ideas, coordinated everything with my vendors, quickly replied to emails, and so much more. Her services was the best money that we spent, she was wonderful!!. Being one who prides myself on....<span className='readmore'>Read More</span></p>
      </div>
      </div>


      <div className="single_comment">
      <div className="comment_detail">
      <img src={t5} alt="client_img" className='client_img' />
      <h3 className='client_name'>sachit + suma.</h3>
 <p className='client_review'>“The first thing I did when I got engaged was search for wedding coordinators in the Phoenix area. I knew that I could handle the planning process of the next 12 months of my life, but I also knew that I couldn’t possibly get through the biggest day of my life without the help of someone else. A Day to Cherish was the first and only wedding....<span className='readmore'>Read More</span></p>
      </div>
      </div>




      <div className="single_comment">
      <div className="comment_detail">
      <img src={t7} alt="client_img" className='client_img' />
      <h3 className='client_name'>Kayleen + Kendal</h3>
 <p className='client_review'>“Where do I begin? This past month, you probably wanted to get an order of protection from us! Thank you for your patience, for answering all of our questions and especially for your guidance through the whole process. We are so pleased with the way everything turned out! You got us through the last minute crisis with the church and provide....<span className='readmore'>Read More</span></p>
      </div>
      </div>





      <div className="single_comment">
      <div className="comment_detail">
      <img src={t12} alt="client_img" className='client_img' />
      <h3 className='client_name'>Azim + Yasmeen Premji.e</h3>
 <p className='client_review'>"Shaan was our day-of coordinator for our wedding last weekend, and she was so wonderful to work with and EXCEEDED our expectations. She is punctual, organized, pleasant and easy to work with, and was extremely good at coordinating between all of our vendors--- basically she was everything we wanted and more in a wedding planner! and provide....<span className='readmore'>Read More</span> </p>
      </div>
      </div>




      <div className="single_comment">
      <div className="comment_detail">
      <img src={t3} alt="client_img" className='client_img' />
      <h3 className='client_name'>Natalie + Andrew</h3>
 <p className='client_review'>"I was totally impressed with the organization, professionalism and personality of Shaan Cochran. She made the event smooth and stress-free. I do not have anymore daughters to ‘marry off’, but I would hire Shaan to manage another event for us without hesitation. ! She gets my recommendation a million times over! Thank you Shaan....<span className='readmore'>Read More</span></p>
      </div>
      </div>




      <div className="single_comment">
      <div className="comment_detail">
      <img src={t11} alt="client_img" className='client_img' />
      <h3 className='client_name'>Ketaki + Purav</h3>
 <p className='client_review'>We had a Hindu Indian wedding with many moving parts and specific traditions, but Shaan already had extensive experience with Indian weddings and hit the ground running for us. She gave us such peace of mind and made sure our event ran on time with zero hiccups. We would hire Shaan again in a heartbeat and recommend her to anyone and everyone....<span className='readmore'>Read More</span></p>
      </div>
      </div>


      <div className="single_comment">
      <div className="comment_detail">
      <img src={t14} alt="client_img" className='client_img' />
      <h3 className='client_name'>Taylor + Brad</h3>
 <p className='client_review'>"Shaan was so helpful the day of our wedding; she did a great job of keeping everyone on track, setting up decor, and ensuring everything ran smoothly. After our ceremony she drove to the reception location prior to our arrival and set everything up there as well. It turned out so beautiful! We could not have done it without her!"....<span className='readmore'>Read More</span></p>
      </div>
      </div>


      <div className="single_comment">
      <div className="comment_detail">
      <img src={t15} alt="client_img" className='client_img' />
      <h3 className='client_name'>vijay + vireta</h3>
 <p className='client_review'>"Shaan was professional yet incredibly approachable and open. From our first meeting, she understood my wedding's unique aesthetic. Not only did she understand my vision, HE fine tuned all the areas that I left untouched. Any time my venue would try to stray away from our outline, Shaan would immediately intervene and ensure I was....<span className='readmore'>Read More</span></p>
      </div>
      </div>

      <div className="single_comment">
      <div className="comment_detail">
      <img src={t8} alt="client_img" className='client_img' />
      <h3 className='client_name'>Taylor + Brad</h3>
 <p className='client_review'>"Shaan kept everything on track according to the timeline she prepared. Even when impromptu events arose, like an extra speech, saxophone solo, and grand entrance  style with the lifting up of the bride and groom, she made that time line happen!Our large wedding could not have gone smoother because of Shaan and his team!  over! Thank you....<span className='readmore'>Read More</span></p>
      </div>
      </div>

     

    </div>
    <div className='see-more'>SEE MORE REVIEWS..</div>

    </motion.div>
  )
}

export default Testimonials