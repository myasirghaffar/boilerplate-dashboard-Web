import PropTypes from "prop-types";
import { OverallScoreBoltIcon } from "../../assets/icons";

const defaultMetrics = [
  { label: "Response Time", percentage: 85, colorClass: "bg-[#6366F1]" },
  { label: "Candidate Quality", percentage: 92, colorClass: "bg-emerald-500" },
  { label: "Hiring Speed", percentage: 78, colorClass: "bg-amber-500" },
  { label: "Communication", percentage: 88, colorClass: "bg-pink-500" },
];

const normalizePercentage = (value) => {
  const numeric =
    typeof value === "string" ? Number.parseFloat(value.replace("%", "")) : value;

  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.min(100, numeric));
};

const parsePercentage = (value) => {
  const numeric =
    typeof value === "string" ? Number.parseFloat(value.replace("%", "")) : value;
  return Number.isFinite(numeric) ? numeric : 0;
};

const formatMetricPercentage = (value) => `${normalizePercentage(value)}%`;
const formatTotalPercentage = (value) => `${Math.round(normalizePercentage(value))}%`;

const ProgressBarChart = ({
  title = "Recruiter Quality",
  subtitle = "Performance metrics overview",
  metrics = defaultMetrics,
  overallLabel = "Overall Score",
  overallScore,
  showOverallScore = true,
  className = "",
}) => {
  const computedOverallScore = metrics.length
    ? metrics.reduce(
        (total, metric) => total + normalizePercentage(metric.percentage),
        0
      ) / metrics.length
    : 0;
  const finalOverallScore =
    overallScore !== undefined
      ? normalizePercentage(overallScore)
      : computedOverallScore;

  return (
    <section
      className={`w-full rounded-2xl border border-gray-200 bg-white px-6 py-6 ${className}`}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold leading-6 text-[#101828]">{title}</h3>
        <p className="text-sm font-normal leading-5 text-[#6A7282]">{subtitle}</p>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {metrics.map((metric, index) => {
          const percentage = normalizePercentage(metric.percentage);

          return (
            <div key={`${metric.label}-${index}`} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold leading-5 text-[#364153]">
                  {metric.label}
                </span>
                <span className="text-sm font-bold leading-5 text-[#6366F1]">
                  {formatMetricPercentage(metric.percentage)}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${metric.colorClass || "bg-[#6366F1]"}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {showOverallScore && (
        <div className=" mt-6 border-t-2 border-[#F3F4F6]">
        <div className="mt-6 flex h-12 w-full items-center justify-between rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 px-3">
          <div className="flex items-center gap-2">
            <OverallScoreBoltIcon className="h-5 w-5 text-[#4F39F6]" />
            <span className="text-sm font-semibold leading-5 text-[#364153]">
              {overallLabel}
            </span>
          </div>
          <span className="text-xl font-bold leading-7 text-indigo-600">
            {formatTotalPercentage(finalOverallScore)}
          </span>
        </div>
        </div>
      )}
    </section>
  );
};

ProgressBarChart.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  overallLabel: PropTypes.string,
  overallScore: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showOverallScore: PropTypes.bool,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      colorClass: PropTypes.string,
    })
  ),
};

export default ProgressBarChart;
