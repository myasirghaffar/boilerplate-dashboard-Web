import PropTypes from "prop-types";
import {
  CandidateDownloadIcon,
  CandidateViewIcon,
} from "../../../../assets/icons";

const defaultCandidates = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Senior Developer",
    expectedSalary: "$50k",
  },
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Senior Developer",
    expectedSalary: "$50k",
  },
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Senior Developer",
    expectedSalary: "$50k",
  },
];

const TopAgencies = ({
  title = "My Candidates",
  subtitle = "Best matches",
  viewAllText = "View All ->",
  viewDetailsText = "View Details",
  candidates = defaultCandidates,
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
        <button type="button" className="text-xs font-semibold leading-4 text-indigo-600">
          {viewAllText}
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {candidates.map((candidate, index) => (
          <article
            key={`${candidate.name}-${index}`}
            className="rounded-[9.9px] border border-gray-200/60 bg-gray-50/50 px-3 py-3"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[9.9px] bg-gradient-to-br from-indigo-500 to-purple-600">
                <span className="text-xs font-bold leading-4 text-white">
                  {candidate.initials}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="flex-1 truncate text-sm font-bold leading-5 text-gray-900">
                    {candidate.name}
                  </h4>

                  <button
                    type="button"
                    className="flex h-6 w-8 items-center justify-center rounded-lg border border-[#2A4870] text-[#2A4870]"
                    aria-label={`Download ${candidate.name}`}
                  >
                    <CandidateDownloadIcon className="h-[13px] w-[13px]" />
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-6 items-center gap-1.5 rounded-lg bg-cyan-900 px-2 text-white"
                  >
                    <CandidateViewIcon className="h-[13px] w-[13px]" />
                    <span className="text-[9.36px] font-normal leading-3">
                      {viewDetailsText}
                    </span>
                  </button>
                </div>

                <p className="mt-1 text-xs font-normal leading-4 text-gray-600">
                  {candidate.role}
                </p>
                <span className="mt-1 inline-flex rounded-sm bg-indigo-50 px-2 py-0.5 text-[9.9px] font-semibold leading-4 tracking-tight text-indigo-700">
                  Expected Salary: {candidate.expectedSalary}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

TopAgencies.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  viewAllText: PropTypes.string,
  viewDetailsText: PropTypes.string,
  className: PropTypes.string,
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      initials: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      expectedSalary: PropTypes.string.isRequired,
    })
  ),
};

export default TopAgencies;
