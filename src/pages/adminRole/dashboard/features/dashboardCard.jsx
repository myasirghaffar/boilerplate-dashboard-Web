import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  AlertCircle,
  BadgeDollarSign,
  Handshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

// Dashboard Cards Container Component
const DashboardCardsContainer = () => {
  const cards = [
    {
      title: "Total Platform Users",
      value: "1,450",
      percentage: "18%",
      trendLabel: "+89 this month",
      icon: Users,
      iconBgClass: "bg-blue-50",
      iconClass: "text-blue-600",
    },
    {
      title: "Active Marketplace Deals",
      value: "186",
      percentage: "12%",
      trendLabel: "+24 this week",
      icon: Handshake,
      iconBgClass: "bg-pink-50",
      iconClass: "text-pink-600",
    },
    {
      title: "Platform Revenue",
      value: "EUR142K",
      percentage: "15%",
      trendLabel: "+EUR18K",
      icon: BadgeDollarSign,
      iconBgClass: "bg-emerald-50",
      iconClass: "text-emerald-600",
    },
    {
      title: "Total Escrow Funds",
      value: "EUR640K",
      percentage: "22%",
      trendLabel: "EUR85K pending",
      icon: Landmark,
      iconBgClass: "bg-amber-50",
      iconClass: "text-amber-600",
    },
    {
      title: "Pending Verifications",
      value: "28",
      percentage: "0%",
      trendLabel: "Urgent",
      icon: AlertCircle,
      iconBgClass: "bg-red-50",
      iconClass: "text-red-600",
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
