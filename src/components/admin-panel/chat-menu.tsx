"use client";

import { ChevronLeft, Ellipsis, PencilLine, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { getMenuList } from "@/lib/menu-list";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function ChatMenu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList
            .filter(({ groupLabel }) => groupLabel === "Ai Features")
            .map(({ groupLabel, menus }, index) => (
              <li
                className={cn("w-full", groupLabel ? "pt-5" : "")}
                key={index}
              >
                {(isOpen && groupLabel) || isOpen === undefined ? (
                  <Link
                    href="/dashboard"
                    className="flex gap-2 mb-6 items-center text-muted-foreground"
                  >
                    <ChevronLeft size={16} />
                    <p className="text-xs tracking-wide uppercase   truncate">
                      Dashboard
                    </p>
                  </Link>
                ) : !isOpen && isOpen !== undefined && groupLabel ? (
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="w-full">
                        <div className="w-full flex justify-center items-center">
                          <Ellipsis className="h-5 w-5" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{groupLabel}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <p className="pb-2"></p>
                )}
                {menus.map(
                  ({ href, label, icon: Icon, active, submenus, svg }, index) =>
                    submenus.length === 0 ? (
                      <div className="w-full" key={index}>
                        <TooltipProvider disableHoverableContent>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                              <Button
                                variant={active ? "secondary" : "ghost"}
                                className={cn(
                                  "w-full justify-start h-10 mb-1",
                                  isOpen === false ? "px-3" : ""
                                )}
                                asChild
                              >
                                <Link href={href}>
                                  <span
                                    className={cn(
                                      isOpen === false ? "" : "mr-4"
                                    )}
                                  >
                                    {svg ? svg : <Icon size={18} />}
                                  </span>
                                  <p
                                    className={cn(
                                      "max-w-[200px] truncate",
                                      isOpen === false
                                        ? "-translate-x-96 opacity-0"
                                        : "translate-x-0 opacity-100"
                                    )}
                                  >
                                    {label}
                                  </p>
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            {isOpen === false && (
                              <TooltipContent side="right">
                                {label}
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ) : (
                      <div className="w-full" key={index}>
                        <CollapseMenuButton
                          icon={Icon}
                          label={label}
                          active={active}
                          submenus={submenus}
                          isOpen={isOpen}
                        />
                      </div>
                    )
                )}
              </li>
            ))}
          {isOpen && (
            <>
              <Separator className="mt-4" />
              <div className="flex flex-col gap-6 py-6">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[10px] text-muted-foreground uppercase tracking-wide ">
                    Yesterday
                  </h1>
                  <div className="flex flex-col gap-4 pl-2">
                    {new Array(2).fill(0).map((_, index) => (
                      <div
                        className="flex gap-4 text-muted-foreground"
                        key={index}
                      >
                        <p className="text-xs flex-1  line-clamp-1">
                          Chatbot definition and examples of how to use it
                        </p>
                        <div className="flex gap-3">
                          <PencilLine size={16} />
                          <Trash2 size={16} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-3">
                  <h1 className="text-[10px] text-muted-foreground uppercase tracking-wide ">
                    past 30 days
                  </h1>
                  <div className="flex flex-col gap-4 pl-2">
                    {new Array(4).fill(0).map((_, index) => (
                      <div
                        className="flex gap-4 text-muted-foreground"
                        key={index}
                      >
                        <p className="text-xs flex-1  line-clamp-1">
                          Chatbot definition and examples of how to use it
                        </p>
                        <div className="flex gap-3">
                          <PencilLine size={16} />
                          <Trash2 size={16} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          <li className="w-full grow flex gap-2  items-end ">
            <Button
              className="flex w-full gap-2 border-primary text-primary px-0"
              variant="outline"
            >
              <Plus size={20} className="size-5" />
              {isOpen && <span className="text-sm">New Chat</span>}
            </Button>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
