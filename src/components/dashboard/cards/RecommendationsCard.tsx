import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <Card className="w-full h-full bg-background p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recommendations</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start flex-grow">
        <div className="w-16 h-16 mb-6 rounded border border-border p-2">
          <img
            src={currentRecommendation.iconUrl}
            alt={currentRecommendation.title}
            className="w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold mb-3">
          {currentRecommendation.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {currentRecommendation.description}
        </p>
      </div>
    </Card>
  );
};

export default RecommendationsCard;
