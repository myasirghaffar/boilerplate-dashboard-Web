import { ComparisonCheckIcon, ComparisonCrossIcon } from "../../../../assets/icons";

const comparisonRows = [
  {
    feature: "Pricing Control",
    traditional: "Fixed percentages, no negotiation",
    nomad: "Fully negotiable fees between parties",
  },
  {
    feature: "Payment Security",
    traditional: "Payment disputes, delayed compensation",
    nomad: "Escrow-based, secure release on hire start",
  },
  {
    feature: "Transparency",
    traditional: "Hidden costs, unclear terms",
    nomad: "Complete visibility and upfront clarity",
  },
  {
    feature: "Control",
    traditional: "Platform-dictated rules and processes",
    nomad: "Both parties control terms and selection",
  },
  {
    feature: "Cost Efficiency",
    traditional: "Standard 15-30% placement fees",
    nomad: "Negotiate fees that work for your budget",
  },
];

const WhyDifferent = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute right-12 top-20 h-96 w-96 rounded-full bg-cyan-900/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[768px] text-center">
          <div className="inline-flex rounded-full bg-cyan-900/10 px-6 py-2.5">
            <span className="text-sm font-medium text-slate-900">Comparison</span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl md:leading-[1.2] lg:text-[42px] lg:leading-[1.3]">
            Why Nomad is Different
          </h2>

          <div className="mx-auto mt-8 h-2 w-24 rounded-full bg-gradient-to-b from-transparent via-slate-900 to-transparent" />

          <p className="mt-8 text-lg leading-8 text-gray-700">
            We&apos;re not another recruitment agency. We&apos;re a marketplace built on
            transparency, fairness, and mutual control.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[980px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-slate-900/10">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-gradient-to-r from-gray-200 via-cyan-900/10 to-gray-200">
              <div className="bg-gradient-to-br from-white to-gray-50 px-8 py-8">
                <p className="text-md font-medium text-slate-900">Feature</p>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 px-8 py-8">
                <p className="text-md font-medium text-gray-500">Traditional Agencies</p>
              </div>
              <div className="rounded-tr-2xl bg-gradient-to-l from-slate-900 to-blue-900 px-8 py-8">
                <p className="text-md font-medium text-white">Nomad Recruitment</p>
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_1fr_1fr] border-t border-gray-200 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
              >
                <div className="bg-white px-8 py-8">
                  <p className="text-md font-medium text-gray-900">{row.feature}</p>
                </div>

                <div className="flex items-start gap-4 bg-white px-8 py-8">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#FB2C36]">
                    <ComparisonCrossIcon className="h-4 w-4 text-[#FB2C36]" />
                  </span>
                  <p className="text-md leading-6 text-gray-600">{row.traditional}</p>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-white to-blue-50/20 px-8 py-8">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 text-white">
                    <ComparisonCheckIcon className="h-4 w-4 text-white" />
                  </span>
                  <p className="text-md font-medium leading-6 text-gray-900">{row.nomad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
