import React from 'react';
import heroVideo from '../../assets/hero7.mp4';
import './HeroSection.css';
import image1 from '../../assets/Austin.png';
import image2 from '../../assets/Century.png';
import image3 from '../../assets/Fevicol.png';
import image4 from '../../assets/Godrej.png';
import image5 from '../../assets/Ultratech.png';

function HeroSection() {
  return (
    <>
      <div className="relative w-full h-auto mt-5 try">
        {/* Video Section */}
        <video
          id="heroVideo"
          className="w-full h-auto transition-all duration-300 sm:w-full md:w-3/4 lg:w-4/5 xl:w-3/4 2xl:w-2/3 rounded-3xl"
          src={heroVideo}
          alt="Awesome hero page video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Search Box Section */}
      <div className="px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl">
        <div className="relative z-10 text-base text-black -mt-3">
          <input
            type="text"
            value=""
            disabled
            className="-mt-8 bg-white shadow-md focus:outline-none rounded-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-3/4 2xl:w-2/3 lg:py-5 md:py-5 sm:py-5 py-3 px-7"
          />
          {/* Container for the images inside the search box */}
          <div className="image-container flex justify-between items-center absolute inset-0 lg:px-7 md:px-7 sm:px-3 z-20 mt-2">
            <img src={image1} alt="icon 1" className="image lg:h-8 lg:w-20 md:h-8 md:w-14 ms-10 sm:h-6 w-9" />
            <img src={image2} alt="icon 2" className="image lg:h-8 lg:w-20 md:h-8 md:w-14 sm:h-6 w-9" />
            <img src={image3} alt="icon 3" className="image lg:h-8 lg:w-20 md:h-8 md:w-14 sm:h-6 w-9" />
            <img src={image4} alt="icon 4" className="image lg:h-8 lg:w-20 md:h-8 md:w-14 sm:h-6 w-9" />
            <img src={image5} alt="icon 5" className="image lg:h-8 lg:w-20 md:h-8 md:w-14 me-10 sm:h-6 w-9" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
