import { SecurePaymentsLockIcon } from "../../../../assets/icons";

const paymentHighlights = [
  {
    title: "Industry-Standard Security",
    description:
      "Payments processed through Stripe with funds held in escrow until the candidate starts work, protecting both parties.",
  },
  {
    title: "Guaranteed Results",
    description:
      "Pay only for successful hires. Recruiters guaranteed payment on delivery. No disputes, delays, or uncertainty.",
  },
];

const SecurePayments = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-slate-900/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-[40%] h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1152px] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-cyan-900 to-slate-900 shadow-2xl">
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-900" />

        <div className="relative px-6 py-10 md:px-10 lg:px-20 lg:py-20">
          <div className="flex items-start gap-6">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-900 shadow-2xl">
              <SecurePaymentsLockIcon className="h-10 w-10 text-white" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 blur-xl" />
            </div>

            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                Secure Payments Powered by Stripe
              </h2>
              <div className="mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-white via-white/60 to-transparent" />
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {paymentHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-900" />
                  <h3 className="text-lg font-medium leading-7 text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 pl-5 text-base leading-6 text-gray-600/90">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePayments;
