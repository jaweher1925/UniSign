import React from 'react';
import { useAvatar } from './AvatarContext';
import { animated, useSpring } from './animations';

const Hands: React.FC = () => {
  const { gesture, emotion, animationClassName } = useAvatar();
  
  // Left hand animations
  const leftHandSpring = useSpring({
    transform: getLeftHandTransform(),
    config: { tension: 120, friction: 14 },
  });
  
  // Right hand animations
  const rightHandSpring = useSpring({
    transform: getRightHandTransform(),
    config: { tension: 120, friction: 14 },
  });
  
  function getLeftHandTransform() {
    switch(gesture) {
      case 'wave':
        return 'translate(-10px, -300px) rotate(-20deg)';
      case 'point':
        return 'translate(15px, -20px) rotate(10deg)';
      case 'clap':
        return 'translate(20px, -30px) rotate(10deg)';
      case 'thumbsUp':
        return 'translate(-5px, -300px) rotate(-10deg)';
      default:
        return 'translate(0, 0) rotate(0)';
    }
  }
  
  function getRightHandTransform() {
    switch(gesture) {
      case 'wave':
        return 'translate(10px, 0) rotate(0)';
      case 'point':
        return 'translate(-15px, -20px) rotate(-10deg)';
      case 'clap':
        return 'translate(-20px, -30px) rotate(-10deg)';
      case 'thumbsUp':
        return 'translate(5px, -30px) rotate(10deg)';
      default:
        return 'translate(0, 0) rotate(0)';
    }
  }
  
  function renderLeftHand() {
    const baseClasses = "w-12 h-12 bg-[#FFD6B6] rounded-full absolute left-2 bottom-2";
    
    switch(gesture) {
      case 'wave':
        return (
          <div className={`${baseClasses} ${emotion === 'excited' ? 'animate-wave' : ''}`}>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute top-1 left-5 rounded-full"></div>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute top-1 left-8 rounded-full"></div>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-2 left-2 rounded-full"></div>
          </div>
        );
      case 'point':
        return (
          <div className={baseClasses}>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute -top-5 left-4 rounded-full"></div>
            <div className="w-3 h-4 bg-[#FFD6B6] absolute top-1 left-8 rounded-full"></div>
            <div className="w-3 h-4 bg-[#FFD6B6] absolute top-1 left-2 rounded-full"></div>
          </div>
        );
      case 'clap':
        return (
          <div className={`${baseClasses} ${emotion === 'excited' ? 'animate-clap-left' : ''}`}>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 left-5 rounded-full"></div>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 left-8 rounded-full"></div>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 left-2 rounded-full"></div>
          </div>
        );
      case 'thumbsUp':
        return (
          <div className={baseClasses}>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute -top-5 left-4 rounded-full"></div>
            <div className="w-4 h-3 bg-[#FFD6B6] absolute top-2 left-8 rounded-full"></div>
          </div>
        );
      default:
        return <div className={baseClasses}></div>;
    }
  }
  
  function renderRightHand() {
    const baseClasses = "w-12 h-12 bg-[#FFD6B6] rounded-full absolute right-2 bottom-2";
    
    switch(gesture) {
      case 'wave':
        return <div className={baseClasses}></div>;
      case 'point':
        return (
          <div className={baseClasses}>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute -top-5 right-4 rounded-full"></div>
            <div className="w-3 h-4 bg-[#FFD6B6] absolute top-1 right-8 rounded-full"></div>
            <div className="w-3 h-4 bg-[#FFD6B6] absolute top-1 right-2 rounded-full"></div>
          </div>
        );
      case 'clap':
        return (
          <div className={`${baseClasses} ${emotion === 'excited' ? 'animate-clap-right' : ''}`}>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 right-5 rounded-full"></div>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 right-8 rounded-full"></div>
            <div className="w-3 h-5 bg-[#FFD6B6] absolute top-0 right-2 rounded-full"></div>
          </div>
        );
      case 'thumbsUp':
        return (
          <div className={baseClasses}>
            <div className="w-3 h-6 bg-[#FFD6B6] absolute -top-5 right-4 rounded-full transform rotate-5"></div>
            <div className="w-4 h-3 bg-[#FFD6B6] absolute top-2 right-8 rounded-full"></div>
          </div>
        );
      default:
        return <div className={baseClasses}></div>;
    }
  }

  return (
    <div className={`hands relative ${animationClassName}`}>
      <animated.div 
        className="left-hand absolute bottom-10 left-4"
        style={leftHandSpring}
      >
        {renderLeftHand()}
      </animated.div>
      
      <animated.div 
        className="right-hand absolute bottom-10 right-4"
        style={rightHandSpring}
      >
        {renderRightHand()}
      </animated.div>
    </div>
  );
};

export default Hands;