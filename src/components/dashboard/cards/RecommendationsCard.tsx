import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Energy Efficiency",
    description:
      "Upgrade to LED lighting and smart thermostats to reduce energy consumption. Our analysis shows potential savings of up to 30% on electricity bills. Recommended upgrades include smart power strips, motion sensors, and energy-efficient appliances.",
    iconUrl: "https://api.dicebear.com/7.x/icons/svg?seed=energy",
  },
  {
    id: 2,
    title: "Heating Efficiency",
    description:
      "Implement regular HVAC maintenance and upgrade insulation. Recent inspections indicate heat loss through windows and doors. Consider installing double-pane windows, weather stripping, and programmable thermostats for optimal temperature control.",
    iconUrl: "https://api.dicebear.com/7.x/icons/svg?seed=heating",
  },
  {
    id: 3,
    title: "Water Conservation",
    description:
      "Install water-efficient fixtures and smart irrigation systems. Data shows potential water savings of 40%. Recommendations include low-flow faucets, dual-flush toilets, and smart sprinkler systems with weather monitoring.",
    iconUrl: "https://api.dicebear.com/7.x/icons/svg?seed=water",
  },
  {
    id: 4,
    title: "Smart Security",
    description:
      "Enhance property security with modern technology. Recommended upgrades include smart locks with remote access, HD security cameras with night vision, motion sensors, and a centralized monitoring system accessible via mobile app.",
    iconUrl: "https://api.dicebear.com/7.x/icons/svg?seed=security",
  },
];

const RecommendationsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentRecommendation = recommendations[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader
        title="Recommendations"
        titleTypography={{ variant: "h6" }}
        action={
          <Stack direction="row" spacing={1}>
            <IconButton size="small" onClick={handlePrevious}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton size="small" onClick={handleNext}>
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        }
      />
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              mb: 3,
              borderRadius: 1,
              border: 1,
              borderColor: "divider",
              p: 1,
            }}
          >
            <img
              src={currentRecommendation.iconUrl}
              alt={currentRecommendation.title}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h6" gutterBottom>
            {currentRecommendation.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            {currentRecommendation.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecommendationsCard;
