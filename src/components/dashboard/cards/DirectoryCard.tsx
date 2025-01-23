import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Download as DownloadIcon,
  Plumbing as PlumbingIcon,
  ElectricBolt as ElectricalIcon,
  AcUnit as ACIcon,
  Roofing as RoofingIcon,
} from "@mui/icons-material";

interface DirectoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  company: string;
  address: string;
  phone: string;
  email: string;
}

const directories: DirectoryItem[] = [
  {
    id: "1",
    name: "Plumbing",
    icon: <PlumbingIcon />,
    company: "Quick Fix Plumbing",
    address: "123 Pipe Street, Watertown, ST 12345",
    phone: "(555) 123-4567",
    email: "service@quickfixplumbing.com",
  },
  {
    id: "2",
    name: "Electrical",
    icon: <ElectricalIcon />,
    company: "Power Pro Electric",
    address: "456 Circuit Ave, Voltville, ST 12345",
    phone: "(555) 234-5678",
    email: "support@powerpro.com",
  },
  {
    id: "3",
    name: "Air Conditioning & Heat",
    icon: <ACIcon />,
    company: "Cool Comfort HVAC",
    address: "789 Breeze Way, Cooltown, ST 12345",
    phone: "(555) 345-6789",
    email: "service@coolcomfort.com",
  },
  {
    id: "4",
    name: "Roofing",
    icon: <RoofingIcon />,
    company: "Top Notch Roofing",
    address: "321 Summit Road, Heights, ST 12345",
    phone: "(555) 456-7890",
    email: "info@topnotchroofing.com",
  },
];

const DirectoryCard = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleExpandClick = (id: string) => {
    setExpanded(expanded === id ? false : id);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDownload = (company: string) => {
    // Implement download functionality
    console.log(`Downloading info for ${company}`);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader title="Directory" titleTypography={{ variant: "h6" }} />
      <CardContent sx={{ flex: 1, overflow: "auto" }}>
        <List sx={{ p: 0 }}>
          {directories.map((directory) => (
            <React.Fragment key={directory.id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    onClick={() => handleExpandClick(directory.id)}
                    sx={{
                      transform:
                        expanded === directory.id
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      transition: "transform 0.3s",
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>{directory.icon}</ListItemIcon>
                <ListItemText primary={directory.name} />
              </ListItem>
              <Collapse
                in={expanded === directory.id}
                timeout="auto"
                unmountOnExit
              >
                <Box sx={{ p: 2, bgcolor: "background.paper" }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {directory.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {directory.address}
                  </Typography>
                  <ButtonGroup variant="outlined" size="small" sx={{ mt: 2 }}>
                    <Button
                      startIcon={<PhoneIcon />}
                      onClick={() => handleCall(directory.phone)}
                    >
                      Call
                    </Button>
                    <Button
                      startIcon={<EmailIcon />}
                      onClick={() => handleEmail(directory.email)}
                    >
                      Email
                    </Button>
                    <Button
                      startIcon={<DownloadIcon />}
                      onClick={() => handleDownload(directory.company)}
                    >
                      Info
                    </Button>
                  </ButtonGroup>
                </Box>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default DirectoryCard;
