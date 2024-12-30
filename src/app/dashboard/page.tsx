"use client";

import { Fetch } from "@/hooks/apiUtils";
import { useEffect, useState } from "react";
import Wrapper from "@/components/common/Wrapper";
import AuthGuard from "../../components/AuthGuard";
import UserData from "@/components/charts/Userdata";
import LineChart from "@/components/charts/Linechart";
import RevenueData from "@/components/charts/RevenueData";

const Dashboard: React.FC = () => {
  const [data, setOverviewRevenue] = useState<any>({});

  useEffect(() => {
    const dashboard = async () => {
      const response2: any = await Fetch(
        "/admin/dashboard/overview-revenue",
        {},
        5000,
        true,
        false
      );
      if (response2.success) setOverviewRevenue(response2.data);
    };
    dashboard();
  }, []);

  return (
    <AuthGuard>
      <Wrapper>
        {data && data?.totalRevenue && <RevenueData data={data} />}
        <div className="grid w-full">
          <LineChart />
        </div>
        <UserData />
      </Wrapper>
    </AuthGuard>
  );
};

export default Dashboard;
