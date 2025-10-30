import React from 'react';

interface ControlsProps {
  isActive: boolean;
  handleStartPause: () => void;
  handleReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isActive, handleStartPause, handleReset }) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={handleStartPause}
        className="w-32 md:w-40 bg-white text-red-500 font-bold py-3 px-8 rounded-lg text-xl uppercase tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={handleReset}
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Reset timer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l16 16" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4.55a8 8 0 00-10.45 2.01M4 9.55a8 8 0 0012.45 5.96" />
        </svg>
      </button>
    </div>
  );
};

export default Controls;
