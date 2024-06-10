import React from 'react';
import TypewriterComponent from './TypewriterComponent ';

const Banner = () => {

  return (
    <div className="relative mt-20 mb-20 w-[99%] m-auto">
      <img className="block m-auto h-[600px] sm:h-[500px] lg:h-auto" src="https://images.wanderon.in/new-homepage-data/cta%20homepage%20-%20desktop.png" alt="Wonderon Image" />

      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center gap-20 p-5">
        <div className="flex flex-col text-center text-white text-start lg:mt-20">
          <p className="mb-2 text-3xl  font-bold mb-4">Global Community for Travelers</p>
          
          <div className=' font-semibold'>
          <TypewriterComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;