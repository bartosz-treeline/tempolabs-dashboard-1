import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  Divider,
  ButtonGroup,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  CalendarMonth as CalendarIcon,
  ContactMail as ContactIcon,
  NotificationsActive as ReminderIcon,
  Assignment as ProjectIcon,
} from "@mui/icons-material";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
}

const defaultMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    content:
      "Hello! I'm your property management assistant. How can I help you today?",
  },
  {
    id: 2,
    type: "user",
    content: "Can you help me schedule a property inspection?",
  },
  {
    id: 3,
    type: "bot",
    content:
      "Of course! I can help you schedule a property inspection. Which property would you like to inspect?",
  },
  {
    id: 4,
    type: "user",
    content: "The Downtown Complex on Main Street",
  },
  {
    id: 5,
    type: "bot",
    content:
      "I'll help you schedule an inspection for Downtown Complex. When would you like to schedule it?",
  },
];

const quickActions = [
  { icon: <CalendarIcon />, label: "Create an Event" },
  { icon: <ContactIcon />, label: "Add a Contact" },
  { icon: <ReminderIcon />, label: "Set a Reminder" },
  { icon: <ProjectIcon />, label: "Start a Project" },
];

const AIChatbotCard = () => {
  const [messages] = useState<Message[]>(defaultMessages);
  const [inputMessage, setInputMessage] = useState("");
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
          p: 3,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{ width: 64, height: 64, bgcolor: "primary.main" }}
            src="https://api.dicebear.com/7.x/bottts/svg?seed=house"
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Good afternoon, Jessie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentDate}
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pr: 1,
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                justifyContent:
                  message.type === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "80%",
                  p: 2,
                  borderRadius: 3,
                  bgcolor:
                    message.type === "user" ? "primary.main" : "action.hover",
                  color:
                    message.type === "user"
                      ? "primary.contrastText"
                      : "text.primary",
                }}
              >
                <Typography variant="body2">{message.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Quick Actions */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap",
            gap: 2,
            "& > *": { flex: "1 1 calc(50% - 8px)" },
          }}
        >
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={action.icon}
              sx={{
                height: 64,
                justifyContent: "flex-start",
                textAlign: "left",
                whiteSpace: "normal",
              }}
            >
              {action.label}
            </Button>
          ))}
        </Stack>

        {/* Input */}
        <Box sx={{ position: "relative", mt: 2 }}>
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              left: 1.5,
              top: 1,
              color: "text.secondary",
            }}
          >
            Message Hauser
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={3}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            sx={{
              "& .MuiInputBase-root": {
                pt: 4,
              },
            }}
            InputProps={{
              endAdornment: (
                <Box sx={{ display: "flex", gap: 1, p: 1 }}>
                  <IconButton size="small">
                    <AttachFileIcon />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <SendIcon />
                  </IconButton>
                </Box>
              ),
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AIChatbotCard;
