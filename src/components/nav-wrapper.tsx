import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  CarFront,
  File,
  Inbox,
  MessagesSquare,
  PanelLeft,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { cn } from "../lib/utils";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { Separator } from "../components/ui/separator";

import { TooltipProvider } from "../components/ui/tooltip";

import { Nav } from "../components/nav";
interface Side {
  navCollapsedSize: number;
  children: React.ReactNode;
}

export function SideBar({
  children,

  navCollapsedSize,
}: Side) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [windowWidth, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  console.log(windowWidth);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[100dvh]  items-stretch"
      >
        <ResizablePanel
          defaultSize={225}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={windowWidth > 1600 ? 14 : 18}
          maxSize={windowWidth > 1600 ? 14 : 22}
          onCollapse={() => {
            setIsCollapsed(true);
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all  duration-300 ease-in-out",
            "!overflow-y-auto h-[100dvh]"
          )}
        >
          <div
            className={cn(
              "flex  py-4 items-center  ",
              isCollapsed ? "px-3  justify-center" : "px-4 "
            )}
          >
            <img
              src={isCollapsed ? "/eye.svg" : "/logo.svg"}
              alt="logo"
              className="h-8 "
            />
            {/* <button onClick={() => setIsCollapsed(!isCollapsed)}>
              <PanelLeft />
            </button> */}
          </div>
          <Separator />
          <Nav
            title="Analytics"
            isCollapsed={isCollapsed}
            links={[
              {
                title: "All Information",

                icon: Inbox,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            title="ai-features"
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
            ]}
          />
          <Nav
            title="ai-features"
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={500} minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
