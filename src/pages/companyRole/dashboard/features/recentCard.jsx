import PropTypes from "prop-types";
import { RoleCalendarIcon } from "../../../../assets/icons";

const defaultRecentHires = [
  {
    name: "Alice Brown",
    role: "Frontend Developer",
    date: "Feb 1, 2025",
    status: "Payment Released",
  },
  {
    name: "Robert Wilson",
    role: "Data Analyst",
    date: "Jan 28, 2025",
    status: "Payment Released",
  },
  {
    name: "Linda Martinez",
    role: "QA Engineer",
    date: "Jan 25, 2025",
    status: "Payment Released",
  },
];

const defaultUpcomingInterviews = [
  { name: "John Doe", role: "Senior Developer", schedule: "Today - 2:00 PM" },
  { name: "Sarah Smith", role: "UI/UX Designer", schedule: "Tomorrow - 10:30 AM" },
  { name: "Mike Johnson", role: "Product Manager", schedule: "Feb 12 - 3:00 PM" },
];

const defaultRecentActivity = [
  { text: "Recruiter Elite Recruiters sent 3 new candidates", time: "2 hours ago" },
  { text: "Meeting confirmed for Python Dev position", time: "4 hours ago" },
  { text: "New bid received for Project Manager job", time: "5 hours ago" },
  { text: "Interview scheduled with Sarah Smith", time: "1 day ago" },
];

const RecentlyCard = ({
  hiresTitle = "Recent Hires",
  interviewsTitle = "Upcoming Interviews",
  activityTitle = "Recent Activity",
  recentHires = defaultRecentHires,
  upcomingInterviews = defaultUpcomingInterviews,
  recentActivity = defaultRecentActivity,
  className = "",
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <article className="rounded-2xl border border-gray-200/60 bg-white px-7 pb-[15px] pt-7">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">{hiresTitle}</h3>
          <div className="mt-4 space-y-3">
            {recentHires.map((hire, index) => (
              <div
                key={`${hire.name}-${index}`}
                className={`space-y-1 pb-[15px] ${
                  index < recentHires.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <h4 className="text-xs font-semibold leading-6 text-gray-900">{hire.name}</h4>
                <p className="text-sm font-normal leading-5 text-gray-500">{hire.role}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-normal leading-4 text-gray-500">{hire.date}</span>
                  <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold leading-3 text-emerald-700">
                    {hire.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-gray-200/60 bg-white px-7 pb-[15px] pt-7">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">{interviewsTitle}</h3>
          <div className="mt-4 space-y-3">
            {upcomingInterviews.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`space-y-1 pb-[15px] ${
                  index < upcomingInterviews.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <h4 className="text-xs font-semibold leading-6 text-gray-900">{item.name}</h4>
                <p className="text-sm font-normal leading-5 text-gray-500">{item.role}</p>
                <div className="flex items-center gap-2">
                  <RoleCalendarIcon className="h-[15px] w-[15px] text-[#6A7282]" />
                  <span className="text-xs font-normal leading-4 text-gray-500">
                    {item.schedule}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-gray-200/60 bg-white px-7 pb-[15px] pt-7">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">{activityTitle}</h3>
          <div className="mt-4 space-y-3">
            {recentActivity.map((item, index) => (
              <div
                key={`activity-${index}`}
                className={`space-y-1 pb-[15px] ${
                  index < recentActivity.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <p className="text-sm font-normal leading-5 text-gray-900">{item.text}</p>
                <p className="text-xs font-normal leading-4 text-gray-500">{item.time}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

RecentlyCard.propTypes = {
  hiresTitle: PropTypes.string,
  interviewsTitle: PropTypes.string,
  activityTitle: PropTypes.string,
  className: PropTypes.string,
  recentHires: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  upcomingInterviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
    })
  ),
  recentActivity: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ),
};

export default RecentlyCard;
