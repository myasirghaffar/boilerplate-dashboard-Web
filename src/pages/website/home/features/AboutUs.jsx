const aboutCards = [
  {
    id: "1",
    label: "Marketplace",
    labelClassName: "bg-cyan-900/5",
    dividerClassName: "from-cyan-900/30 to-black/0",
    description:
      "Nomad Recruitment is a transparent marketplace connecting companies with professional recruiters and agencies. Unlike traditional platforms with hidden fees and rigid structures, we give both parties full control over pricing, terms, and selection.",
  },
  {
    id: "2",
    label: "Process",
    labelClassName: "bg-blue-50",
    dividerClassName: "from-blue-500/30 to-black/0",
    description:
      "Companies post roles and review candidate proposals with upfront fees. Recruiters present qualified candidates and negotiate their terms directly. Payment is held securely and only released when the hire successfully starts work.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-900/5 blur-3xl md:h-[600px] md:w-[600px]" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-blue-400/5 blur-3xl md:h-80 md:w-80" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent md:h-24 md:w-24" />
      <div className="pointer-events-none absolute left-10 top-[60%] h-24 w-2 rounded-full bg-gradient-to-b from-slate-900/20 to-transparent md:h-32" />
      <div className="pointer-events-none absolute left-1/3 top-6 h-16 w-16 rotate-12 rounded-2xl border border-cyan-900/10 md:h-20 md:w-20" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[896px] text-center">
          <div className="inline-flex rounded-full bg-cyan-900/10 px-7 py-2.5">
            <span className="text-sm font-medium text-slate-900">About Us</span>
          </div>

          <h2 className="mx-auto mt-6 max-w-[740px] text-3xl font-semibold leading-tight text-slate-900 md:text-4xl md:leading-[1.12] lg:text-[42px] lg:leading-[1.3]">
            What is Nomad Recruitment?
          </h2>

          <div className="mx-auto mt-8 h-2 w-24 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900" />

          <p className="mx-auto mt-8 max-w-[768px] text-lg leading-8 text-gray-600 md:text-xl md:leading-10">
            A transparent marketplace connecting companies with professional
            recruiters, built on fairness and mutual empowerment.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {aboutCards.map((card) => (
            <article
              key={card.id}
              className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-black/5 md:p-10"
            >
              <div className="absolute inset-y-0 left-0 w-2 rounded-l-3xl bg-gradient-to-l from-slate-900 to-blue-900" />
              <div className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-2xl md:h-32 md:w-32" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900">
                    <span className="text-xl font-semibold text-white">{card.id}</span>
                  </div>

                  <div className={`h-px flex-1 bg-gradient-to-r ${card.dividerClassName}`} />

                  <div className={`rounded-full px-4 py-2.5 ${card.labelClassName}`}>
                    <span className="text-xs font-medium text-slate-900">{card.label}</span>
                  </div>
                </div>

                <p className="mt-8 text-md leading-8 text-gray-700">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
