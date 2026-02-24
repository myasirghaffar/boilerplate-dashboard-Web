import { Link } from "react-router-dom";
import {
  ListCheckBadgeIcon,
  RecruiterEarningsTrendIcon,
} from "../../../../assets/icons";

const recruiterBenefits = [
  "Browse open roles from companies actively hiring",
  "Submit qualified candidates with your proposed fee-no percentage caps",
  "Negotiate terms directly with companies on a level playing field",
  "Build your reputation with verified placements and ratings",
  "Access a steady stream of quality opportunities across industries",
  "Work independently or as an agency with full control over your business",
];

const ForRecruiters = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50/50 py-20 lg:py-24">
      <div className="pointer-events-none absolute left-16 top-16 h-56 w-56 rotate-12 rounded-3xl bg-gradient-to-br from-cyan-900/10 to-transparent" />
      <div className="pointer-events-none absolute right-12 top-[70%] h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <div className="space-y-5">
          {recruiterBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white px-5 py-5"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-l from-slate-900 to-blue-900 text-white">
                <ListCheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-base leading-6 text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="inline-flex rounded-full bg-cyan-900/10 px-6 py-2.5">
            <span className="text-sm font-medium text-slate-900">For Recruiters</span>
          </div>

          <h2 className="mt-6 max-w-[560px] text-4xl font-semibold leading-tight text-slate-900 md:text-5xl md:leading-[1.2]">
            For Recruiters &amp; Agencies
          </h2>

          <div className="mt-8 h-2 w-24 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900" />

          <p className="mt-8 max-w-[560px] text-xl leading-8 text-gray-700">
            Set your own fees, negotiate directly with companies, and get paid
            securely for every successful placement. Build your business on your
            terms with transparent, fair compensation.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-cyan-900/5 via-blue-50/30 to-transparent p-8 shadow-2xl shadow-slate-900/5">
            <div className="flex items-center gap-3">
              <RecruiterEarningsTrendIcon className="h-6 w-6 text-[#05DF72]" />
              <p className="text-sm font-medium uppercase tracking-tight text-slate-900/80">
                Average Earnings
              </p>
            </div>
            <p className="mt-4 text-4xl font-semibold leading-10 text-slate-900">$8,500</p>
            <p className="mt-2 text-sm text-slate-900/70">Per successful placement</p>
          </div>

          <Link
            to="/signup"
            className="mt-10 inline-flex h-16 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 px-10 text-base font-medium text-white"
          >
            Start Recruiting Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForRecruiters;
