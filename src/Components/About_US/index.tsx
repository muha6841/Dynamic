import React from 'react'
import Main_Heading from '../Main_Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const About_US = () => {
    return (
        <div className='about-uS'>
            <div className='container'>
                <div className='about-us-block'>
                    <div className='text-area'>
                        <div className='text-heading'>
                            <Main_Heading textheading="Welcome to Dynamic" />
                        </div>
                        <p>Dynamic Consulting over 20 years of experience we’ll ensure you always get the best guidance. We serve clients at every level of their organization, in whatever capacity we can be most useful, whether as a trusted advisor to top management or as a hands-on coach for front line employees. For every engagement, we assemble a team with the most appropriate experience and expertise.</p>
                        <p>Our goal is to optimise your business relationships by tailoring our services to your individual requirements. We strive to build a relationship of trust with every client, for the long-term, 70% of our work is for clients that we have served for over 10 years.</p>
                    </div>
                    <div className='img-area'>
                        <div className='about-img'>
                            <img src="assets/images/team-img1.jpg" alt="team-img1" />
                            <div className='play-icon'>
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_US