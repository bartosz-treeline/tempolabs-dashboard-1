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
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Grid container spacing={3} sx={{ height: "100%" }}>
        {/* AI Chatbot - 2x1 spanning both rows in first column */}
        <Grid item xs={12} md={3} sx={{ height: "100%" }}>
          <AIChatbotCard />
        </Grid>

        {/* Inspection Summary - 1x2 spanning columns 2-3 in first row */}
        <Grid item xs={12} md={6}>
          <InspectionSummaryCard />
        </Grid>

        {/* Calendar - 1x1 in column 4, row 1 */}
        <Grid item xs={12} md={3}>
          <CalendarCard />
        </Grid>

        {/* Empty first column in second row (taken by AI Chatbot) */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: { xs: "none", md: "block" } }}
        />

        {/* Recommendations - 1x1 in column 2, row 2 */}
        <Grid item xs={12} md={3}>
          <RecommendationsCard />
        </Grid>

        {/* Records - 1x1 in column 3, row 2 */}
        <Grid item xs={12} md={3}>
          <RecordsCard />
        </Grid>

        {/* Directory - 1x1 in column 4, row 2 */}
        <Grid item xs={12} md={3}>
          <DirectoryCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardGrid;
