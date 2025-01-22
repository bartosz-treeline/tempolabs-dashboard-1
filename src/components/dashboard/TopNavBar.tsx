import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import {
  Menu,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  Home as HomeIcon,
  HelpCircle,
  UserCircle,
  LogOut,
  UserPlus,
} from "lucide-react";

interface Location {
  id: string;
  name: string;
  address: string;
}

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface TopNavBarProps {
  locations?: Location[];
  selectedLocation?: Location;
  onLocationChange?: (location: Location) => void;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const defaultLocations: Location[] = [
  {
    id: "1",
    name: "Downtown Complex",
    address: "123 Main St",
  },
  {
    id: "2",
    name: "Riverside Apartments",
    address: "456 River Rd",
  },
  {
    id: "3",
    name: "Highland Towers",
    address: "789 Hill Ave",
  },
];

const defaultNotifications: Notification[] = [
  {
    id: "1",
    title: "New Inspection Report",
    description: "Downtown Complex inspection report is ready for review",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Maintenance Request",
    description: "New maintenance request from Riverside Apartments",
    time: "5 hours ago",
    read: false,
  },
];

const TopNavBar = ({
  locations = defaultLocations,
  selectedLocation = defaultLocations[0],
  onLocationChange = () => {},
  onThemeToggle = () => {},
  isDarkMode = false,
}: TopNavBarProps) => {
  return (
    <div className="w-full h-[48px] px-4 bg-background flex items-center justify-between rounded-[24px] border">
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite a Friend</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>My Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="font-semibold text-xl hidden sm:inline">Hauser</span>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-center rounded-full"
              role="combobox"
            >
              <span className="truncate">{selectedLocation.name}</span>
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
            {locations.map((location) => (
              <DropdownMenuItem
                key={location.id}
                onClick={() => onLocationChange(location)}
              >
                <div className="flex flex-col">
                  <span>{location.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {location.address}
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {defaultNotifications.some((n) => !n.read) && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            {defaultNotifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start py-2"
              >
                <div className="font-medium">{notification.title}</div>
                <div className="text-sm text-muted-foreground">
                  {notification.description}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {notification.time}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4" />
          <Switch checked={isDarkMode} onCheckedChange={onThemeToggle} />
          <Moon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
