
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const strings = [
    "Fullfilling Adventure!",
    "Creating Stories!",
    "Creating Memories!",
    "Connecting People!",
    "Spreading Happiness!"
  ];

  return (
    <div className='typewriter-text'>
      <Typewriter 
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          pauseFor: 1000,
        }}
      
      />
    </div>
  );
};

export default TypewriterComponent;
