import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div className="flex flex-col gap-10 bg-white p-5 rounded-2xl">
        <h1 className="text-xl font-semibold">Latest</h1>
        <div className="grid grid-cols-2 gap-10"></div>
      </div>
    </div>
  );
}
