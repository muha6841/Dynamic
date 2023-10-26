import React from "react";

const MapHome = () => {
  return (
    <section className="map-block">
      <div className="map-holder">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13599.065346849276!2d74.30469836688533!3d31.55802667154408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904abc424fe89%3A0x75fc7243a61d72f9!2sMozang%20Chungi%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681634543264!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapHome;
