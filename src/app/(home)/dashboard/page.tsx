import { ContentLayout } from "@/components/admin-panel/content-layout";
import Latest from "@/components/dashboard/Latest";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" className="space-y-10">
      <Latest />

      <section className="flex flex-col gap-6 bg-background rounded-xl p-5">
        <h1 className="text-xl font-bold">Disccussions & Debates</h1>
        {/* responsive table with head topics,user avatars , replies ,views,activites */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left">Topics</th>
                <th className="text-left">Users</th>
                <th className="text-left">Replies</th>
                <th className="text-left">Views</th>
                <th className="text-left">Activities</th>
              </tr>
            </thead>
            <tbody>
              {new Array(6).fill(0).map((_, index) => (
                <tr key={index}>
                  <td className="text-sm">The future of DAOi</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </ContentLayout>
  );
}
