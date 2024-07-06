"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";

import LatestCard from "@/components/dashboard/LatestCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLatest } from "@/services/queries";

export default function DashboardPage() {
  const { data, isLoading } = useLatest();
  console.log(data, isLoading);

  const tabs: {
    title: string;
    content: "proposals" | "announcements" | "grants_discussions";
  }[] = [
    {
      title: "Proposals",
      content: "proposals"
    },
    {
      title: "Announcements",
      content: "announcements"
    },
    {
      title: "Discussions",
      content: "grants_discussions"
    }
  ];

  return (
    <ContentLayout title="Dashboard" className="space-y-10">
      <Tabs defaultValue={tabs[0].title} className="space-y-6">
        <TabsList className="flex w-min border p-0 h-auto bg-background divide-x overflow-hidden">
          {tabs.map((tab, index) => (
            <TabsTrigger
              value={tab.title}
              key={index + tab.title}
              className="py-2 data-[state=active]:shadow-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-none"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, i) => (
          <TabsContent value={tab.title} key={i + tab.title}>
            <div className="columns-1 md:columns-2 xl:columns-3 space-y-6 gap-6">
              {isLoading &&
                new Array(6).fill(0).map((_, index) => (
                  <Skeleton
                    style={{
                      height: Math.floor(Math.random() * 120) + 300
                    }}
                    key={index}
                    className="break-inside-avoid w-full bg-gray-300 dark:bg-zinc-800"
                  />
                ))}
              {data?.[tab?.content]?.map((item, index) => (
                <LatestCard
                  type={tab.content}
                  key={index}
                  i={i}
                  author={item.author}
                  description={item.summary}
                  title={item.title}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </ContentLayout>
  );
}
