import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCard = ({
  title,
  author,
  description,
  type,
  i
}: {
  title: string;
  author: string;
  description: string;
  type: string;
  i: number;
}) => {
  const colors = [
    "bg-blue-100 border-blue-500 text-blue-500 dark:border-blue-700 dark:text-blue-100 dark:bg-blue-900",
    "bg-green-100 border-green-500 text-green-500 dark:border-green-700 dark:text-green-100 dark:bg-green-900",

    "bg-red-100 border-red-500 text-red-500 dark:border-red-700 dark:text-red-100 dark:bg-red-900"
  ];

  return (
    <Link
      href={`/dashboard/${type}/${title?.replace(/\s+/g, "-").toLowerCase()}`}
      className={clsx(
        "bg-background rounded-2xl  break-inside-avoid  w-full p-4 flex flex-col gap-4 hover:shadow transition-all duration-200 ease-in-out"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-accent size-12 uppercase font-medium flex items-center justify-center rounded-full ">
            {author?.[0]}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-sm">{author}</h1>
            <p className="text-xs text-muted-foreground">15h</p>
          </div>
        </div>
        <div
          className={clsx(
            "px-3 py-1 capitalize  text-xs  border rounded-full",
            colors[i]
          )}
        >
          {type}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm line-clamp-[20]">{description}</p>
      </div>
    </Link>
  );
};

export default LatestCard;
