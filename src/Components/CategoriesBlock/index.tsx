import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CategoriesBlock = () => {
    return (
        <section className="choose-us" style={{ backgroundImage: `url(assets/images/category-bg-img.jpg)` }}>
            <div className='overlay'>
                <div className="container">
                    <div className="two-bar">
                        <div className="left-bar">
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>25 years of Experience</h3>
                                    <p>We have over 25 years experience providing expert financial advice.</p>
                                </div>
                            </div>
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>Exclusive Partnerships</h3>
                                    <p>We work with premier community development impact investors.</p>
                                </div>
                            </div>
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>Individual Approach</h3>
                                    <p>We are always looking for specific approach to each cases.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-bar">
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>Global Solutions</h3>
                                    <p>We present you the various topics of business consultations</p>
                                </div>
                            </div>
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>Business Opportunities</h3>
                                    <p>Raising business development, the involvement of partners.</p>
                                </div>
                            </div>
                            <div className="cetagory">
                                <ul className="user-icon">
                                    <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                </ul>
                                <div className="text-holder">
                                    <h3>24/7 Online Support</h3>
                                    <p>Assured of our support 24 hours a day, 7 days a week.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='category-man-img'>
                    <img src="assets/images/category-man-img.png" alt="category-man-img" />
                </div>
            </div>
        </section>
    )
}

export default CategoriesBlock