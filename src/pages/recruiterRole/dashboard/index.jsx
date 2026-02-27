import React from "react";
import DashboardCardsContainer from "./features/recruiterCards";
import ProgressBarChart from "../../../components/nomadReusable/ProgressBarChart";
import LineChartShadow from "../../../components/nomadReusable/LineChartShadow";
import PendingFlag from "./features/pendingFlag";
import TopAgencies from "./features/topAgencies";
import CategoryProgressCard from "./features/categoryProgressCard";
import TopCountries from "./features/topCountries";
import RecentlyCard from "./features/recentCard";
import NLFlag from "../../../assets/images/nl.png";
import DEFlag from "../../../assets/images/de.png";
import GBFlag from "../../../assets/images/gb.png";
import FRFlag from "../../../assets/images/fr.png";
import BEFlag from "../../../assets/images/be.png";

const RecruiterDashboard = () => {

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

  const pendingFlagData = {
    title: "Open Vacancies",
    subtitle: "47 active positions",
    viewAllText: "View All ->",
    jobs: [
      { title: "Senior Full Stack Developer", level: "Mid Level", location: "Amsterdam", salary: "$1200" },
      { title: "Data Scientist", level: "Entry Level", location: "Amsterdam", salary: "$1200" },
      { title: "Product Manager", level: "Expert Level", location: "Amsterdam", salary: "$1200" },
    ],
  };

  const topAgenciesData = {
    title: "My Candidates",
    subtitle: "Best matches",
    viewAllText: "View All ->",
    viewDetailsText: "View Details",
    candidates: [
      { initials: "SJ", name: "Sarah Johnson", role: "Senior Developer", expectedSalary: "$50k" },
      { initials: "SJ", name: "Sarah Johnson", role: "Senior Developer", expectedSalary: "$50k" },
      { initials: "SJ", name: "Sarah Johnson", role: "Senior Developer", expectedSalary: "$50k" },
    ],
  };

  const recentlyCardData = {
    placementsTitle: "Recent Placements",
    placementsSubtitle: "Latest successes",
    interviewsTitle: "Upcoming Interviews",
    interviewsSubtitle: "This week",
    activityTitle: "Activity",
    viewAllText: "View All",
    placements: [
      { name: "Alex Thompson", role: "Senior Developer", status: "Completed", company: "TechCorp", salary: "€85K", timeAgo: "2h ago" },
      { name: "Maria Garcia", role: "Data Scientist", status: "Completed", company: "AI Labs", salary: "€92K", timeAgo: "5h ago" },
      { name: "James Brown", role: "Product Manager", status: "Completed", company: "StartupX", salary: "€78K", timeAgo: "1d ago" },
    ],
    interviews: [
      { initials: "SJ", avatarColorClass: "bg-indigo-500", name: "Sarah Johnson", date: "Fri, Nov 21", timeRange: "02:00:00 - 03:00:00", status: "Scheduled" },
      { initials: "MC", avatarColorClass: "bg-pink-500", name: "Michael Chen", date: "Fri, Nov 21", timeRange: "02:00:00 - 03:00:00", status: "Scheduled" },
      { initials: "EW", avatarColorClass: "bg-emerald-500", name: "Emma Wilson", date: "Fri, Nov 21", timeRange: "02:00:00 - 03:00:00", status: "Scheduled" },
      { initials: "JB", avatarColorClass: "bg-amber-500", name: "James Brown", date: "Fri, Nov 21", timeRange: "02:00:00 - 03:00:00", status: "Scheduled" },
    ],
    activities: [
      { text: "New placement: Alex Thompson at TechCorp", timeAgo: "5 min ago" },
      { text: "Interview scheduled with Maria Garcia", timeAgo: "23 min ago" },
      { text: "Offer accepted by James Brown", timeAgo: "1 hour ago" },
      { text: "12 new applications received", timeAgo: "2 hours ago" },
    ],
  };

  const categoryProgressData = {
    title: "By Category",
    subtitle: "Job distribution",
    categories: [
      { label: "Technology", openCount: 7, total: 18, barColorClass: "bg-indigo-500", totalColorClass: "text-indigo-500" },
      { label: "Finance", openCount: 4, total: 12, barColorClass: "bg-pink-500", totalColorClass: "text-pink-500" },
      { label: "Marketing", openCount: 2, total: 8, barColorClass: "bg-emerald-500", totalColorClass: "text-emerald-500" },
      { label: "Sales", openCount: 1, total: 5, barColorClass: "bg-amber-500", totalColorClass: "text-amber-500" },
      { label: "Operations", openCount: null, total: 4, barColorClass: "bg-violet-500", totalColorClass: "text-violet-500" },
    ],
  };

  const topCountriesData = {
    title: "Top Countries",
    subtitle: "By performance",
    countries: [
      { flag: NLFlag, name: "Netherlands", openLabel: "28 open", trend: "+18%", barColorClass: "bg-indigo-400", barPercent: 100 },
      { flag: DEFlag, name: "Germany", openLabel: "12 open", trend: "+12%", barColorClass: "bg-pink-500", barPercent: 72 },
      { flag: GBFlag, name: "United Kingdom", openLabel: "5 open", trend: "+8%", barColorClass: "bg-emerald-500", barPercent: 64 },
      { flag: FRFlag, name: "France", openLabel: "2 open", trend: "+15%", barColorClass: "bg-amber-500", barPercent: 56 },
      { flag: BEFlag, name: "Belgium", openLabel: "0 open", trend: "+6%", barColorClass: "bg-violet-500", barPercent: 48 },
    ],
  };

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
                title="Revenue Overview"
                subtitle="Monthly performance tracking"
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
                  title="Performance"
                  subtitle="Key metrics overview"
                  metrics={metrics}
                  showOverallScore={true}
                  overallLabel="Overall Score"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 lg:gap-3">
              <PendingFlag
                title={pendingFlagData.title}
                subtitle={pendingFlagData.subtitle}
                viewAllText={pendingFlagData.viewAllText}
                jobs={pendingFlagData.jobs}
              />
              <TopAgencies
                title={topAgenciesData.title}
                subtitle={topAgenciesData.subtitle}
                viewAllText={topAgenciesData.viewAllText}
                viewDetailsText={topAgenciesData.viewDetailsText}
                candidates={topAgenciesData.candidates}
              />
            </div>

          

            <div className="grid grid-cols-1 gap-4 lg:gap-3">
              <RecentlyCard
                placementsTitle={recentlyCardData.placementsTitle}
                placementsSubtitle={recentlyCardData.placementsSubtitle}
                interviewsTitle={recentlyCardData.interviewsTitle}
                interviewsSubtitle={recentlyCardData.interviewsSubtitle}
                activityTitle={recentlyCardData.activityTitle}
                viewAllText={recentlyCardData.viewAllText}
                placements={recentlyCardData.placements}
                interviews={recentlyCardData.interviews}
                activities={recentlyCardData.activities}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 lg:gap-3">
              <CategoryProgressCard
                title={categoryProgressData.title}
                subtitle={categoryProgressData.subtitle}
                categories={categoryProgressData.categories}
              />
              <TopCountries
                title={topCountriesData.title}
                subtitle={topCountriesData.subtitle}
                countries={topCountriesData.countries}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
