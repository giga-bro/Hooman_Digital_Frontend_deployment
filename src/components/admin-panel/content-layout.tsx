import { Navbar } from "@/components/admin-panel/navbar";
import { cn } from "@/lib/utils";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  newClass?: string;
}

export function ContentLayout({
  title,
  children,
  className,
  newClass
}: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div
        className={
          newClass
            ? newClass
            : cn("container pt-8 pb-8 px-4 sm:px-8", className)
        }
      >
        {children}
      </div>
    </div>
  );
}
