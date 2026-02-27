import PropTypes from "prop-types";
import {
  GlobalActivityIcon,
  HeaderNotificationBellIcon,
  RecentPayoutsIcon,
} from "../../../../assets/icons";

const defaultPayouts = [
  { name: "Elite Recruitment", amount: "EUR8,500", status: "Successful", date: "2026-02-09" },
  { name: "Digital Talents", amount: "EUR6,200", status: "Successful", date: "2026-02-08" },
  { name: "Ace Hiring", amount: "EUR5,800", status: "Successful", date: "2026-02-07" },
];

const defaultAlerts = [
  {
    text: "New dispute raised: TechCorp NL vs Elite Recruitment",
    time: "1 hour ago",
    dotColor: "bg-amber-500",
    textColor: "text-amber-500",
  },
  {
    text: "System Update: Stripe API v3 integrated",
    time: "3 hours ago",
    dotColor: "bg-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    text: "Server Load: 12% - All systems operational",
    time: "5 hours ago",
    dotColor: "bg-indigo-500",
    textColor: "text-indigo-500",
  },
];

const defaultActivities = [
  { text: "Company TechCorp NL just posted a EUR15k Job", time: "10 mins ago" },
  { text: "Recruiter Sarah Johnson just joined the platform", time: "25 mins ago" },
  { text: "Meeting confirmed for 12 different roles today", time: "45 mins ago" },
];

const RecentCard = ({
  payouts = defaultPayouts,
  alerts = defaultAlerts,
  activities = defaultActivities,
}) => {
  const resolvedPayouts = payouts?.length ? payouts : defaultPayouts;
  const resolvedAlerts = alerts?.length ? alerts : defaultAlerts;
  const resolvedActivities = activities?.length ? activities : defaultActivities;

  return (
    <section className="grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
      <article className="h-80 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-4 inline-flex items-center gap-2">
          <RecentPayoutsIcon className="h-5 w-5 text-emerald-500" />
          <h3 className="text-base font-bold leading-6 text-gray-900">Recent Payouts</h3>
        </div>
        <div className="space-y-3">
          {resolvedPayouts.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="space-y-1 border-b border-slate-100 pb-[10.3px] last:border-none"
            >
              <p className="text-sm font-semibold leading-5 text-gray-900">{item.name}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-normal leading-4 text-gray-500">{item.amount}</p>
                <span className="rounded-sm bg-emerald-50 px-2 text-[10px] font-semibold leading-5 text-emerald-500">
                  {item.status}
                </span>
              </div>
              <p className="text-[10px] font-normal leading-4 text-slate-400">{item.date}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="h-80 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-4 inline-flex items-center gap-2">
          <HeaderNotificationBellIcon className="h-5 w-5 text-indigo-500" />
          <h3 className="text-base font-bold leading-6 text-gray-900">Platform Alerts</h3>
        </div>
        <div className="space-y-3">
          {resolvedAlerts.map((item, index) => (
            <div
              key={`${item.text}-${index}`}
              className="space-y-1 border-b border-slate-100 pb-[10.3px] last:border-none"
            >
              <div className="flex items-start gap-2">
                <span className={`mt-1.5 h-2 w-2 rounded-full ${item.dotColor}`} />
                <p className={`text-xs font-normal leading-4 ${item.textColor}`}>{item.text}</p>
              </div>
              <p className="pl-4 text-[10px] font-normal leading-4 text-slate-400">{item.time}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="h-80 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-4 inline-flex items-center gap-2">
          <GlobalActivityIcon className="h-5 w-5 text-pink-500" />
          <h3 className="text-base font-bold leading-6 text-gray-900">Global Activity</h3>
        </div>
        <div className="space-y-3">
          {resolvedActivities.map((item, index) => (
            <div
              key={`${item.text}-${index}`}
              className="space-y-1 border-b border-slate-100 pb-[10.3px] last:border-none"
            >
              <p className="text-xs font-normal leading-4 text-gray-600">{item.text}</p>
              <p className="text-[10px] font-normal leading-4 text-slate-400">{item.time}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

RecentCard.propTypes = {
  payouts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.string,
      status: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      time: PropTypes.string,
      dotColor: PropTypes.string,
      textColor: PropTypes.string,
    })
  ),
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      time: PropTypes.string,
    })
  ),
};

export default RecentCard;
