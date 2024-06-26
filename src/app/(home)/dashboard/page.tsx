import { ContentLayout } from "@/components/admin-panel/content-layout";
import Latest from "@/components/dashboard/Latest";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" className="space-y-10">
      <Latest />

      <section className="flex flex-col gap-6 bg-background rounded-xl p-5">
        <h1 className="text-xl font-bold">Disccussions & Debates</h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="border-b ">
              <tr>
                <th className="text-left pb-3 font-normal text-muted-foreground pr-4 text-sm">
                  Topics
                </th>
                <th className="text-left pb-3 font-normal text-muted-foreground px-4 text-sm">
                  Users
                </th>
                <th className="text-left pb-3 font-normal text-muted-foreground px-4 text-sm">
                  Replies
                </th>
                <th className="text-left pb-3 font-normal text-muted-foreground px-4 text-sm">
                  Views
                </th>
                <th className="text-left pb-3 font-normal text-muted-foreground pl-4 text-sm">
                  Activities
                </th>
              </tr>
            </thead>
            <tbody>
              {new Array(6).fill(0).map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="text-sm min-w-[10rem] max-w-[10rem] py-3 pr-4 ">
                    Sheikh Rahyan...._🔴✨ contributed: "Host a cozy twitter
                    space with retroPGF recipient"
                  </td>
                  <td className="text-sm min-w-[5rem] max-w-[12rem]   py-3 px-4 ">
                    <div className="flex">
                      {new Array(Math.floor(Math.random() * 6))
                        .fill(0)
                        .map((_, index) => (
                          <img
                            src={`https://picsum.photos/id/${
                              index + 30
                            }/200/200`}
                            alt="placeholder"
                            className="rounded-full object-cover size-8 -ml-3  "
                          />
                        ))}
                    </div>
                  </td>
                  <td className="text-sm   py-3 px-4 ">10</td>
                  <td className="text-sm   py-3 px-4 ">1k</td>
                  <td className="text-sm   py-3 pl-4 ">15h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </ContentLayout>
  );
}
