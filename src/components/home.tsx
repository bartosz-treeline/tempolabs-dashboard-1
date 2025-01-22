import React from "react";
import TopNavBar from "./dashboard/TopNavBar";
import DashboardGrid from "./dashboard/DashboardGrid";

interface HomeProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

const Home = ({ isDarkMode = false, onThemeToggle = () => {} }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1440px] mx-auto space-y-6">
        <TopNavBar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
        <DashboardGrid className="h-[calc(100vh-120px)]" />
      </div>
    </div>
  );
};

export default Home;
