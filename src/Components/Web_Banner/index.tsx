import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button';

interface IWeb_Banner {
    webSlide1: string,
    slide1heading: string,
    slide1text: string,
    webSlide2: string,
    slide2heading: string,
    slide2text: string,
    webSlide3: string,
    slide3heading: string,
    slide3text: string,
}

const Web_Banner: React.FC<IWeb_Banner> = ({ webSlide1, slide1heading, slide1text, webSlide2, slide2heading, slide2text, webSlide3, slide3heading, slide3text }) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            },
        ]
    }
    
    return (
        <div className='web-banner'>

            <Slider {...settings}>
                <div>
                    <div className='web-slide' style={{ backgroundImage: `url(${webSlide1})` }}>
                    <div className="overlay"></div>
                        <div className='container'>
                            <div className='text-area'>
                                <h1>{slide1heading}</h1>
                                <p>{slide1text}</p>
                                <div className='slide-btns'>
                                    <Button btntext="CONTACT US" className='button-primary' />
                                    <Button btntext="OUR SERVICES" className='button-secondary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='web-slide' style={{ backgroundImage: `url(${webSlide2})` }}>
                        <div className='container'>
                            <div className='text-area text-area-right'>
                                <h1>{slide2heading}</h1>
                                <p>{slide2text}</p>
                                <div className='slide-btns'>
                                    <Button btntext="CONTACT US" className='button-primary' />
                                    <Button btntext="OUR SERVICES" className='button-secondary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='web-slide' style={{ backgroundImage: `url(${webSlide3})` }}>
                        <div className='container'>
                            <div className='text-area'>
                                <h1>{slide3heading}</h1>
                                <p>{slide3text}</p>
                                <div className='slide-btns'>
                                    <Button btntext="CONTACT US" className='button-primary' />
                                    <Button btntext="OUR SERVICES" className='button-secondary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div >
    )
}

export default Web_Banner;