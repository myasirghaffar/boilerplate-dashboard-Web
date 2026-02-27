const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-slate-900 to-blue-900 py-24">
      <div className="absolute -left-16 top-6 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl md:h-[500px] md:w-[500px]" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl md:h-[600px] md:w-[600px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-white">
          <div className="mx-auto inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-3">
            <span className="text-sm font-medium uppercase tracking-wider text-white/95">
              Story
            </span>
          </div>

          <h1 className="mt-8 text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px] lg:leading-[1.3]">
            About Us
          </h1>

          <div className="mx-auto mt-8 h-2 w-24 rounded-full bg-gradient-to-b from-slate-900 to-blue-900" />

          <p className="mx-auto mt-10 max-w-4xl text-lg text-white/90 md:text-xl md:leading-10">
            We&apos;re here to help you navigate the marketplace with clarity and
            control. Whether you&apos;re a company or a recruiter, reach out to our
            team and we&apos;ll get back to you as soon as possible
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
