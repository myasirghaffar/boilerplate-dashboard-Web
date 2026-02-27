import { Link } from "react-router-dom";
import {
  CtaFreeStartIcon,
  CtaInstantSetupIcon,
  CtaSecurePaymentsIcon,
  HeroArrowRightIcon,
} from "../../../../assets/icons";

const ctaHighlights = [
  {
    label: "Free to Start",
    icon: <CtaFreeStartIcon className="h-6 w-6 text-[#00A63E]" />,
    iconWrapperClassName: "bg-green-100",
  },
  {
    label: "Secure Payments",
    icon: <CtaSecurePaymentsIcon className="h-6 w-6 text-[#155DFC]" />,
    iconWrapperClassName: "bg-blue-100",
  },
  {
    label: "Instant Setup",
    icon: <CtaInstantSetupIcon className="h-6 w-6 text-[#9810FA]" />,
    iconWrapperClassName: "bg-purple-100",
  },
];

const FinalCta = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-cyan-900/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-16 h-[800px] w-[800px] rounded-full bg-blue-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-24 top-8 h-28 w-28 rotate-12 rounded-2xl border-4 border-slate-900/10" />
      <div className="pointer-events-none absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-[920px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center rounded-full border border-slate-900/20 bg-slate-900/5 px-7 py-3">
          <span className="text-sm font-medium text-slate-900">Ready to Get Started?</span>
        </div>

        <h2 className="mt-8 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl md:leading-[1.2] lg:text-[42px] lg:leading-[1.3]">
          Ready to Transform Your Recruitment?
        </h2>

        <p className="mx-auto mt-8 max-w-[768px] text-lg leading-10 text-gray-700">
          Join companies and recruiters who are making smarter, fairer hiring
          decisions. Get started in minutes.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {ctaHighlights.map((item) => (
            <div key={item.label} className="inline-flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconWrapperClassName}`}
              >
                {item.icon}
              </div>
              <span className="text-md font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/signup"
            className="inline-flex h-16 items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 px-12 text-md font-medium text-white"
          >
            Get Started for Free
            <HeroArrowRightIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-16 items-center justify-center rounded-2xl border border-gray-200 bg-white px-12 text-md font-medium text-slate-900"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
