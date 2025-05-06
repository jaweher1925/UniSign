import React from 'react';
import Face from './Face';
import Body from './Body';
import Hands from './Hands';
import { AvatarProvider } from './AvatarContext';
import { AvatarControls } from './AvatarControls';

export interface AvatarProps {
  initialEmotion?: 'happy' | 'curious' | 'thinking' | 'excited';
  initialGesture?: 'wave' | 'point' | 'clap' | 'thumbsUp';
  animationSpeed?: 'slow' | 'normal' | 'fast';
  showControls?: boolean;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  initialEmotion = 'happy',
  initialGesture = 'wave',
  animationSpeed = 'normal',
  showControls = false,
  className = '',
}) => {
  return (
    <AvatarProvider 
      initialEmotion={initialEmotion}
      initialGesture={initialGesture}
      animationSpeed={animationSpeed}
    >
      <div className={`avatar-container relative ${className}`}>
        <div className="avatar-wrapper relative w-64 h-80 mx-auto">
          {/* Avatar rendering here */}
        </div>
        {showControls && <AvatarControls />}
      </div>
    </AvatarProvider>
  );
};

export default Avatar;