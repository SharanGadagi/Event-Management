import React from 'react'
import './about1.css'
import about4 from '../images/about4.jpg'
import about6 from '../images/about8.jpg'
import about10 from '../images/about10.jpg'
import about2 from '../images/about2.jpg'

const About1 = () => {

    return (
        <div id="About1">
            <div className="about1">
            <h2 className='menu'>ABOUT US..</h2>
            <p className='about_desc'>Events & Weddings by <b>SHAAN</b> acknowledges the importance of your event and that you deserve a team that is focused on you every step of the way. We value earning your trust and executing events and weddings that exceed your expectations. We are a company whose foundation is built on quality, integrity, passion and enthusiasm for the events we create. We work hard, laugh often, and never lose sight of delivering on your vision. Let us do the planning, design and execution of your big day, while you enjoy the celebration! </p>
            </div>
            <div className="about2">

                <div className="about2_title">
<h2 className='menu'>MEET US</h2>
                </div>

                <div className="member_area">

                    <div className="single_member">
                        <img src={about6} alt="img1" className='about_img' />
                        <div className="member_text">
                            <h2 className='memberName'>SHAAN</h2>
                            <span className='member_title'>Founder & Creative Director</span>
                        </div>
                    </div>

                    <div className="single_member">
                        <img src={about10} alt="img2" className='about_img' />
                        <div className="member_text">
                            <h2 className='memberName'>MEGHANA</h2>
                            <span className='member_title'>
                                Event Management</span>
                        </div>
                    </div>

                    <div className="single_member">
                        <img src={about2} alt="img3" className='about_img' />
                        <div className="member_text">
                            <h2 className='memberName'>AANYA</h2>
                            <span className='member_title'> Lead Event</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="team">
            <img src={about4} alt="team" className='team_img' />
        <div className="team_text">
        <h2 className='memberName'>OUR  SPECIAL  TEAM</h2>
       
    </div> 
            </div>
        </div>
    )
}

export default About1
