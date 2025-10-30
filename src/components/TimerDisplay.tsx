import React from 'react';

interface TimerDisplayProps {
  time: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-8xl md:text-9xl font-bold my-8 text-center">
      {formatTime(time)}
    </div>
  );
};

export default TimerDisplay;
