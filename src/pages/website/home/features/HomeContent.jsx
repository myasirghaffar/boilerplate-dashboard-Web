import { Link } from "react-router-dom";
import {
  heroSectionAlt,
  homeAvatarOne,
  homeAvatarThree,
  homeAvatarTwo,
} from "../../../../assets/images";
import {
  HeroArrowRightIcon,
  HeroBriefcaseIcon,
  HeroStarIcon,
  HeroSuccessRateIcon,
  HeroTeamIcon,
} from "../../../../assets/icons";
import HeroFeatureItem from "./HeroFeatureItem";
import HeroMetricCard from "./HeroMetricCard";

const HomeContent = () => {
  const metrics = [
    {
      value: "500+",
      label: "Active Roles",
      icon: <HeroBriefcaseIcon className="h-8 w-8" />,
    },
    {
      value: "2,000+",
      label: "Recruiters",
      icon: <HeroTeamIcon className="h-8 w-8" />,
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <HeroSuccessRateIcon className="h-8 w-8" />,
    },
  ];

  const avatars = [homeAvatarOne, homeAvatarTwo, homeAvatarThree];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <img
        src={heroSectionAlt}
        alt="Recruitment hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" />
      <div className="relative mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-3 lg:px-4">
        <main className="grid items-center gap-12 pb-14 pt-32 lg:grid-cols-[1fr_480px] lg:pb-20 lg:pt-36">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3">
              <span className="text-2xl leading-none">✨</span>
              <span className="text-sm font-medium text-white/95">
                The Future of Recruitment is Here
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px] lg:leading-[1.3]">
              The Recruitment Marketplace Where Both Sides Decide The Deal.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-white/95 md:text-xl">
              Companies post jobs. Recruiters offer candidates with a clear fee.
              You negotiate upfront and pay only when someone actually starts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-slate-900 shadow-2xl transition hover:bg-white/90"
              >
                Get Started
                <HeroArrowRightIcon className="h-5 w-5 text-slate-900" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-2xl border border-white bg-slate-900 px-8 py-4 text-base font-medium text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <HeroFeatureItem>Stripe Secured Payments</HeroFeatureItem>
              <HeroFeatureItem>No Setup Fees</HeroFeatureItem>
              <HeroFeatureItem>24/7 Support</HeroFeatureItem>
            </div>

            <div className="mt-10 flex flex-wrap items-end gap-4">
              <div>

                <div className="mt-2 flex items-center -space-x-2">
                  {avatars.map((avatar, index) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt={`User avatar ${index + 1}`}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

              </div>
              <p className="text-xl font-medium">
                25k+ <span className="font-normal">People Join</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium uppercase">5.0</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <HeroStarIcon key={index} className="h-4 w-4" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {metrics.map((metric) => (
              <HeroMetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default HomeContent;
