import PropTypes from "prop-types";

const defaultCandidates = [
  {
    name: "John Doe",
    match: 98,
    role: "Senior Developer",
    source: "Elite Recruiters Ltd",
  },
  {
    name: "Sarah Smith",
    match: 92,
    role: "UI/UX Designer",
    source: "TechTalent Agency",
  },
  {
    name: "Mike Johnson",
    match: 90,
    role: "Product Manager",
    source: "Global Recruiters",
  },
  {
    name: "Emily Davis",
    match: 88,
    role: "Marketing Lead",
    source: "Prime Talent Co",
  },
];

const normalizeMatch = (value) => {
  const parsed =
    typeof value === "string" ? Number.parseFloat(value.replace("%", "")) : value;
  if (!Number.isFinite(parsed)) return 0;
  return Math.max(0, Math.min(100, parsed));
};

const TopAgencies = ({
  title = "Top Matched Candidates",
  candidates = defaultCandidates,
  className = "",
}) => {
  return (
    <section
      className={`w-full rounded-2xl border border-gray-200/60 bg-white px-6 py-6 ${className}`}
    >
      <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>

      <div className="mt-4 space-y-3">
        {candidates.map((candidate, index) => (
          <article
            key={`${candidate.name}-${index}`}
            className="rounded-2xl border border-gray-200 px-4 py-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="truncate text-sm font-bold leading-5 text-gray-900">
                    {candidate.name}
                  </h4>
                  <span className="text-xs font-bold leading-4 text-indigo-500">
                    {normalizeMatch(candidate.match)}%
                  </span>
                </div>

                <p className="truncate text-xs font-normal leading-4 text-gray-500">
                  {candidate.role}
                </p>
                <p className="truncate text-xs font-normal leading-4 text-blue-500">
                  By {candidate.source}
                </p>
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
  className: PropTypes.string,
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      match: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      role: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    })
  ),
};

export default TopAgencies;
