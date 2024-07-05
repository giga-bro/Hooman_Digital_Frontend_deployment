import { Code, Pen, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "Which proposals are currently gaining a lot of support?",
    icon: Pen
  },
  {
    title:
      "Tell me about the most important things that happened in the ecosystem in the past 24 hours",
    icon: Zap
  },
  {
    title: "What's going on in the discord and telegram channels",
    icon: Code
  }
];
const PrefilledPrompts = ({
  sendPrompt
}: {
  sendPrompt: (event: React.KeyboardEvent, prefilledMessage?: string) => void;
}) => {
  return (
    <div className="flex items-center text-left justify-center  w-[80%]  xl:w-[70%] flex-col gap-10  ">
      <Image
        width={100}
        height={100}
        src="/eye.svg"
        alt="Chat"
        className="w-10"
      />
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <button
            onClick={(e) => {
              sendPrompt(
                {
                  key: "Enter"
                } as React.KeyboardEvent,
                card.title
              );
            }}
            key={index}
            className="flex hover:shadow text-left flex-col rounded-lg text-muted-foreground p-4  gap-5 border bg-background "
          >
            <card.icon size={20} />
            <p className="text-sm">“{card.title}”</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrefilledPrompts;
