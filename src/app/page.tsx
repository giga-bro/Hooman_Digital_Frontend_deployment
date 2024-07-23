import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-accent ">
      <header className="bg-background drop-shadow">
        <nav className="container flex justify-between  items-center w-full py-3  ">
          <Image width={100} height={40} src="/logo.svg" alt="Brand Logo" />
          <Button variant="default" className="rounded-full">
            Login
          </Button>
        </nav>
      </header>
      <main className="container  flex-1 pt-14 flex flex-col gap-5  ">
        <div className="flex gap-14 items-center">
          <h1 className="text-6xl text-accent-foreground w-[70%]  font-bold leading-snug">
            The All-in-One Governance and Statistical Answer Engine for DAOs
          </h1>
          <div className="flex flex-col gap-6 w-[30%]">
            <h1 className=" text-accent-foreground text-lg   ">
              AI-powered DAO management with activity summaries, instant
              reports, and interactive documentation. Effortlessly streamline
              operations and engage your community.
            </h1>
            <div className="flex gap-3">
              <Button variant="default" className="rounded-full" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1800}
          height={900}
          src="/hero.png"
          alt="Hero"
          className="flex-1 w-full object-contain"
        />
      </main>
    </div>
  );
}
