import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface message {
  conversation_id: string;
  message: string;
  by: string;
}
[];

interface useChat {
  messages: message[];
  addMessage: (message: message) => void;
}

export const useChat = create(
  persist<useChat>(
    (set, get) => ({
      messages: [],
      addMessage: (message) => {
        set((state) => ({ messages: [...state.messages, message] }));
      }
    }),
    {
      name: "chat-daoi",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
