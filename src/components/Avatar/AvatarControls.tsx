import React from 'react';
import { useAvatar, Emotion, Gesture, AnimationSpeed } from './AvatarContext';

export const AvatarControls: React.FC = () => {
  const { 
    emotion, 
    setEmotion, 
    gesture, 
    setGesture, 
    animationSpeed, 
    setAnimationSpeed 
  } = useAvatar();

  const emotions: Emotion[] = ['happy', 'curious', 'thinking', 'excited'];
  const gestures: Gesture[] = ['wave', 'point', 'clap', 'thumbsUp'];
  const speeds: AnimationSpeed[] = ['slow', 'normal', 'fast'];

  const buttonClass = "px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200";
  const activeButtonClass = "bg-[#4ade80] text-white shadow-sm";
  const inactiveButtonClass = "bg-gray-100 text-gray-600 hover:bg-gray-200";

  return (
    <div className="avatar-controls mt-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Emotion:</h3>
        <div className="flex flex-wrap gap-2">
          {emotions.map((e) => (
            <button
              key={e}
              className={`${buttonClass} ${emotion === e ? activeButtonClass : inactiveButtonClass}`}
              onClick={() => setEmotion(e)}
              aria-pressed={emotion === e}
            >
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Gesture:</h3>
        <div className="flex flex-wrap gap-2">
          {gestures.map((g) => (
            <button
              key={g}
              className={`${buttonClass} ${gesture === g ? activeButtonClass : inactiveButtonClass}`}
              onClick={() => setGesture(g)}
              aria-pressed={gesture === g}
            >
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Animation Speed:</h3>
        <div className="flex flex-wrap gap-2">
          {speeds.map((s) => (
            <button
              key={s}
              className={`${buttonClass} ${animationSpeed === s ? activeButtonClass : inactiveButtonClass}`}
              onClick={() => setAnimationSpeed(s)}
              aria-pressed={animationSpeed === s}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};