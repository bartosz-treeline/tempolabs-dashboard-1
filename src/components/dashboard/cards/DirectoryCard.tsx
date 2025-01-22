import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

interface DirectoryCardProps {
  teamMembers?: TeamMember[];
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "Property Manager",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Maintenance Supervisor",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
  },
  {
    id: "3",
    name: "Carol Williams",
    role: "Leasing Agent",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol",
  },
];

const DirectoryCard = ({
  teamMembers = defaultTeamMembers,
}: DirectoryCardProps) => {
  return (
    <Card className="w-full h-full bg-background">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Directory</CardTitle>
          <Button size="icon" variant="ghost">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search team members..." className="pl-8" />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center space-x-4 rounded-lg p-2 hover:bg-muted/50 cursor-pointer"
              >
                <Avatar>
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DirectoryCard;
