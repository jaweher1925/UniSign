import React, { useEffect, useState } from 'react';
import { useAvatar } from './AvatarContext';
import { animated, useSpring } from './animations';

const Face: React.FC = () => {
  const { emotion, animationClassName } = useAvatar();
  const [blinking, setBlinking] = useState(false);
  
  // Blink animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200);
    }, Math.random() * 3000 + 2000); // Random blink between 2-5 seconds
    
    return () => clearInterval(blinkInterval);
  }, []);

  // Face animation based on emotion
  const faceSpring = useSpring({
    transform: emotion === 'excited' ? 'translateY(-300px)' : 'translateY(0px)',
    config: { tension: 300, friction: 10 },
  });

  // Map emotions to facial expressions
  const renderEyes = () => {
    const baseEyeClasses = "absolute w-5 h-5 rounded-full bg-white flex items-center justify-center";
    const leftEyeClasses = `${baseEyeClasses} left-8 top-8`;
    const rightEyeClasses = `${baseEyeClasses} right-8 top-8`;
    
    const pupilClasses = `${blinking ? 'h-0' : 'h-3'} w-3 rounded-full bg-slate-800 transition-all duration-200`;
    
    // Modify pupils based on emotion
    let pupilModifier = '';
    switch(emotion) {
      case 'curious':
        pupilModifier = 'transform translate-y-1';
        break;
      case 'thinking':
        pupilModifier = 'transform translate-x-1';
        break;
      case 'excited':
        pupilModifier = 'w-3.5 h-3.5';
        break;
      default:
        pupilModifier = '';
    }
    
    return (
      <>
        <div className={leftEyeClasses}>
          <div className={`${pupilClasses} ${pupilModifier}`}></div>
        </div>
        <div className={rightEyeClasses}>
          <div className={`${pupilClasses} ${pupilModifier}`}></div>
        </div>
      </>
    );
  };
  
  const renderMouth = () => {
    switch(emotion) {
      case 'happy':
        return <div className="absolute w-14 h-6 bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent border-b-4 border-slate-800 rounded-b-full"></div>;
      case 'curious':
        return <div className="absolute w-8 h-8 bottom-8 left-1/2 transform -translate-x-1/2 rounded-full border-2 border-slate-800"></div>;
      case 'thinking':
        return <div className="absolute w-10 h-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-full"></div>;
      case 'excited':
        return <div className="absolute w-14 h-8 bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent border-b-4 border-slate-800 rounded-b-full"></div>;
      default:
        return <div className="absolute w-10 h-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-full"></div>;
    }
  };
  
  return (
    <animated.div 
      className={`face relative w-32 h-32 mx-auto rounded-full bg-[#FFD6B6] top-4 z-10 ${animationClassName}`}
      style={faceSpring}
    >
      {renderEyes()}
      {renderMouth()}
      
      {/* Cheeks */}
      <div className="absolute w-5 h-3 bg-pink-200 rounded-full left-6 bottom-14 opacity-70"></div>
      <div className="absolute w-5 h-3 bg-pink-200 rounded-full right-6 bottom-14 opacity-70"></div>
    </animated.div>
  );
};

export default Face;