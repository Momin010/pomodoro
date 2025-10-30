import React from 'react';

type Tab = 'Pomodoro' | 'Short Break' | 'Long Break';

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs: Tab[] = ['Pomodoro', 'Short Break', 'Long Break'];

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 bg-gray-800 p-2 rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 md:px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
            activeTab === tab ? 'bg-red-500 text-white' : 'text-gray-400 hover:bg-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
