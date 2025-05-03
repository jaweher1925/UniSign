import React from 'react';
import { useAvatar } from './AvatarContext';
import { animated, useSpring } from './animations';

const Body: React.FC = () => {
  const { emotion, animationClassName } = useAvatar();
  
  // Body animation based on emotion
  const bodySpring = useSpring({
    transform: emotion === 'excited' 
      ? 'translateY(-3px) scale(1.03)' 
      : 'translateY(0px) scale(1)',
    config: { tension: 300, friction: 15 },
  });

  return (
    <animated.div 
      className={`body relative ${animationClassName}`}
      style={bodySpring}
    >
      {/* Head space filler - actual face is rendered separately */}
      <div className="w-32 h-32 mx-auto rounded-full bg-transparent"></div>
      
      {/* Neck */}
      <div className="w-10 h-5 mx-auto bg-[#FFD6B6] rounded-b-lg -mt-2 z-0"></div>
      
      {/* Shirt - mint green */}
      <div className="relative w-48 h-40 mx-auto bg-[#4ade80] rounded-t-3xl -mt-1">
        {/* Shirt collar */}
        <div className="absolute w-16 h-8 bg-[#38c169] rounded-b-full left-1/2 transform -translate-x-1/2 top-0"></div>
        
        {/* Shirt details */}
        <div className="absolute w-5 h-5 bg-[#38c169] rounded-full left-8 top-14"></div>
        <div className="absolute w-5 h-5 bg-[#38c169] rounded-full right-8 top-14"></div>
      </div>
    </animated.div>
  );
};

export default Body;