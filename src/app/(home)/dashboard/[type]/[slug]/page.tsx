"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Separator } from "@/components/ui/separator";
import { useLatest } from "@/services/queries";
import { LatestItem, tagType } from "@/types/latest";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const PostById = ({
  params
}: {
  params: {
    slug: string;
    type: tagType["type"];
  };
}) => {
  const { data, isLoading } = useLatest();

  const result = data?.[params.type]?.find(
    (item: LatestItem) =>
      item.title?.replace(/\s+/g, "-").toLowerCase() === params.slug
  );

  console.log(result, isLoading);

  return (
    <ContentLayout
      title={result?.title || "Post not found"}
      className="space-y-10"
    >
      <div className="flex  rounded-lg gap-8 bg-background p-6">
        <div className="  w-2/3 flex flex-col  gap-8">
          <div className="flex justify-between items-center border-b pb-3">
            <Link
              href="/dashboard"
              className="flex gap-2 text-sm text-center text-accent-foreground"
            >
              <ChevronLeft size={18} />
              <p>Back</p>
            </Link>
          </div>

          <h1 className="text-xl font-bold capitalize">
            {result?.title?.replaceAll("-", " ")}
          </h1>
          <div className="aspect-[16/5] bg-accent rounded-lg" />
          <div className="flex flex-col gap-2 ">
            <h1 className=" font-bold">Summary</h1>
            <p className="text-sm ">{result?.summary}</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold">Sentiment</h1>
            <p className="text-sm ">{result?.sentiment}</p>
          </div>
        </div>
        <div className=" w-1/3 bg-accent rounded p-4 flex flex-col ">
          <h1 className="text-sm text-accent-foreground border-b pb-3">Chat</h1>
        </div>
      </div>
    </ContentLayout>
  );
};

export default PostById;
