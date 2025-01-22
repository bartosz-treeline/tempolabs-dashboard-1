import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

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
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "overdue":
      return <AlertCircle className="h-4 w-4 text-red-500" />;
  }
};

const InspectionSummaryCard = ({
  inspections = defaultInspections,
  completionRate = 65,
}: InspectionSummaryCardProps) => {
  return (
    <Card className="w-full h-full bg-background">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">
          Inspection Summary
        </CardTitle>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Completion Rate
            </span>
            <span className="text-sm font-medium">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {inspections.map((inspection) => (
              <div
                key={inspection.id}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <StatusIcon status={inspection.status} />
                  <div>
                    <p className="text-sm font-medium">{inspection.property}</p>
                    <p className="text-xs text-muted-foreground">
                      {inspection.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {inspection.status === "completed" && (
                    <Badge variant="secondary">{inspection.score}%</Badge>
                  )}
                  <Badge
                    variant={
                      {
                        completed: "default",
                        pending: "secondary",
                        overdue: "destructive",
                      }[inspection.status]
                    }
                  >
                    {inspection.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default InspectionSummaryCard;
