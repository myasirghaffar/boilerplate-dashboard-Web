import PropTypes from "prop-types";
import { OpenExternalIcon } from "../../../../assets/icons";

const defaultJobs = [
  { title: "Senior UI/UX Designer", applicants: 12, status: "urgent" },
  { title: "Full Stack Developer", applicants: 5, status: "open" },
  { title: "Marketing Lead", applicants: 8, status: "open" },
  { title: "Product Manager", applicants: 6, status: "open" },
];

const statusStyles = {
  urgent: "bg-rose-100 text-rose-700 uppercase text-[9px] font-bold tracking-tight px-1.5",
  open: "bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-semibold px-2",
};

const formatStatus = (status = "") =>
  status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

const PendingFlag = ({ title = "My Active Jobs", jobs = defaultJobs, className = "" }) => {
  return (
    <section
      className={`w-full rounded-2xl border border-gray-200/60 bg-white px-6 pb-[1.38px] pt-6 ${className}`}
    >
      <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>

      <div className="mt-4 space-y-3">
        {jobs.map((job, index) => (
          <article
            key={`${job.title}-${index}`}
            className="rounded-2xl border border-gray-200 px-4 py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="truncate text-sm font-bold leading-5 text-gray-900">
                    {job.title}
                  </h4>
                  <span
                    className={`inline-flex h-5 items-center rounded-sm ${
                      statusStyles[job.status] || statusStyles.open
                    }`}
                  >
                    {formatStatus(job.status)}
                  </span>
                </div>
                <p className="text-sm font-normal leading-5 text-gray-500">
                  {job.applicants} Applicants
                </p>
              </div>

              <button
                type="button"
                className="text-[#6A7282] transition-colors hover:text-gray-800"
                aria-label={`Open ${job.title}`}
              >
                <OpenExternalIcon className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

PendingFlag.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      applicants: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      status: PropTypes.string,
    })
  ),
};

export default PendingFlag;
