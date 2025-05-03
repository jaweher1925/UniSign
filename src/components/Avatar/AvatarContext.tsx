import React, { createContext, useContext, useState, useCallback } from 'react';

export type Emotion = 'happy' | 'curious' | 'thinking' | 'excited';
export type Gesture = 'wave' | 'point' | 'clap' | 'thumbsUp';
export type AnimationSpeed = 'slow' | 'normal' | 'fast';

interface AvatarContextType {
  emotion: Emotion;
  gesture: Gesture;
  animationSpeed: AnimationSpeed;
  setEmotion: (emotion: Emotion) => void;
  setGesture: (gesture: Gesture) => void;
  setAnimationSpeed: (speed: AnimationSpeed) => void;
  animationClassName: string;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

interface AvatarProviderProps {
  children: React.ReactNode;
  initialEmotion: Emotion;
  initialGesture: Gesture;
  animationSpeed: AnimationSpeed;
}

export const AvatarProvider: React.FC<AvatarProviderProps> = ({
  children,
  initialEmotion,
  initialGesture,
  animationSpeed: initialSpeed,
}) => {
  const [emotion, setEmotion] = useState<Emotion>(initialEmotion);
  const [gesture, setGesture] = useState<Gesture>(initialGesture);
  const [animationSpeed, setAnimationSpeed] = useState<AnimationSpeed>(initialSpeed);

  const getAnimationClassName = useCallback(() => {
    const speedMap = {
      slow: 'animation-duration-2000',
      normal: 'animation-duration-1000',
      fast: 'animation-duration-500',
    };
    return speedMap[animationSpeed];
  }, [animationSpeed]);

  const value = {
    emotion,
    gesture,
    animationSpeed,
    setEmotion,
    setGesture,
    setAnimationSpeed,
    animationClassName: getAnimationClassName(),
  };

  return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>;
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (context === undefined) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};