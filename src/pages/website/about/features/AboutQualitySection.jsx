import { AboutCheckIcon, AboutShieldIcon } from "../../../../assets/icons";

const qualityCards = [
  {
    title: "Verified Companies",
    description: "Every company is manually reviewed.",
  },
  {
    title: "Verified Recruiters",
    description: "Only qualified professionals join.",
  },
  {
    title: "Verified Agencies",
    description: "Trusted partners, proven track record.",
  },
];

const AboutQualitySection = () => {
  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center">
          <AboutShieldIcon className="h-20 w-20" />
        </div>

        <h3 className="mx-auto mt-8 max-w-4xl text-3xl font-semibold text-slate-900 md:text-4xl lg:text-[42px] lg:leading-[1.3]">
          Quality matters — especially in recruitment.
        </h3>
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-600 md:text-md">
          Nomad is built around trust. Companies, recruiters, and recruitment
          agencies are verified before they can actively use the platform. By
          keeping the platform focused on quality, Nomad creates a safer and
          more reliable environment where connections are meaningful.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {qualityCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white px-6 py-8 text-center"
            >
              <AboutCheckIcon className="mx-auto h-5 w-5 text-slate-900" />
              <h4 className="mt-4 text-md font-semibold text-slate-900">
                {card.title}
              </h4>
              <p className="mt-3 text-md text-slate-500">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutQualitySection;
