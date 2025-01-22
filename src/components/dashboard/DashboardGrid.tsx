import React from "react";
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
    <div className={`w-full h-full bg-background p-6 ${className}`}>
      <div className="grid grid-cols-4 gap-6 h-full">
        {/* AI Chatbot - 2x1 spanning both rows in first column */}
        <div className="row-span-2">
          <AIChatbotCard />
        </div>

        {/* Inspection Summary - 1x2 spanning columns 2-3 in first row */}
        <div className="col-span-2 h-full">
          <InspectionSummaryCard />
        </div>

        {/* Calendar - 1x1 in column 4, row 1 */}
        <div className="h-full">
          <CalendarCard />
        </div>

        {/* Recommendations - 1x1 in column 2, row 2 */}
        <div>
          <RecommendationsCard />
        </div>

        {/* Records - 1x1 in column 3, row 2 */}
        <div>
          <RecordsCard />
        </div>

        {/* Directory - 1x1 in column 4, row 2 */}
        <div>
          <DirectoryCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
