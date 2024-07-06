"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import PrefilledPrompts from "@/components/prefilled-chat-message";
import { useChat } from "@/hooks/use-chat";
import { BASE_URL } from "@/services/api";
import clsx from "clsx";
import { ArrowUp, Loader2 } from "lucide-react";
import React, { useState } from "react";

const Chat = () => {
  // const [messages, setMessages] = useState<
  //   {
  //     conversation_id: string;
  //     message: string;
  //     by: string;
  //   }[]
  // >([]);

  const messages = useChat((state) => state.messages);
  const setMessages = useChat((state) => state.addMessage);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const sendPrompt = async (
    event: React.KeyboardEvent,
    prefilledMessage?: string
  ) => {
    if (event.key !== "Enter" || (!prefilledMessage && !message) || loading) {
      return;
    }
    const data = {
      conversation_id: Math.random().toString(36).substring(7),
      message: prefilledMessage ?? message
    };
    setMessages({
      conversation_id: data.conversation_id,
      message: prefilledMessage ?? message,
      by: "user"
    });
    try {
      setLoading(true);
      setAnswer("");
      let currenAnswer: string = "";
      const response = await fetch(`${BASE_URL}/chat`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*", // indicates which files we are able to understand
          "Content-Type": "application/json" // indicates what the server actually sent
        },
        body: JSON.stringify({
          conversation_id: Math.random().toString(36).substring(7),
          message: prefilledMessage ?? message
        })
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value, { stream: true });
        console.log(
          decodedChunk
            .replaceAll("data:", "")
            .replaceAll("[DONE]", "")
            .replaceAll("Answer:", "").length,
          decodedChunk
        );

        if (
          !decodedChunk.includes("[DONE]") &&
          !decodedChunk.includes("Answer:")
        ) {
          //slice the first space
          currenAnswer = currenAnswer + decodedChunk.replaceAll("data: ", "");
          setAnswer(currenAnswer);
        }
      }
      setMessages({
        conversation_id: data.conversation_id,
        message: currenAnswer,
        by: "ai"
      });
    } catch (err) {
      console.error(err, "err");
    } finally {
      setMessage("");
      setLoading(false);
    }
  };

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages, answer]);

  return (
    <ContentLayout
      title="Chat"
      newClass=" flex flex-col h-[90dvh] relative gap-6"
    >
      <div
        className={clsx(
          "container pt-10",
          messages.length > 0
            ? "flex-1 overflow-y-auto flex  justify-center "
            : "flex flex-1 items-center justify-center"
        )}
        ref={ref}
      >
        {answer || messages.length > 0 ? (
          <div className="flex flex-col gap-5 w-[80%]  xl:w-[70%]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4  max-w-[80%]   rounded-lg  ${
                  message.by === "user"
                    ? "bg-primary text-primary-foreground  ml-auto rounded-br-none"
                    : "bg-background text-muted-foreground  rounded-bl-none"
                }
                  ${message.message === answer ? "hidden" : ""}
                `}
              >
                {message.message}
              </div>
            ))}

            {answer && (
              <div className="p-4  bg-background text-muted-foreground max-w-[80%] rounded-lg">
                {answer}
                {loading && "..."}
              </div>
            )}
          </div>
        ) : (
          <PrefilledPrompts sendPrompt={sendPrompt} />
        )}
      </div>
      <div className="container">
        <div className="border p-2 bg-background rounded-full  w-[80%]  xl:w-[70%] flex items-center mx-auto mb-6">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Ask DAOi "
            className="w-full bg-transparent flex-1 focus:outline-none px-8  placeholder:text-muted-foreground"
            onKeyDown={sendPrompt}
          />
          <button
            disabled={loading}
            onClick={() => {
              sendPrompt({ key: "Enter" } as React.KeyboardEvent);
            }}
            className="flex items-center text-primary-foreground justify-center bg-primary rounded-full h-full aspect-square p-1.5"
          >
            {loading ? (
              <Loader2 className="animate-spin " size={24} />
            ) : (
              <ArrowUp size={24} />
            )}
          </button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Chat;
