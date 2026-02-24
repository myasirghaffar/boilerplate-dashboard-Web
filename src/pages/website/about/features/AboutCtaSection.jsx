import { Link } from "react-router-dom";

const AboutCtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#2f4d97] to-[#03153f] py-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-3xl font-semibold text-white md:text-5xl">
          Ready to Join the Revolution?
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">
          Whether you&apos;re a company looking for talent or a recruiter ready to
          grow—Nomad is built for you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/signup"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            Get Started Today
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
