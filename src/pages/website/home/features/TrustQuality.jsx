import {
  TrustComplianceReadyIcon,
  TrustQualityAssuranceIcon,
  TrustRatingSystemIcon,
  TrustVerifiedRecruitersIcon,
} from "../../../../assets/icons";

const trustCards = [
  {
    title: "Verified Recruiters",
    description: "All recruiters undergo verification before joining the platform",
    icon: <TrustVerifiedRecruitersIcon className="h-7 w-7 text-white" />,
  },
  {
    title: "Rating System",
    description: "Track record and ratings ensure quality and accountability",
    icon: <TrustRatingSystemIcon className="h-7 w-7 text-white" />,
  },
  {
    title: "Compliance Ready",
    description: "Built with data protection and employment law compliance in mind",
    icon: <TrustComplianceReadyIcon className="h-7 w-7 text-white" />,
  },
  {
    title: "Quality Assurance",
    description: "Ongoing monitoring to maintain high standards across the platform",
    icon: <TrustQualityAssuranceIcon className="h-7 w-7 text-white" />,
  },
];

const TrustQuality = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-cyan-900 to-slate-900 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-slate-900 to-blue-900" />
      <div className="pointer-events-none absolute right-8 top-0 h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-[55%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[768px] text-center">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-2.5">
            <span className="text-sm font-medium text-white/95">Security &amp; Compliance</span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl md:leading-[1.2]">
            Trust &amp; Quality
          </h2>

          <div className="mx-auto mt-8 h-2 w-24 rounded-full bg-gradient-to-b from-transparent via-white to-transparent" />

          <p className="mt-8 text-xl leading-8 text-white/90">
            We maintain the highest standards of professionalism, security, and
            compliance to protect all parties.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-4">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/20 bg-white px-8 py-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900">
                {card.icon}
              </div>
              <h3 className="mt-8 text-lg font-medium leading-6 text-slate-900">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustQuality;
