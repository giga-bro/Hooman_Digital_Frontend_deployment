import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Latest = () => {
  return (
    <section className="flex flex-col gap-6 bg-background rounded-xl p-5">
      <h1 className="text-xl font-bold">Latest</h1>
      <ul className="grid md:grid-cols-2 gap-10 ">
        <li className="flex flex-col gap-3 bg-zinc-100 dark:bg-zinc-900 p-5  rounded-md text-sm">
          <h1 className="">Recent Proposals</h1>
          <div className="rounded overflow-hidden divide-y">
            {new Array(6).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-background  px-4 py-2.5"
              >
                <Image
                  src="https://placehold.co/800@3x.png"
                  width={50}
                  height={50}
                  alt="placeholder"
                  className="rounded-full object-cover size-12"
                />

                <p className="text-sm">
                  Sheikh Rahyan...._🔴✨ contributed: "Host a cozy twitter space
                  with retroPGF recipient"
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-5 mr-auto rounded-full">View All</Button>
        </li>
        <li className="flex flex-col  bg-zinc-100  gap-8 dark:bg-zinc-900 p-5  rounded-md text-sm">
          <div className="flex flex-col gap-3">
            <h1 className="">Events</h1>
            <div className="rounded overflow-hidden divide-y">
              {new Array(2).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-background  px-4 py-2.5"
                >
                  <Image
                    src="https://placehold.co/800@3x.png"
                    width={50}
                    height={50}
                    alt="placeholder"
                    className="rounded-full object-cover size-12"
                  />

                  <p className="text-sm">
                    Sheikh Rahyan...._🔴✨ contributed: "Host a cozy twitter
                    space with retroPGF recipient"
                  </p>
                </div>
              ))}
            </div>
            <Button className="mt-5 mr-auto rounded-full">View All</Button>
          </div>{" "}
          <Separator />
          <div className="flex flex-col gap-3 ">
            <h1 className="">Announcements</h1>
            <div className="rounded overflow-hidden divide-y">
              {new Array(2).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-background  px-4 py-2.5"
                >
                  <Image
                    src="https://placehold.co/800@3x.png"
                    width={50}
                    height={50}
                    alt="placeholder"
                    className="rounded-full object-cover size-12"
                  />

                  <p className="text-sm">
                    Sheikh Rahyan...._🔴✨ contributed: "Host a cozy twitter
                    space with retroPGF recipient"
                  </p>
                </div>
              ))}
            </div>
            <Button className="mt-5 mr-auto rounded-full">View All</Button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Latest;
