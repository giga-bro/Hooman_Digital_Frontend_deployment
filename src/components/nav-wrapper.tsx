import {
  ArrowUpRight,
  LandPlot,
  MessageCircle,
  NotepadText,
  Search,
  Send,
  Settings,
  Users,
} from "lucide-react";
import * as React from "react";

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
          console.log(sizes);

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
          minSize={windowWidth > 1600 ? 12 : windowWidth > 1260 ? 19 : 22}
          maxSize={windowWidth > 1600 ? 14 : windowWidth > 1260 ? 21 : 24}
          onCollapse={() => {
            setIsCollapsed(true);
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all  duration-300 ease-in-out",
            "!overflow-y-auto custom-scrollbar h-[100dvh]"
          )}
        >
          <div
            className={cn(
              "flex  py-4 items-center top-0 sticky bg-white border-b",
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
          <Nav
            title="Analytics"
            isCollapsed={isCollapsed}
            links={[
              {
                title: "All Information",

                icon: LandPlot,
                variant: "default",
              },
              {
                title: "Discord",

                icon: Send,
                variant: "ghost",
              },
              {
                title: "Telegram",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Twitter",

                icon: Send,
                variant: "ghost",
              },
              {
                title: "Forum",

                icon: Users,
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
                title: "DAOi Chat",

                icon: MessageCircle,
                variant: "ghost",
              },
              {
                title: "Docs",

                icon: NotepadText,
                variant: "ghost",
              },
            ]}
          />{" "}
          <Separator />
          <Nav
            title="More"
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Website",

                icon: ArrowUpRight,
                variant: "ghost",
              },
              {
                title: "Settings",

                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={500}
          minSize={30}
          className="bg-gray-100 px-8 py-5 !overflow-y-auto"
        >
          <div className="flex justify-between items-center">
            <div className="rounded-xl bg-white px-5 py-2 flex gap-4 items-center w-[20rem]">
              <Search className="text-zinc-400 size-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-lg  text-zinc-500">John Doe</h1>
              <img
                src="https://avatars.githubusercontent.com/u/7221389?v=4"
                alt="avatar"
                className="size-10 rounded-full"
              />
            </div>
          </div>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
