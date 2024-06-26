import Link from "next/link";

import { Menu } from "@/components/admin-panel/menu";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChatMenu } from "./chat-menu";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const pathname = usePathname();
  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[65px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-1 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1 px-0" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-1">
            <Image
              width={24}
              height={24}
              src="/eye.svg"
              alt="Brand Logo"
              className="w-6 h-6 mr-1"
            />
            <Image
              src="/text.svg"
              alt="Brand Logo"
              width={40}
              height={40}
              className={cn(
                "w-14  transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            />
          </Link>
        </Button>
        {pathname.includes("chat") ? (
          <ChatMenu isOpen={sidebar?.isOpen} />
        ) : (
          <Menu isOpen={sidebar?.isOpen} />
        )}
      </div>
    </aside>
  );
}
