import React, { useState } from "react";
import DashboardCardsContainer from "./features/dashboardCard";
import BarGraph from "../../../components/BarGraph";
import LineChart from "../../../components/nomadReusable/LineChart";
import SectionHeader from "../../../components/nomadReusable/SectionHeader";
import PendingFlag from "./features/pendingFlag";
import TopAgencies from "./features/topAgencies";
import RecentlyCard from "./features/recentCard";

const AdminDashboard = () => {

  const transactionVolumeData = [
    { name: "Jan", value: 240 },
    { name: "Feb", value: 310 },
    { name: "Mar", value: 380 },
    { name: "Apr", value: 430 },
    { name: "May", value: 490 },
    { name: "Jun", value: 560 },
  ];

  const platformGrowthData = [
    { month: "Jan", companies: 45, recruiters: 52 },
    { month: "Feb", companies: 58, recruiters: 68 },
    { month: "Mar", companies: 72, recruiters: 84 },
    { month: "Apr", companies: 88, recruiters: 101 },
    { month: "May", companies: 105, recruiters: 123 },
    { month: "Jun", companies: 127, recruiters: 146 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="space-y-6 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-6">
          
            <div className="rounded-[1.5rem]">
              <DashboardCardsContainer />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 lg:gap-3">
              <div className="w-full">
              <LineChart
                title="Platform Growth"
                subtitle="New Companies vs New Recruiters"
                data={platformGrowthData}
                dataKeys={["companies", "recruiters"]}
                dataLabels={["Companies", "Recruiters"]}
                colors={["#6366F1", "#F59E0B"]}
                yAxisDomain={[0, 160]}
                yAxisTicks={[0, 40, 80, 120, 160]}
                yAxisFormatter={(value) => `${value}`}
                showDropdowns={false}
                currency=""
              />
              </div>

              <div className="w-full">
                <BarGraph
                  title="Transaction Volume"
                  subtitle="Monthly Gross Merchandise Value (GMV)"
                  data={transactionVolumeData}
                  dataKeys={["value"]}
                  dataLabels={["GMV"]}
                  colors={["#6366F1", "#10B981", "#EC4899", "#F59E0B", "#6366F1", "#EC4899"]}
                  yAxisDomain={[0, 600]}
                  yAxisTicks={[0, 150, 300, 450, 600]}
                  yAxisFormatter={(value) => `${value}`}
                  height={327}
                  showDropdowns={false}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 lg:gap-3">
              <PendingFlag />
              <TopAgencies />
              </div>

              <div className="grid grid-cols-1 gap-4 lg:gap-3">
              <RecentlyCard />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
