import {
  closedDeals,
  recentActivity,
  upcomingMeetings,
  websiteTraffic,
} from "@/data/dashboard";
import { Deal } from "@/hooks/types";

const Summary = () => {
  const recentDeals: Deal[] = [
    {
      id: "#001234",
      client: "Acme Corp.",
      dealValue: "$50,000",
      dealStatus: "Closed",
      closingDate: "Oct 18, 2024",
      salesperson: "John Doe",
    },
    {
      id: "#001235",
      client: "Susenz Ltd.",
      dealValue: "$75,000",
      dealStatus: "In Progress",
      closingDate: "Oct 16, 2024",
      salesperson: "Jane Smith",
    },
    {
      id: "#001236",
      client: "BrightTech",
      dealValue: "$120,000",
      dealStatus: "Lost",
      closingDate: "Oct 12, 2024",
      salesperson: "Peter Johnson",
    },
    {
      id: "#001237",
      client: "Future Innovations",
      dealValue: "$65,000",
      dealStatus: "Pending",
      closingDate: "Oct 10, 2024",
      salesperson: "Emily Davis",
    },
    {
      id: "#001238",
      client: "Global Ventures",
      dealValue: "$90,000",
      dealStatus: "Closed",
      closingDate: "Oct 08, 2024",
      salesperson: "Mark Lee",
    },
  ];
  return (
    <>
      {" "}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Closed Deals */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Closed Deals</h2>
          <div className="mt-4 space-y-4">
            {closedDeals.map((deal) => (
              <div key={deal.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`h-6 w-6 rounded-full ${deal.color}`}></div>
                  <span className="font-medium">{deal.name}</span>
                </div>
                <div className="text-gray-500">{deal.amount}</div>
              </div>
            ))}
          </div>
          <button className="text-purple-600 mt-4">View All</button>
        </div>

        {/* Website Traffic */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            Website Traffic
          </h2>
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="text-purple-500">
                Total Visits: {websiteTraffic.totalVisits}
              </div>
              <div className="text-blue-500">
                Unique Visitors: {websiteTraffic.uniqueVisitors}
              </div>
              <div className="text-orange-500">
                Bounce Rate: {websiteTraffic.bounceRate}
              </div>
            </div>
          </div>
          <button className="text-purple-600 mt-4">View Details</button>
        </div>

        {/* Recent Activity */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            Recent Activity
          </h2>
          <div className="mt-4 space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4">
                <div className={`h-8 w-8 rounded-full ${activity.icon}`}></div>
                <div className="flex flex-col">
                  <span className="font-medium">{activity.title}</span>
                  <span className="text-gray-500 text-sm">
                    {activity.description}
                  </span>
                  {activity.user && (
                    <span className="text-gray-400 text-sm">
                      - {activity.user}
                    </span>
                  )}
                  <span className="text-gray-400 text-xs">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="text-purple-600 mt-4">View Details</button>
        </div>

        {/* Upcoming Meetings */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            Upcoming Meetings
          </h2>
          <div className="mt-4 space-y-4">
            {upcomingMeetings.map((meeting, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <div className="font-medium">{meeting.date}</div>
                  <div className="text-gray-500">{meeting.title}</div>
                </div>
                <div className="text-gray-400">{meeting.time}</div>
              </div>
            ))}
          </div>
          <button className="text-purple-600 mt-4">View All</button>
        </div>
      </div>
      {/* Recent Deals */}
      <section className="px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Recent Deals Status</h2>
        <table className="w-full mt-4 text-sm text-gray-700">
          <thead className="text-xs text-gray-500 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2">Deal ID</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Deal Value</th>
              <th className="px-4 py-2">Deal Status</th>
              <th className="px-4 py-2">Closing Date</th>
              <th className="px-4 py-2">Salesperson</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentDeals.map((deal) => (
              <tr key={deal.id} className="border-b">
                <td className="px-4 py-2">{deal.id}</td>
                <td className="px-4 py-2">{deal.client}</td>
                <td className="px-4 py-2">{deal.dealValue}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      deal.dealStatus === "Closed"
                        ? "bg-green-200 text-green-800"
                        : deal.dealStatus === "In Progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {deal.dealStatus}
                  </span>
                </td>
                <td className="px-4 py-2">{deal.closingDate}</td>
                <td className="px-4 py-2">{deal.salesperson}</td>
                <td className="px-4 py-2">
                  <button className="text-indigo-600 hover:text-indigo-800 mr-2">
                    👁
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    ⬇️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Summary;
