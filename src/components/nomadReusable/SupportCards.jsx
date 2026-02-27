import PropTypes from "prop-types";

const SupportCardItem = ({
  status,
  value,
  icon: Icon,
  iconColor = "text-blue-500",
  iconBgColor = "bg-blue-100",
  className = "",
}) => {
  return (
    <article
      className={`w-full rounded-2xl border border-gray-200 bg-white p-4 ${className}`}
    >
      <div className="flex min-h-14 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-normal leading-5 text-gray-500">{status}</p>
          <p className="mt-1 text-2xl font-bold leading-8 text-slate-900">{value}</p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBgColor}`}
        >
          {Icon ? <Icon className={`h-6 w-6 ${iconColor}`} /> : null}
        </div>
      </div>
    </article>
  );
};

const SupportCards = ({
  cards,
  status,
  value,
  icon,
  iconColor = "text-blue-500",
  iconBgColor = "bg-blue-100",
  className = "",
}) => {
  const hasSingleCardInput = Boolean(status || value);

  const resolvedCards =
    Array.isArray(cards) && cards.length
      ? cards
      : hasSingleCardInput
      ? [{ status, value, icon, iconColor, iconBgColor, className }]
      : [];

  if (!resolvedCards.length) return null;

  if (resolvedCards.length === 1) {
    return <SupportCardItem {...resolvedCards[0]} />;
  }

  return (
  <>
        {resolvedCards.map((card, index) => (
          <SupportCardItem key={`${card.status || "support-card"}-${index}`} {...card} />
        ))}
 </>
  );
};

SupportCardItem.propTypes = {
  status: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
  iconBgColor: PropTypes.string,
  className: PropTypes.string,
};

SupportCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(SupportCardItem.propTypes)),
  status: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
  iconBgColor: PropTypes.string,
  className: PropTypes.string,
};

export default SupportCards;
