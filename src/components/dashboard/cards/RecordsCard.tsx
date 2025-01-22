import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FileText, Folder, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  date?: string;
}

interface RecordsCardProps {
  items?: FileItem[];
}

const defaultItems: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
  },
  {
    id: "2",
    name: "Inspection Reports",
    type: "folder",
  },
  {
    id: "3",
    name: "March 2024 Report.pdf",
    type: "file",
    date: "2024-03-15",
  },
  {
    id: "4",
    name: "Maintenance",
    type: "folder",
  },
  {
    id: "5",
    name: "Q1 Summary.xlsx",
    type: "file",
    date: "2024-03-14",
  },
  {
    id: "6",
    name: "Contracts",
    type: "folder",
  },
  {
    id: "7",
    name: "Budget 2024.pdf",
    type: "file",
    date: "2024-03-10",
  },
  {
    id: "8",
    name: "Photos",
    type: "folder",
  },
];

const RecordsCard = ({ items = defaultItems }: RecordsCardProps) => {
  return (
    <Card className="w-full h-full bg-background">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Records</CardTitle>
          <Button size="icon" variant="ghost">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search files..." className="pl-8" />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                {item.type === "folder" ? (
                  <Folder className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                ) : (
                  <FileText className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  {item.date && (
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecordsCard;
