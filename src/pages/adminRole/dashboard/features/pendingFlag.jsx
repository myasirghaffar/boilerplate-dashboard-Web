import PropTypes from "prop-types";
import { DashboardCardAlertIcon } from "../../../../assets/icons";

const defaultItems = [
  {
    type: "Company",
    urgent: true,
    title: "TechCorp NL",
    description: "Verify Registration Number",
  },
  {
    type: "Agency",
    urgent: false,
    title: "Global Talent Ltd",
    description: "Awaiting Profile Review",
  },
  {
    type: "Flagged User",
    urgent: true,
    title: "User #4523",
    description: "Reported for CV Dumping",
  },
];

const typeStyles = {
  Company: "bg-indigo-50 text-indigo-500",
  Agency: "bg-emerald-50 text-emerald-500",
  "Flagged User": "bg-red-50 text-red-500",
};

const PendingFlag = ({
  title = "Pending Approvals / Flags",
  items = defaultItems,
  onReview,
}) => {
  const resolvedItems = items?.length ? items : defaultItems;

  return (
    <section className=" w-full rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-4 inline-flex items-center gap-2">
        <DashboardCardAlertIcon className="h-5 w-5 text-red-500" />
        <h3 className="text-base font-bold leading-6 text-gray-900">{title}</h3>
      </div>

      <div className="flex h-80 flex-col gap-3">
        {resolvedItems.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="inline-flex h-24 items-start justify-between rounded-[10px] border border-gray-200 bg-gray-50 px-4 pt-4"
          >
            <div className="flex h-16 flex-1 flex-col gap-1">
              <div className="inline-flex h-5 items-center gap-2">
                <span
                  className={`rounded-sm px-2 text-[10px] font-bold leading-5 ${
                    typeStyles[item.type] || "bg-slate-50 text-slate-500"
                  }`}
                >
                  {item.type}
                </span>
                {item.urgent ? (
                  <span className="rounded-sm bg-red-50 px-2 text-[10px] font-bold leading-5 text-red-600">
                    URGENT
                  </span>
                ) : null}
              </div>
              <p className="text-sm font-semibold leading-5 text-gray-900">{item.title}</p>
              <p className="text-xs font-normal leading-4 text-gray-500">{item.description}</p>
            </div>

            <button
              type="button"
              className="h-7 rounded-[10px] bg-indigo-500 px-3 text-xs font-semibold leading-4 text-white"
              onClick={() => onReview?.(item)}
            >
              Review
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

PendingFlag.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      urgent: PropTypes.bool,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  onReview: PropTypes.func,
};

export default PendingFlag;
