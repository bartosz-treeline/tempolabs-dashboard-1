import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  LinearProgress,
  Box,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  AccessTime as ClockIcon,
  Warning as AlertCircleIcon,
} from "@mui/icons-material";

interface InspectionItem {
  id: string;
  property: string;
  status: "completed" | "pending" | "overdue";
  date: string;
  score: number;
}

interface InspectionSummaryCardProps {
  inspections?: InspectionItem[];
  completionRate?: number;
}

const defaultInspections: InspectionItem[] = [
  {
    id: "1",
    property: "123 Main Street",
    status: "completed",
    date: "2024-03-15",
    score: 95,
  },
  {
    id: "2",
    property: "456 Oak Avenue",
    status: "pending",
    date: "2024-03-20",
    score: 0,
  },
  {
    id: "3",
    property: "789 Pine Road",
    status: "overdue",
    date: "2024-03-10",
    score: 0,
  },
  {
    id: "4",
    property: "321 Elm Street",
    status: "completed",
    date: "2024-03-14",
    score: 88,
  },
];

const StatusIcon = ({ status }: { status: InspectionItem["status"] }) => {
  switch (status) {
    case "completed":
      return <CheckCircleIcon sx={{ color: "success.main" }} />;
    case "pending":
      return <ClockIcon sx={{ color: "warning.main" }} />;
    case "overdue":
      return <AlertCircleIcon sx={{ color: "error.main" }} />;
  }
};

const InspectionSummaryCard = ({
  inspections = defaultInspections,
  completionRate = 65,
}: InspectionSummaryCardProps) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader
        title="Inspection Summary"
        titleTypography={{ variant: "h6" }}
      />
      <CardContent
        sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Completion Rate
            </Typography>
            <Typography variant="body2">{completionRate}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={completionRate}
            sx={{ height: 8, borderRadius: 1 }}
          />
        </Box>

        <Stack spacing={2} sx={{ flex: 1, overflow: "auto" }}>
          {inspections.map((inspection) => (
            <Box
              key={inspection.id}
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: "background.paper",
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <StatusIcon status={inspection.status} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle2" noWrap>
                  {inspection.property}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {inspection.date}
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} alignItems="center">
                {inspection.status === "completed" && (
                  <Chip
                    size="small"
                    label={`${inspection.score}%`}
                    color="primary"
                    variant="outlined"
                  />
                )}
                <Chip
                  size="small"
                  label={inspection.status}
                  color={
                    {
                      completed: "success",
                      pending: "warning",
                      overdue: "error",
                    }[inspection.status]
                  }
                />
              </Stack>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default InspectionSummaryCard;
