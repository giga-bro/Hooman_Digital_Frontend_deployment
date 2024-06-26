import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Welcome to the DAOi</h1>
        <p className="text-lg">
          DAOi is the first decentralized autonomous organization (DAO)
          dedicated to the development of the Internet Computer ecosystem.
        </p>
        <Link href="/dashboard">
          <Button size="lg">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
