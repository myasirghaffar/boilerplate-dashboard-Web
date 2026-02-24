const processSteps = [
  {
    id: "01",
    title: "Companies Post Jobs",
    description:
      "Create detailed job listings with requirements and budget. Set your terms and wait for qualified recruiters.",
    featured: true,
  },
  {
    id: "02",
    title: "Recruiters Submit Candidates",
    description:
      "Professional recruiters submit qualified candidates with proposed fees and complete details.",
  },
  {
    id: "03",
    title: "Negotiate & Select",
    description:
      "Review proposals, compare options, and negotiate directly with full control over selection.",
  },
  {
    id: "04",
    title: "Secure Payment",
    description:
      "Payment held securely in escrow and released only when the candidate starts work.",
  },
];

const ProcessStepCard = ({ id, title, description, featured = false }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${featured
        ? "border border-slate-900/30 shadow-2xl"
        : "border border-gray-200 shadow-lg"
        }`}
    >
      <div className="pointer-events-none absolute bottom-5 right-5 h-28 w-28 rounded-full bg-gradient-to-br from-blue-50/50 to-transparent blur-2xl" />

      <div className="relative flex h-20 w-full flex-col gap-4">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 ${featured ? "rotate-6" : ""
            }`}
        >
          <span className="text-2xl font-bold leading-8 text-white">{id}</span>
        </div>
        <div className="h-1.5 w-20 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900" />
      </div>

      <h3 className="relative mt-8 text-xl font-semibold leading-6 text-slate-900">{title}</h3>
      <p className="relative mt-5 text-base leading-6 text-gray-600">{description}</p>

      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-l from-slate-900 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};

const OurProcess = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute left-1/3 top-[68%] h-[500px] w-[500px] rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[896px] text-center">
          <div className="inline-flex rounded-full bg-slate-900/10 px-8 py-3 shadow-lg shadow-black/10">
            <span className="text-sm font-medium uppercase tracking-wide text-slate-900">
              Our Process
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl md:leading-[1.2]">
            How Nomad Works
          </h2>

          <div className="mx-auto mt-8 h-2 w-32 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900" />

          <p className="mx-auto mt-8 max-w-[768px] text-lg leading-8 text-gray-700 md:text-2xl md:leading-10">
            A simple, transparent process that puts both companies and recruiters
            in control.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-1/2 top-20 hidden h-1 w-[84%] -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-900 via-blue-500 to-slate-900 opacity-20 xl:block" />

          <div className="grid gap-6 xl:grid-cols-4">
            {processSteps.map((step) => (
              <ProcessStepCard
                key={step.id}
                id={step.id}
                title={step.title}
                description={step.description}
                featured={step.featured}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
