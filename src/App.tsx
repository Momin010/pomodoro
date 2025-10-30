import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';

type Tab = 'Pomodoro' | 'Short Break' | 'Long Break';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Pomodoro');
  const [time, setTime] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);

  const timerDurations: { [key in Tab]: number } = {
    'Pomodoro': 25 * 60,
    'Short Break': 5 * 60,
    'Long Break': 15 * 60,
  };

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (isActive && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive || time === 0) {
      if (interval) {
        window.clearInterval(interval);
      }
    }
    
    if (time === 0) {
        setIsActive(false);
        // Optional: Add a sound notification here
        // new Audio('/notification.mp3').play();
    }

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [isActive, time]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setTime(timerDurations[tab]);
    setIsActive(false);
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTime(timerDurations[activeTab]);
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center font-sans">
      <div className="max-w-md w-full mx-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Pomodoro Timer</h1>
        <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 shadow-2xl">
          <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
          <TimerDisplay time={time} />
          <Controls 
            isActive={isActive} 
            handleStartPause={handleStartPause} 
            handleReset={handleReset} 
          />
        </div>
        <footer className="text-center text-gray-500 mt-8 text-sm">
          Created with ❤️ for the user.
        </footer>
      </div>
    </div>
  );
};

export default App;
