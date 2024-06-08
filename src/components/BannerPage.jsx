import React from 'react';

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {

  return (
    <div className="relative mt-20 mb-20 w-[95%] m-auto">
      <img className="block m-auto h-[500px] sm:h-[700px] lg:h-auto" src="https://images.wanderon.in/new-homepage-data/cta%20homepage%20-%20desktop.png" alt="Wonderon Image" />

      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center gap-20 p-5">
        <div className="flex flex-col text-center text-white text-start lg:mt-20">
          <p className="mb-2 text-3xl  font-bold mb-4">Global Community for Travelers</p>
          
          <div className='mt-5 font-semibold'>
           
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;