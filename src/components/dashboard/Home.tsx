// pages/index.tsx
import { FC } from "react";
import { CRMStats } from "@/hooks/types";

const Home: FC = () => {
  const crmStats: CRMStats = {
    totalRevenue: "$150.75k",
    activeUsers: "5.87K",
    totalDeals: "8,654",
    conversionRatio: "4.25%",
    revenueData: [
      { month: "Jan", thisYear: 30, lastYear: 20 },
      { month: "Feb", thisYear: 45, lastYear: 40 },
      { month: "Mar", thisYear: 50, lastYear: 30 },
      { month: "Apr", thisYear: 60, lastYear: 50 },
      { month: "May", thisYear: 70, lastYear: 60 },
      { month: "Jun", thisYear: 50, lastYear: 45 },
      { month: "Jul", thisYear: 40, lastYear: 30 },
      { month: "Aug", thisYear: 60, lastYear: 55 },
      { month: "Sep", thisYear: 65, lastYear: 60 },
      { month: "Oct", thisYear: 55, lastYear: 50 },
    ],
    profitReport: {
      profit: "$3.56K",
      revenue: "$4.25K",
      expenses: "$2.77K",
    },
  };

  return (
    <div className="space-y-10">
      {/* CRM Stats */}
      <section className="px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">CRM Dashboard</h2>
        <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-semibold">Total Revenue</h3>
            <p className="text-lg font-bold">{crmStats.totalRevenue}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-semibold">Active Users</h3>
            <p className="text-lg font-bold">{crmStats.activeUsers}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-semibold">Total Deals</h3>
            <p className="text-lg font-bold">{crmStats.totalDeals}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-sm font-semibold">Conversion Ratio</h3>
            <p className="text-lg font-bold">{crmStats.conversionRatio}</p>
          </div>
        </div>

        {/* Revenue Chart (example) */}
        <div className="mt-8">
          <h3 className="text-md font-semibold">Revenue Statistics</h3>
          <div className="h-64 bg-gray-200 mt-4">[Chart Placeholder]</div>
        </div>

        {/* Profit Report */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-sm font-semibold">Profit</h4>
            <p className="text-lg font-bold">{crmStats.profitReport.profit}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-sm font-semibold">Revenue</h4>
            <p className="text-lg font-bold">{crmStats.profitReport.revenue}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="text-sm font-semibold">Expenses</h4>
            <p className="text-lg font-bold">
              {crmStats.profitReport.expenses}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
