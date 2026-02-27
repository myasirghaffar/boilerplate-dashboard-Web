import PropTypes from "prop-types";
import {
  RecruiterActivityPulseIcon,
  RecruiterChevronRightIcon,
  RecruiterInterviewTimeIcon,
} from "../../../../assets/icons";

const defaultPlacements = [
  {
    name: "Alex Thompson",
    role: "Senior Developer",
    status: "Completed",
    company: "TechCorp",
    salary: "€85K",
    timeAgo: "2h ago",
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    status: "Completed",
    company: "AI Labs",
    salary: "€92K",
    timeAgo: "5h ago",
  },
  {
    name: "James Brown",
    role: "Product Manager",
    status: "Completed",
    company: "StartupX",
    salary: "€78K",
    timeAgo: "1d ago",
  },
];

const defaultInterviews = [
  {
    initials: "SJ",
    avatarColorClass: "bg-indigo-500",
    name: "Sarah Johnson",
    date: "Fri, Nov 21",
    timeRange: "02:00:00 - 03:00:00",
    status: "Scheduled",
  },
  {
    initials: "MC",
    avatarColorClass: "bg-pink-500",
    name: "Michael Chen",
    date: "Fri, Nov 21",
    timeRange: "02:00:00 - 03:00:00",
    status: "Scheduled",
  },
  {
    initials: "EW",
    avatarColorClass: "bg-emerald-500",
    name: "Emma Wilson",
    date: "Fri, Nov 21",
    timeRange: "02:00:00 - 03:00:00",
    status: "Scheduled",
  },
  {
    initials: "JB",
    avatarColorClass: "bg-amber-500",
    name: "James Brown",
    date: "Fri, Nov 21",
    timeRange: "02:00:00 - 03:00:00",
    status: "Scheduled",
  },
];

const defaultActivities = [
  { text: "New placement: Alex Thompson at TechCorp", timeAgo: "5 min ago" },
  { text: "Interview scheduled with Maria Garcia", timeAgo: "23 min ago" },
  { text: "Offer accepted by James Brown", timeAgo: "1 hour ago" },
  { text: "12 new applications received", timeAgo: "2 hours ago" },
];

const RecentlyCard = ({
  placementsTitle = "Recent Placements",
  placementsSubtitle = "Latest successes",
  interviewsTitle = "Upcoming Interviews",
  interviewsSubtitle = "This week",
  activityTitle = "Activity",
  viewAllText = "View All",
  placements = defaultPlacements,
  interviews = defaultInterviews,
  activities = defaultActivities,
  className = "",
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
        <article className="rounded-xl border border-gray-200 bg-white px-6 pb-1 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {placementsTitle}
              </h3>
              <p className="text-xs font-normal leading-5 text-gray-500">
                {placementsSubtitle}
              </p>
            </div>
            <button type="button" className="inline-flex items-center gap-1 text-cyan-900">
              <span className="text-xs font-semibold leading-5">{viewAllText}</span>
              <RecruiterChevronRightIcon className="h-[15px] w-[15px]" />
            </button>
          </div>

          <div className="mt-6 space-y-3.5">
            {placements.map((placement, index) => (
              <div
                key={`${placement.name}-${index}`}
                className="rounded-lg border border-gray-200/60 bg-gray-50/50 px-3 py-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-semibold leading-6 text-gray-900">
                      {placement.name}
                    </h4>
                    <p className="text-xs font-normal leading-5 text-gray-600">
                      {placement.role}
                    </p>
                  </div>
                  <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-1.5 py-1 text-[9.27px] font-semibold leading-3 text-emerald-700">
                    {placement.status}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-[9.27px] font-normal leading-5 text-gray-500">
                    {placement.company}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs leading-5">
                    <span className="font-semibold text-gray-900">{placement.salary}</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-normal text-gray-500">{placement.timeAgo}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-gray-200 bg-white px-5 py-5">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              {interviewsTitle}
            </h3>
            <p className="text-xs font-normal leading-4 text-gray-500">{interviewsSubtitle}</p>
          </div>

          <div className="mt-3.5 space-y-2.5">
            {interviews.map((interview, index) => (
              <div
                key={`${interview.name}-${index}`}
                className="rounded-lg border border-gray-200/60 bg-gray-50/50 px-3 py-3"
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-[10px] text-[9.27px] font-bold leading-3 tracking-tight text-white ${
                      interview.avatarColorClass || "bg-indigo-500"
                    }`}
                  >
                    {interview.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold leading-4 text-gray-900">
                      {interview.name}
                    </h4>
                    <p className="text-[10px] font-normal leading-3 tracking-tight text-gray-600">
                      {interview.date}
                    </p>
                    <div className="mt-0.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-normal leading-3 tracking-tight text-gray-500">
                        <RecruiterInterviewTimeIcon className="h-3 w-3 text-[#6A7282]" />
                        {interview.timeRange}
                      </span>
                      <span className="rounded-sm bg-indigo-700/10 px-1 py-1 text-[8.34px] font-semibold leading-3 tracking-tight text-indigo-700">
                        {interview.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-gray-200/80 bg-white px-6 pb-1 pt-6">
          <div className="inline-flex items-center gap-2">
            <RecruiterActivityPulseIcon className="h-[19px] w-[19px] text-[#364153]" />
            <h3 className="text-base font-semibold leading-6 text-gray-900">{activityTitle}</h3>
          </div>

          <div className="mt-6 space-y-3">
            {activities.map((activity, index) => (
              <div
                key={`activity-${index}`}
                className="rounded-lg border border-gray-200/60 bg-gray-50/50 px-3 py-3"
              >
                <p className="text-xs font-normal leading-5 text-gray-900">{activity.text}</p>
                <p className="text-xs font-normal leading-4 text-gray-500">{activity.timeAgo}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

RecentlyCard.propTypes = {
  placementsTitle: PropTypes.string,
  placementsSubtitle: PropTypes.string,
  interviewsTitle: PropTypes.string,
  interviewsSubtitle: PropTypes.string,
  activityTitle: PropTypes.string,
  viewAllText: PropTypes.string,
  className: PropTypes.string,
  placements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      timeAgo: PropTypes.string.isRequired,
    })
  ),
  interviews: PropTypes.arrayOf(
    PropTypes.shape({
      initials: PropTypes.string.isRequired,
      avatarColorClass: PropTypes.string,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      timeRange: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      timeAgo: PropTypes.string.isRequired,
    })
  ),
};

export default RecentlyCard;
