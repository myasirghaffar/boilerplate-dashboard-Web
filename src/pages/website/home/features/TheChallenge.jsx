import {
  ChallengeAlertCircleIcon,
  ChallengeClockIcon,
  ChallengeDollarIcon,
  ChallengeShieldAlertIcon,
} from "../../../../assets/icons";

const challengeCards = [
  {
    id: "1",
    title: "Hidden Costs & No Negotiation",
    description:
      "Companies are locked into rigid fee structures with no room to negotiate. Pricing is often unclear until the very end, leading to budget surprises and mistrust.",
    icon: <ChallengeDollarIcon className="h-8 w-8 text-white" />,
    offsetClassName: "xl:-mt-16",
  },
  {
    id: "2",
    title: "Payment Risk for Recruiters",
    description:
      "Recruiters invest time and resources upfront but face payment delays or disputes. There's no guarantee they'll be compensated fairly for successful placements.",
    icon: <ChallengeAlertCircleIcon className="h-8 w-8 text-white" />,
    offsetClassName: "xl:-mt-6",
  },
  {
    id: "3",
    title: "Slow, Inefficient Process",
    description:
      "Traditional recruitment involves endless back-and-forth, unclear expectations, and wasted time. Both parties spend weeks navigating unclear processes.",
    icon: <ChallengeClockIcon className="h-8 w-8 text-white" />,
    offsetClassName: "xl:mt-8",
  },
  {
    id: "4",
    title: "Lack of Control & Transparency",
    description:
      "Neither companies nor recruiters have full visibility into the process. Terms are dictated by platforms, not negotiated between the parties who matter most.",
    icon: <ChallengeShieldAlertIcon className="h-8 w-8 text-white" />,
    offsetClassName: "xl:mt-16",
  },
];

const ChallengeCard = ({ id, title, description, icon, offsetClassName }) => {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-white/50 bg-white/95 p-8 shadow-xl shadow-black/10 ${offsetClassName}`}
    >
      <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-slate-700/20 to-blue-400/20 blur-2xl" />
      <div className="absolute inset-y-0 left-0 w-2 " />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900">
            {icon}
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-l from-slate-900 to-blue-900 text-sm font-bold text-white">
            {id}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold leading-8 text-slate-900">{title}</h3>
        <p className="mt-5 text-lg leading-7 text-gray-700">{description}</p>
      </div>
    </article>
  );
};

const TheChallenge = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-slate-900 to-blue-900 py-20 text-white lg:py-24">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-cyan-900/90 to-blue-950/90" /> */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl md:h-[600px] md:w-[600px]" />
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl md:h-[800px] md:w-[800px]" />
      <div className="pointer-events-none absolute right-8 top-20 h-28 w-28 rotate-12 rounded-2xl border border-white/10 opacity-95 md:h-36 md:w-36" />
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(circle at center, white 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[896px] text-center">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-3 shadow-2xl">
            <span className="text-sm font-medium uppercase tracking-wide text-white/95">
              The Challenge
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.15] lg:text-7xl">
            Problem with Traditional Recruitment
          </h2>

          <div className="mx-auto mt-8 h-2 w-32 rounded-full bg-gradient-to-b from-transparent via-white to-transparent shadow-2xl" />

          <p className="mx-auto my-10 pb-10 max-w-[768px] text-lg leading-8 text-white/90 md:text-2xl md:leading-10">
            Hidden fees, inflexible terms, and zero transparency leave both
            companies and recruiters frustrated.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 xl:grid-cols-2 xl:gap-x-12 xl:gap-y-10">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl xl:block" />
          {challengeCards.map((card) => (
            <ChallengeCard key={card.id} {...card} />
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-6 left-0 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default TheChallenge;
