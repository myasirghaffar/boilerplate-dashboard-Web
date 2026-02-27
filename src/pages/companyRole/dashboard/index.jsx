import React, { useState } from "react";
import DashboardCardsContainer from "./features/companyCards";
import BarGraph from "../../../components/BarGraph";
import ProgressBarChart from "../../../components/nomadReusable/ProgressBarChart";
import LineChartShadow from "../../../components/nomadReusable/LineChartShadow";
import SectionHeader from "../../../components/nomadReusable/SectionHeader";
import PendingFlag from "./features/pendingFlag";
import TopAgencies from "./features/topAgencies";
import RecentlyCard from "./features/recentCard";

const CompanyDashboard = () => {

  const transactionVolumeData = [
    { name: "Jan", value: 240 },
    { name: "Feb", value: 310 },
    { name: "Mar", value: 380 },
    { name: "Apr", value: 430 },
    { name: "May", value: 490 },
    { name: "Jun", value: 560 },
  ];

  const hiringProgressData = [
    { month: "Jan", value: 38000 },
    { month: "Feb", value: 42000 },
    { month: "Mar", value: 41000 },
    { month: "Apr", value: 47000 },
    { month: "May", value: 45000 },
    { month: "Jun", value: 67000 },
  ];

  const metrics = [
    { label: "Response Time", percentage: 85, colorClass: "bg-[#6366F1]" },
    { label: "Candidate Quality", percentage: 92, colorClass: "bg-[#10B981]" },
    { label: "Hiring Speed", percentage: 78, colorClass: "bg-[#F59E0B]" },
    { label: "Communication", percentage: 88, colorClass: "bg-[#EC4899]" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="space-y-6 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-6">
          
            <div className="rounded-[1.5rem]">
              <DashboardCardsContainer />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[75%_25%] gap-4 lg:gap-3">
              <div className="w-full">
              <LineChartShadow
                title="Hiring Progress"
                subtitle="Active hires over months"
                data={hiringProgressData}
                dataKey="value"
                yAxisDomain={[0, 80000]}
                yAxisTicks={[0, 20000, 40000, 60000, 80000]}
                yAxisFormatter={(value) => `${value}`}
                showRangeToggle
                activeRange="6M"
                height={310}
              />
              </div>

              <div className="w-full">
                <ProgressBarChart
                  title="Recruiter Quality"
                  subtitle="Performance metrics overview"
                  metrics={metrics}
                  showOverallScore={true}
                  overallLabel="Overall Score"
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

export default CompanyDashboard;
