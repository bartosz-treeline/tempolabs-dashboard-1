import React from "react";
import { Box, Grid } from "@mui/material";
import AIChatbotCard from "./cards/AIChatbotCard";
import InspectionSummaryCard from "./cards/InspectionSummaryCard";
import CalendarCard from "./cards/CalendarCard";
import RecommendationsCard from "./cards/RecommendationsCard";
import RecordsCard from "./cards/RecordsCard";
import DirectoryCard from "./cards/DirectoryCard";

interface DashboardGridProps {
  className?: string;
}

const DashboardGrid = ({ className = "" }: DashboardGridProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Grid container>
          <AIChatbotCard />
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <InspectionSummaryCard />
          </Grid>

          <Grid item xs={12} md={6}>
            <RecommendationsCard />
          </Grid>

          <Grid item xs={12} md={6}>
            <RecordsCard />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <CalendarCard />
          </Grid>
          <Grid item xs={12} md={12}>
            <DirectoryCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
