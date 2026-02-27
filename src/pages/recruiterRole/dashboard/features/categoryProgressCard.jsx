import PropTypes from "prop-types";

const defaultCategories = [
  { label: "Technology", openCount: 7, total: 18, barColorClass: "bg-indigo-500", totalColorClass: "text-indigo-500" },
  { label: "Finance", openCount: 4, total: 12, barColorClass: "bg-pink-500", totalColorClass: "text-pink-500" },
  { label: "Marketing", openCount: 2, total: 8, barColorClass: "bg-emerald-500", totalColorClass: "text-emerald-500" },
  { label: "Sales", openCount: 1, total: 5, barColorClass: "bg-amber-500", totalColorClass: "text-amber-500" },
  { label: "Operations", openCount: null, total: 4, barColorClass: "bg-violet-500", totalColorClass: "text-violet-500" },
];

const CategoryProgressCard = ({
  title = "By Category",
  subtitle = "Job distribution",
  categories = defaultCategories,
  className = "",
}) => {
  const maxTotal = Math.max(...categories.map((c) => Number(c.total) || 0), 1);

  return (
    <section
      className={`w-full self-stretch rounded-xl border border-gray-200/60 bg-white px-5 py-5 ${className}`}
    >
      <div className="flex flex-col">
        <h3 className="text-base font-semibold leading-5 text-gray-900">{title}</h3>
        <p className="text-xs font-normal leading-3 text-gray-500">{subtitle}</p>
      </div>

      <div className="mt-3.5 flex flex-col gap-2.5">
        {categories.map((cat, index) => {
          const total = Number(cat.total) || 0;
          const percent = maxTotal > 0 ? Math.min(100, (total / maxTotal) * 100) : 0;
          return (
            <div key={`${cat.label}-${index}`} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold leading-4 text-gray-900">{cat.label}</span>
                <div className="flex items-center gap-1.5">
                  {cat.openCount != null && (
                    <span className="rounded-sm bg-rose-100 px-1.5 py-0.5 text-[7.86px] font-bold leading-3 tracking-tight text-pink-500">
                      {cat.openCount}
                    </span>
                  )}
                  <span className={`text-xs font-bold leading-4 ${cat.totalColorClass || "text-indigo-500"}`}>
                    {cat.total}
                  </span>
                </div>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${cat.barColorClass || "bg-indigo-500"}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

CategoryProgressCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      openCount: PropTypes.number,
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      barColorClass: PropTypes.string,
      totalColorClass: PropTypes.string,
    })
  ),
};

export default CategoryProgressCard;
