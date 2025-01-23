import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers";

interface CalendarCardProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date | null) => void;
}

const CalendarCard = ({
  selectedDate = new Date(),
  onDateSelect = () => {},
}: CalendarCardProps) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader title="Calendar" titleTypography={{ variant: "h6" }} />
      <CardContent sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            value={selectedDate}
            onChange={onDateSelect}
            sx={{
              width: "100%",
              ".MuiPickersCalendarHeader-root": {
                pl: 2,
                pr: 2,
              },
            }}
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
