const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-l from-slate-900 to-blue-900 py-20 md:py-24">
      <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl md:h-[500px] md:w-[500px]" />
      <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3">
          <span className="text-sm font-medium uppercase tracking-wider text-white/95">
            Get In Touch
          </span>
        </div>

        <h1 className="mt-7 text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-[1.3]">Contact Us</h1>
        <div className="mx-auto mt-7 h-2 w-24 rounded-full bg-gradient-to-b from-slate-900 to-blue-900" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85 md:text-xl md:leading-10">
          Have questions? We&apos;re here to help. Reach out to our team and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
