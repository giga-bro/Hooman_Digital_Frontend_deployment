import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ArrowUp, Code, Pen, Zap } from "lucide-react";

const cards = [
  {
    title: "“Which proposals are currently gaining a lot of support”",
    icon: Pen
  },
  {
    title:
      "“Tell me about the most important things that happened in the ecosystem in the past 24 hours”",
    icon: Zap
  },
  {
    title: "“What's going on in the discord and telegram channels”",
    icon: Code
  }
];

const Chat = () => {
  return (
    <ContentLayout
      title="Chat"
      newClass=" flex flex-col h-[90dvh] relative gap-6"
    >
      <div className="flex-1 overflow-y-auto flex items-center justify-center container">
        <div className="flex items-center justify-center  w-[70%] flex-col gap-10  ">
          <img src="/eye.svg" alt="Chat" className="w-10" />
          <div className="grid grid-cols-3 gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg text-muted-foreground p-4  gap-5 border bg-background "
              >
                <card.icon size={20} />
                <p className="text-sm">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border p-2 bg-background rounded-full  w-[70%] flex items-center mx-auto mb-6">
          <input
            type="text"
            placeholder="Ask DAOi "
            className="w-full bg-transparent flex-1 focus:outline-none px-8  placeholder:text-muted-foreground"
          />
          <button className="flex items-center text-white justify-center bg-primary rounded-full h-full aspect-square p-1.5">
            <ArrowUp />
          </button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Chat;
