import PropTypes from "prop-types";
import {
  AlertCircle,
  BadgeDollarSign,
  Handshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";


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
      className={`h-full min-h-[158px] rounded-[14px] border border-[#E5E7EB99] bg-white p-4 sm:p-[17px] ${className}`}
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${iconBgClass}`}
          >
            {Icon ? (
              <Icon className={`h-5 w-5 ${iconClass}`} />
            ) : (
              <ShieldCheck className="h-5 w-5 text-slate-600" />
            )}
          </div>
          <span className="rounded bg-emerald-50 px-2 py-1 text-[10px] font-bold leading-[15px] tracking-[0.12px] text-[#009966]">
            {percentage}
          </span>
        </div>

        <div className={`text-2xl font-bold leading-8 text-[#101828] ${valueClassName}`}>
          {value}
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium leading-4 text-[#4A5565]">{title}</p>
          <p className="text-[10px] font-normal leading-[15px] tracking-[0.12px] text-[#6A7282]">
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
      : [];

  const hasSingleCardMode = resolvedCards.length === 1;

  if (hasSingleCardMode) {
    return <DashboardCardItem {...resolvedCards[0]} />;
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
