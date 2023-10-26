import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Main_Heading from '../Main_Heading';

const Testimonials = () => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className='testimonials'>
            <div className='container'>
                <div className='text-heading'>
                    <Main_Heading textheading="Testimonials" />
                </div>

                <div className='slider-testimonials'>
                    <Slider {...settings}>
                        <div>
                            <div className="item">
                                <div className="block">
                                    <div className="text-box">
                                        <div className="top-left">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faQuoteRight} />
                                            </div>
                                        </div>
                                        <p>
                                            I can’t thank them enough for how they helped.My firm has been greatly helped by the
                                            excellent work from Broker, you won’t be dis- appointed.
                                        </p>
                                    </div>
                                </div>
                                <div className="image-patern">
                                    <img src="assets/images/tetimonials-img1.jpg" alt="tetimonials-img1" />
                                    <h2>
                                        Bruce Johnson <span>- FinCrop</span>
                                    </h2>
                                    <ul className="social-icons">
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="block">
                                    <div className="text-box">
                                        <div className="top-left">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faQuoteRight} />
                                            </div>
                                        </div>
                                        <p>
                                            I can’t thank them enough for how they helped.My firm has been greatly helped by the
                                            excellent work from Broker, you won’t be dis- appointed.
                                        </p>
                                    </div>
                                </div>
                                <div className="image-patern">
                                    <img src="assets/images/tetimonials-img1.jpg" alt="tetimonials-img1" />
                                    <h2>
                                        Bruce Johnson <span>- FinCrop</span>
                                    </h2>
                                    <ul className="social-icons">
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="block">
                                    <div className="text-box">
                                        <div className="top-left">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faQuoteRight} />
                                            </div>
                                        </div>
                                        <p>
                                            I can’t thank them enough for how they helped.My firm has been greatly helped by the
                                            excellent work from Broker, you won’t be dis- appointed.
                                        </p>
                                    </div>
                                </div>
                                <div className="image-patern">
                                    <img src="assets/images/tetimonials-img1.jpg" alt="tetimonials-img1" />
                                    <h2>
                                        Bruce Johnson <span>- FinCrop</span>
                                    </h2>
                                    <ul className="social-icons">
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonials