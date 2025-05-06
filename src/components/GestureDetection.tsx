import React, { useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useAvatar } from './Avatar/AvatarContext';
import { Camera, CameraOff } from 'lucide-react';
import { AvatarProvider } from './Avatar/AvatarContext';

interface GestureDetectionProps {
  onlyCamera?: boolean;
}

const GestureDetection: React.FC<GestureDetectionProps> = ({ onlyCamera = false }) => {
  const webcamRef = useRef<Webcam | null>(null);
  const { setGesture } = useAvatar();
  const [isActive, setIsActive] = React.useState(false);

  // Si onlyCamera, on affiche juste la webcam
  if (onlyCamera) {
    return (
      <div className="w-full max-w-md mx-auto">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        className="rounded-lg shadow-md w-full"
      />
    </div>
    );
  }

  const captureFrame = useCallback(async () => {
    if (!webcamRef.current || !isActive) return;

    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      });

      const data = await response.json();
      if (data.gesture !== 'none') {
        setGesture(data.gesture);
      }
    } catch (error) {
      console.error('Error detecting gesture:', error);
    }
  }, [isActive, setGesture]);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(captureFrame, 1000);
    return () => clearInterval(interval);
  }, [captureFrame, isActive]);

  return (
    <div className="gesture-detection mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Gesture Detection</h3>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            isActive 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {isActive ? (
            <>
              <CameraOff size={18} />
              Stop Detection
            </>
          ) : (
            <>
              <Camera size={18} />
              Start Detection
            </>
          )}
        </button>
      </div>
      
      {isActive && (
        <div className="relative w-full max-w-md mx-auto">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            className="rounded-lg shadow-md w-full"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            Live Detection
          </div>
        </div>
      )}
    </div>
  );
};

export default GestureDetection;