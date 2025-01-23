import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Switch,
  Tooltip,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  LightMode as SunIcon,
  DarkMode as MoonIcon,
  Home as HomeIcon,
  HelpOutline as HelpIcon,
  PersonAdd as UserPlusIcon,
  AccountCircle as UserCircleIcon,
  Logout as LogOutIcon,
  KeyboardArrowDown as ChevronDownIcon,
} from "@mui/icons-material";

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
  const [mainMenuAnchor, setMainMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const [locationMenuAnchor, setLocationMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const [notificationMenuAnchor, setNotificationMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMainMenuAnchor(event.currentTarget);
  };

  const handleLocationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLocationMenuAnchor(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchor(event.currentTarget);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ borderRadius: 3 }}
    >
      <Toolbar sx={{ minHeight: 48 }}>
        {/* Left section */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMainMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ ml: 2, display: { xs: "none", sm: "block" } }}
        >
          Hauser
        </Typography>

        {/* Location selector */}
        <Button
          sx={{
            mx: "auto",
            maxWidth: 400,
            textTransform: "none",
            borderRadius: 50,
          }}
          variant="outlined"
          onClick={handleLocationMenuOpen}
          endIcon={<ChevronDownIcon />}
        >
          {selectedLocation.name}
        </Button>

        {/* Right section */}
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit" onClick={handleNotificationMenuOpen}>
            <Badge
              color="error"
              variant="dot"
              invisible={!defaultNotifications.some((n) => !n.read)}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SunIcon fontSize="small" />
            <Switch
              checked={isDarkMode}
              onChange={onThemeToggle}
              size="small"
            />
            <MoonIcon fontSize="small" />
          </Box>
        </Box>

        {/* Menus */}
        <Menu
          anchorEl={mainMenuAnchor}
          open={Boolean(mainMenuAnchor)}
          onClose={() => setMainMenuAnchor(null)}
        >
          <MenuItem onClick={() => setMainMenuAnchor(null)}>
            <HomeIcon fontSize="small" sx={{ mr: 1 }} /> Home
          </MenuItem>
          <MenuItem onClick={() => setMainMenuAnchor(null)}>
            <HelpIcon fontSize="small" sx={{ mr: 1 }} /> Support
          </MenuItem>
          <MenuItem onClick={() => setMainMenuAnchor(null)}>
            <NotificationsIcon fontSize="small" sx={{ mr: 1 }} /> Notifications
          </MenuItem>
          <MenuItem onClick={() => setMainMenuAnchor(null)}>
            <UserPlusIcon fontSize="small" sx={{ mr: 1 }} /> Invite a Friend
          </MenuItem>
          <MenuItem onClick={() => setMainMenuAnchor(null)}>
            <UserCircleIcon fontSize="small" sx={{ mr: 1 }} /> My Account
          </MenuItem>
          <MenuItem
            onClick={() => setMainMenuAnchor(null)}
            sx={{ color: "error.main" }}
          >
            <LogOutIcon fontSize="small" sx={{ mr: 1 }} /> Log Out
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={locationMenuAnchor}
          open={Boolean(locationMenuAnchor)}
          onClose={() => setLocationMenuAnchor(null)}
          PaperProps={{
            sx: { width: locationMenuAnchor?.offsetWidth },
          }}
        >
          {locations.map((location) => (
            <MenuItem
              key={location.id}
              onClick={() => {
                onLocationChange(location);
                setLocationMenuAnchor(null);
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">{location.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {location.address}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={notificationMenuAnchor}
          open={Boolean(notificationMenuAnchor)}
          onClose={() => setNotificationMenuAnchor(null)}
          PaperProps={{
            sx: { width: 320 },
          }}
        >
          {defaultNotifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => setNotificationMenuAnchor(null)}
              sx={{ flexDirection: "column", alignItems: "flex-start", py: 1 }}
            >
              <Typography variant="body1">{notification.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {notification.description}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {notification.time}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
