import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  ContactClockIcon,
  DashboardCardUsersIcon,
  DashboardCardRevenueIcon,
  RecentPayoutsIcon,
  RoleBriefcaseIcon,
} from "../../../../assets/icons";



// Dashboard Cards Container Component
const DashboardCardsContainer = () => {
  const cards = [
    {
      title: "Active Vacancies",
      value: "12",
      percentage: "12%",
      trendLabel: "+3",
      icon: RoleBriefcaseIcon,
      iconBgClass: "bg-indigo-500/10",
      iconClass: "text-indigo-500",
    },
    {
      title: "Total Applicants",
      value: "85",
      percentage: "14%",
      trendLabel: "+12",
      icon: DashboardCardUsersIcon,
      iconBgClass: "bg-pink-500/10",
      iconClass: "text-pink-500",
    },
    {
      title: "Hires This Month",
      value: "4",
      percentage: "23%",
      trendLabel: "+2",
      icon: RecentPayoutsIcon,
      iconBgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
    },
    {
      title: "Hiring Budget",
      value: "€85K",
      percentage: "15%",
      trendLabel: "+€12K",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-amber-500/10",
      iconClass: "text-amber-500",
    },
    {
      title: "Pending Fees",
      value: "€12K",
      percentage: "18%",
      trendLabel: "+€3K",
      icon: ContactClockIcon,
      iconBgClass: "bg-violet-500/10",
      iconClass: "text-violet-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
      {cards.map((card, index) => (
        <DashboardCards
        key={index}
        title={card.title}
        value={card.value}
        percentage={card.percentage}
        variant={card.variant}
        icon={card.icon}
        iconBgClass={card.iconBgClass}
        iconClass={card.iconClass}
        trendLabel={card.trendLabel}
        />
      ))}
    </div>
  );
};

export default DashboardCardsContainer;
