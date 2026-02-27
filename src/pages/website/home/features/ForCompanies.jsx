import { Link } from "react-router-dom";
import { ForCompaniesRoleIcon, ListCheckBadgeIcon } from "../../../../assets/icons";

const companyBenefits = [
  "Post your role and receive multiple candidate proposals with transparent fees",
  "Review recruiter profiles, ratings, and past placements before choosing",
  "Negotiate fees directly-no hidden markups or percentage surprises",
  "Only pay when the candidate starts work-zero risk, total protection",
  "Access a global network of vetted recruiters and agencies",
  "Save 30-50% compared to traditional agency fees",
  "Fill roles faster with competitive, motivated recruiters",
];

const ForCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute right-16 top-20 h-80 w-80 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <div>
          <div className="inline-flex rounded-full bg-slate-900/10 px-6 py-2.5">
            <span className="text-sm font-medium text-slate-900">For Companies</span>
          </div>

          <h2 className="mt-6 max-w-[560px] text-3xl font-semibold leading-tight text-slate-900 md:text-4xl md:leading-[1.2] lg:text-[42px] lg:leading-[1.3]">
            For Companies &amp; Hiring Teams
          </h2>

          <div className="mt-8 h-2 w-24 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900" />

          <p className="mt-8 max-w-[560px] text-lg leading-8 text-gray-700">
            Stop overpaying for recruitment. Choose from multiple qualified
            candidates, negotiate fees directly, and only pay when someone starts.
          </p>

          <div className="mt-10 rounded-3xl border border-slate-900/10 bg-gradient-to-br from-cyan-900/5 via-blue-50/30 to-transparent p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold leading-10 text-slate-900">30-50%</p>
                <p className="mt-2 text-md text-gray-600">Cost Savings</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-10 text-slate-900">50%</p>
                <p className="mt-2 text-md text-gray-600">Faster Hiring</p>
              </div>
            </div>
          </div>

          <Link
            to="/signup"
            className="mt-10 inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 px-10 text-base font-medium text-white"
          >
            <ForCompaniesRoleIcon className="h-5 w-5 text-white" />
            Post Your First Role
          </Link>
        </div>

        <div className="space-y-5">
          {companyBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white px-5 py-5"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-l from-slate-900 to-blue-900 text-white">
                <ListCheckBadgeIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-md leading-6 text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;
