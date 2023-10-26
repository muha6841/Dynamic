import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  }

  return (
    <div className="sponser-block">
      <div className="container">
        <div className="sponser-slider-area">
          <Slider {...settings}>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser1.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser2.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser3.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser4.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser5.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser1.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser2.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser3.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser4.png" alt="sponser" />
                </div>
              </div>
            </div>
            <div>
              <div className="sponser-slide">
                <div className="img-slide">
                  <img src="assets/images/sponser5.png" alt="sponser" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
