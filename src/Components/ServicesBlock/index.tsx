import React from 'react';
import Main_Heading from '../Main_Heading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesBlock = () => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className='services-block'>
            <div className='container'>
                <div className='text-heading'>
                    <Main_Heading textheading="Services We Do" />
                </div>

                <div className='slider-section'>
                    <Slider {...settings}>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide1.jpg' alt="alider-slide1" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Turnaround Consulting</h3>
                                    <p>Human resources planning should serve as a link between human resources management and the overall strategic plan of an organization.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide2.jpg' alt="alider-slide2" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Buisness Planning</h3>
                                    <p>It may also contain background information about business the organization or team attempting to reach those goals</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide3.jpg' alt="alider-slide3" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Exit & Succession Planning</h3>
                                    <p>Many people believe that succession planning is the same as Exit Planning, but it is not. To help you clarify the boundaries of each activity.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide4.jpg' alt="alider-slide4" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Strategic Planning</h3>
                                    <p>Strategic planning is an organization's process of defining its strategy, or direction, and making decisions on allocating its resources.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide5.jpg' alt="alider-slide5" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Global Risk & Investigation</h3>
                                    <p>Conflict management is the process of limiting the negative aspects of conflict while increasing the positive aspects of conflict.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide6.jpg' alt="alider-slide6" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Audit Assurance</h3>
                                    <p>Market research vendors offering consulting services to advise on research methods used in developing and marketing products.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide7.jpg' alt="alider-slide7" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Trades & Stock</h3>
                                    <p>A merger means a combination of two companies to form a new company, while an acquisition is the purchase of one company</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='services-slider'>
                                <div className='image-holder'>
                                    <img src='assets/images/slider-slide8.jpg' alt="alider-slide8" />
                                    <div className="opacity tran3s"></div>
                                </div>
                                <div className='slider-slide-text'>
                                    <h3>Information Technology</h3>
                                    <p>IT refers to "all processes of governing, whether undertaken by a government, market or network, whether over a family.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default ServicesBlock