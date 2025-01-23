import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Folder as FolderIcon,
  Description as FileIcon,
} from "@mui/icons-material";

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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
      }}
    >
      <CardHeader
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Records</Typography>
            <IconButton size="small">
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        }
      />
      <CardContent sx={{ p: 2, pt: 0 }}>
        <TextField
          size="small"
          placeholder="Search files..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            maxHeight: 280,
            overflow: "auto",
            pr: 1,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "action.hover",
              borderRadius: "4px",
            },
          }}
        >
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1.5,
                borderRadius: 1,
                transition: "background-color 0.2s",
                "&:hover": {
                  bgcolor: "action.hover",
                },
                cursor: "pointer",
              }}
            >
              {item.type === "folder" ? (
                <FolderIcon
                  sx={{ color: "action.active", mr: 1, fontSize: 20 }}
                />
              ) : (
                <FileIcon
                  sx={{ color: "action.active", mr: 1, fontSize: 20 }}
                />
              )}
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography variant="body2" noWrap>
                  {item.name}
                </Typography>
                {item.date && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    {item.date}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecordsCard;
