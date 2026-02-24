const highlights = [
  "No CVs thrown over the fence",
  "No paying without results",
  "No unnecessary middlemen",
];

const AboutStorySection = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-5xl">
            What is Nomad Recruitment?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Nomad Recruitment is an online recruitment marketplace that connects
            companies directly with recruiters and recruitment agencies. Instead
            of long contracts, high percentage fees, or one-sided control, Nomad
            lets both sides make clear agreements upfront.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#2f4d97] to-[#03153f] p-8 text-center text-white md:p-12">
          <h3 className="text-3xl font-semibold md:text-5xl">
            A new way of working.
          </h3>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-white/85 md:text-base">
            Nomad isn&apos;t another recruitment platform. It&apos;s a new way of
            working. Instead of high percentage fees and one-sided control, we
            bring companies and recruiters together in one transparent
            marketplace. No CVs thrown over the fence. No paying without results.
            No unnecessary middlemen.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs text-white/90 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h3 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Recruitment should be simple.
          </h3>
          <p className="text-sm leading-8 text-slate-600 md:text-base">
            In reality, it often isn&apos;t. For companies, hiring talent has become
            expensive and unpredictable. On the other side, recruiters face work
            without guarantees. Nomad changes this by putting clarity, control,
            and fairness back into the process, turning recruitment into what it
            should be: direct, transparent, and based on real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
