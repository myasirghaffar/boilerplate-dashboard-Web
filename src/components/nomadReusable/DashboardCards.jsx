import PropTypes from "prop-types";
import {
  DashboardCardAlertIcon,
  DashboardCardDealsIcon,
  DashboardCardEscrowIcon,
  DashboardCardRevenueIcon,
  DashboardCardUsersIcon,
} from "../../assets/icons";

const defaultCards = [
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
    value: "EUR142K",
    percentage: "15%",
    trendLabel: "+EUR18K",
    icon: DashboardCardRevenueIcon,
    iconBgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-500",
  },
  {
    title: "Total Escrow Funds",
    value: "EUR640K",
    percentage: "22%",
    trendLabel: "EUR85K pending",
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

const DashboardCardItem = ({
  title,
  value,
  percentage,
  trendLabel,
  icon: Icon,
  iconBgClass,
  iconClass,
  className,
  valueClassName,
}) => {
  return (
    <article
      className={`h-40 rounded-2xl border border-gray-200/60 bg-white p-[17px] ${className}`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${iconBgClass}`}
          >
            {Icon ? (
              <Icon className={`h-5 w-5 ${iconClass}`} />
            ) : (
              <DashboardCardUsersIcon className="h-5 w-5 text-indigo-500" />
            )}
          </div>
          <span className="rounded-sm bg-emerald-50 px-2 pt-1 text-[10px] font-bold leading-4 tracking-tight text-[#009966]">
            {percentage}
          </span>
        </div>

        <div className={`mt-4 text-2xl font-bold leading-8 text-[#101828] ${valueClassName}`}>
          {value}
        </div>

        <div className="mt-2 space-y-1">
          <p className="text-xs font-medium leading-4 text-[#4A5565]">{title}</p>
          <p className="text-[10px] font-normal leading-4 tracking-tight text-[#6A7282]">
            {trendLabel}
          </p>
        </div>
      </div>
    </article>
  );
};

const DashboardCards = ({
  cards,
  title,
  value,
  percentage = "12%",
  trendLabel = "",
  icon,
  iconBgClass = "bg-slate-100",
  iconClass = "text-slate-700",
  className = "",
  valueClassName = "",
}) => {
  const hasSingleCardInput = Boolean(title || value);

  const resolvedCards =
    Array.isArray(cards) && cards.length
      ? cards
      : hasSingleCardInput
        ? [
          {
            title,
            value,
            percentage,
            trendLabel,
            icon,
            iconBgClass,
            iconClass,
            className,
            valueClassName,
          },
        ]
        : defaultCards;

  const hasSingleCardMode = resolvedCards.length === 1;

  if (hasSingleCardMode) {
    return <DashboardCardItem {...resolvedCards[0]} />;
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resolvedCards.map((card, index) => (
          <DashboardCardItem key={`${card.title || "card"}-${index}`} {...card} />
        ))}
      </div>
    </section>
  );
};

DashboardCardItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.string,
  trendLabel: PropTypes.string,
  icon: PropTypes.elementType,
  iconBgClass: PropTypes.string,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  valueClassName: PropTypes.string,
};

DashboardCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(DashboardCardItem.propTypes)),
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.string,
  trendLabel: PropTypes.string,
  icon: PropTypes.elementType,
  iconBgClass: PropTypes.string,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  valueClassName: PropTypes.string,
};

export default DashboardCards;
