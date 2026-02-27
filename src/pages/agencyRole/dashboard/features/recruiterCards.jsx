import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  ContactClockIcon,
  DashboardCardUsersIcon,
  DashboardCardRevenueIcon,
  RecentPayoutsIcon,
  RoleBriefcaseIcon,
  RoleCandidatesIcon,
} from "../../../../assets/icons";



// Dashboard Cards Container Component
const RecruiterCardsContainer = () => {
  const cards = [
    {
      title: "Active Vacancies",
      value: "47",
      percentage: "12%",
      trendLabel: "+5",
      icon: RoleBriefcaseIcon,
      iconBgClass: "bg-indigo-500/10",
      iconClass: "text-indigo-500",
    },
    {
      title: "Active Candidates",
      value: "1,247",
      percentage: "14%",
      trendLabel: "+156",
      icon: DashboardCardUsersIcon,
      iconBgClass: "bg-pink-500/10",
      iconClass: "text-pink-500",
    },
    {
      title: "Placements",
      value: "186",
      percentage: "23%",
      trendLabel: "+23",
      icon: RecentPayoutsIcon,
      iconBgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
    },
    {
      title: "Revenue",
      value: "€458K",
      percentage: "15%",
      trendLabel: "+€67K",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-amber-500/10",
      iconClass: "text-amber-500",
    },
    {
      title: "Pending Bids",
      value: "23",
      percentage: "0%",
      trendLabel: "8",
      icon: ContactClockIcon,
      iconBgClass: "bg-violet-500/10",
      iconClass: "text-violet-500",
    },
    {
      title: "Interviews",
      value: "34",
      percentage: "18%",
      trendLabel: "+12",
      icon: RoleCandidatesIcon,
      iconBgClass: "bg-cyan-500/10",
      iconClass: "text-cyan-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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

export default RecruiterCardsContainer;
