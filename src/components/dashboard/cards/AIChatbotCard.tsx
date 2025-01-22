import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Paperclip } from "lucide-react";

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

const AIChatbotCard = () => {
  const [inputMessage, setInputMessage] = useState("");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="h-full bg-background flex flex-col p-6">
      <div className="flex flex-col items-center gap-4 mb-6">
        <Avatar className="h-16 w-16 rounded-full bg-primary/10">
          <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=house" />
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-1">Good afternoon, Jessie</h2>
          <p className="text-sm text-muted-foreground">{formattedDate}</p>
        </div>
      </div>

      <Separator className="mb-6" />

      <ScrollArea className="flex-grow mb-6 pr-4">
        <div className="space-y-4">
          {defaultMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Button
          variant="outline"
          className="h-16 whitespace-normal text-center"
        >
          Create an Event
        </Button>
        <Button
          variant="outline"
          className="h-16 whitespace-normal text-center"
        >
          Add a Contact
        </Button>
        <Button
          variant="outline"
          className="h-16 whitespace-normal text-center"
        >
          Set a Reminder
        </Button>
        <Button
          variant="outline"
          className="h-16 whitespace-normal text-center"
        >
          Start a Project
        </Button>
      </div>

      <div className="relative">
        <p className="absolute left-4 top-2 text-sm text-muted-foreground">
          Message Hauser
        </p>
        <Paperclip className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="min-h-[100px] pl-4 pr-10 pt-8 pb-2 resize-none"
          multiline
        />
      </div>
    </Card>
  );
};

export default AIChatbotCard;
