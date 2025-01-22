import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface CalendarCardProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date | undefined) => void;
}

const CalendarCard = ({
  selectedDate = new Date(),
  onDateSelect = () => {},
}: CalendarCardProps) => {
  return (
    <Card className="w-full h-full bg-background p-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        className="w-full"
      />
    </Card>
  );
};

export default CalendarCard;
