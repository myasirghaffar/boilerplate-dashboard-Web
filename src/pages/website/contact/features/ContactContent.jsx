import ContactFormCard from "./ContactFormCard";
import ContactHeroSection from "./ContactHeroSection";
import ContactSidebarCards from "./ContactSidebarCards";

const ContactContent = () => {
  return (
    <>
      <ContactHeroSection />

      <section className="bg-[#f3f4f6] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <ContactFormCard />
            <ContactSidebarCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
