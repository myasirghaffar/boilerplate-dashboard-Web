import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  DashboardCardAlertIcon,
  DashboardCardDealsIcon,
  DashboardCardEscrowIcon,
  DashboardCardRevenueIcon,
  DashboardCardUsersIcon,
} from "../../../../assets/icons";



// Dashboard Cards Container Component
const DashboardCardsContainer = () => {
  const cards = [
    {
      title: "Total Platform Users",
      value: "1,450",
      percentage: "18%",
      trendLabel: "+89 this month",
      icon: DashboardCardUsersIcon,
      iconBgClass: "bg-indigo-500/10",
      iconClass: "text-indigo-500",
    },
    {
      title: "Active Marketplace Deals",
      value: "186",
      percentage: "12%",
      trendLabel: "+24 this week",
      icon: DashboardCardDealsIcon,
      iconBgClass: "bg-pink-500/10",
      iconClass: "text-pink-500",
    },
    {
      title: "Platform Revenue",
      value: "€142K",
      percentage: "15%",
      trendLabel: "+€18K",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
    },
    {
      title: "Total Escrow Funds",
      value: "€640K",
      percentage: "22%",
      trendLabel: "€85K pending",
      icon: DashboardCardEscrowIcon,
      iconBgClass: "bg-amber-500/10",
      iconClass: "text-amber-500",
    },
    {
      title: "Pending Verifications",
      value: "28",
      percentage: "0%",
      trendLabel: "Urgent",
      icon: DashboardCardAlertIcon,
      iconBgClass: "bg-red-500/10",
      iconClass: "text-red-500",
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
