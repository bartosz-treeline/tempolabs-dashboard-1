import React from "react";
import { Box } from "@mui/material";
import TopNavBar from "./dashboard/TopNavBar";
import DashboardGrid from "./dashboard/DashboardGrid";

interface HomeProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

const Home = ({ isDarkMode = false, onThemeToggle = () => {} }: HomeProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TopNavBar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
        <DashboardGrid />
      </Box>
    </Box>
  );
};

export default Home;
