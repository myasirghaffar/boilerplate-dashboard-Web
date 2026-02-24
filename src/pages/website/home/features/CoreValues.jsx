import {
    CoreMarketPricingIcon,
    CorePerformanceIcon,
    CoreTransparencyIcon,
} from "../../../../assets/icons";

const coreValues = [
    {
        title: "Complete Transparency",
        badge: "Trust First",
        description:
            "No hidden fees, no surprises. Every fee is disclosed upfront. Companies see exactly what they'll pay. Recruiters know exactly what they'll earn.",
        icon: <CoreTransparencyIcon className="h-8 w-8 text-white" />,
    },
    {
        title: "Market-Driven Pricing",
        badge: "Fair Pricing",
        description:
            "Recruiters set their own fees based on role complexity and candidate quality. Companies choose the best value. The market decides what's fair-not a corporate algorithm.",
        icon: <CoreMarketPricingIcon className="h-8 w-8 text-white" />,
    },
    {
        title: "Pay for Performance",
        badge: "Results Only",
        description:
            "Companies only pay when a candidate actually starts work. Recruiters get paid when they deliver results. Simple, fair, and risk-free for everyone.",
        icon: <CorePerformanceIcon className="h-8 w-8 text-white" />,
    },
];

const CoreValueCard = ({ title, badge, description, icon }) => {
    return (
        <article className="relative overflow-visible rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
            <span className="absolute -right-2 -top-4 rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900 px-4 py-1.5 text-xs font-medium text-white">
                {badge}
            </span>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-l from-slate-900 to-blue-900">
                {icon}
            </div>

            <h3 className="mt-8 text-2xl font-semibold leading-8 text-slate-900">{title}</h3>
            <p className="mt-5 text-base leading-6 text-gray-600">{description}</p>

            <div className="absolute left-0 top-0 h-full w-1.5" />
        </article>
    );
};

const CoreValues = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50/50 py-20 lg:py-24">
            <div className="pointer-events-none absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-slate-900/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 top-72 h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-1 left-20 h-32 w-32 rotate-45 rounded-3xl bg-gradient-to-br from-slate-900/10 to-transparent" />

            <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[860px] text-center">
                    <div className="inline-flex rounded-full bg-slate-900/10 px-7 py-2.5">
                        <span className="text-sm font-medium text-slate-900">Core Values</span>
                    </div>

                    <h2 className="mt-8 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl md:leading-[1.2]">
                        Why Companies & Recruiters Choose Nomad
                    </h2>

                    <div className="mx-auto mt-8 h-2 w-24 rounded-full bg-gradient-to-b from-transparent via-slate-900 to-transparent" />
                </div>

                <div className="mt-16 grid gap-7 xl:grid-cols-3">
                    {coreValues.map((value) => (
                        <CoreValueCard
                            key={value.title}
                            title={value.title}
                            badge={value.badge}
                            description={value.description}
                            icon={value.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
