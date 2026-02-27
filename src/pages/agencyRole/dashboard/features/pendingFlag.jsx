import PropTypes from "prop-types";
import {
  RecruiterVacancyLocationIcon,
  RecruiterVacancyRoleIcon,
} from "../../../../assets/icons";

const defaultJobs = [
  {
    title: "Senior Full Stack Developer",
    level: "Mid Level",
    location: "Amsterdam",
    salary: "$1200",
  },
  {
    title: "Data Scientist",
    level: "Entry Level",
    location: "Amsterdam",
    salary: "$1200",
  },
  {
    title: "Product Manager",
    level: "Expert Level",
    location: "Amsterdam",
    salary: "$1200",
  },
];

const PendingFlag = ({
  title = "Open Vacancies",
  subtitle = "47 active positions",
  viewAllText = "View All ->",
  jobs = defaultJobs,
  className = "",
}) => {
  return (
    <section
      className={`w-full rounded-xl border border-gray-200/60 bg-white px-5 py-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900">{title}</h3>
          <p className="text-xs font-normal leading-4 text-gray-500">{subtitle}</p>
        </div>
        <button
          type="button"
          className="text-xs font-semibold leading-4 text-indigo-600"
        >
          {viewAllText}
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {jobs.map((job, index) => (
          <article
            key={`${job.title}-${index}`}
            className="rounded-[9.9px] border border-gray-200/60 bg-gray-50/50 px-3 py-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-bold leading-5 text-gray-900">
                  {job.title}
                </h4>

                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs font-normal leading-4 text-gray-600">
                  <span className="inline-flex items-center gap-1.5">
                    <RecruiterVacancyRoleIcon className="h-3 w-3 text-[#99A1AF]" />
                    {job.level}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <RecruiterVacancyLocationIcon className="h-3 w-3 text-[#99A1AF]" />
                    {job.location}
                  </span>
                </div>
              </div>

              <span className="text-base font-semibold leading-6 text-indigo-600">
                {job.salary}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

PendingFlag.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  viewAllText: PropTypes.string,
  className: PropTypes.string,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
    })
  ),
};

export default PendingFlag;
