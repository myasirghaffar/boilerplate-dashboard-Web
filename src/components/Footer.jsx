import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/logos";
import { FooterFacebookIcon, FooterTwitterIcon } from "../assets/icons";

const Footer = () => {
  const footerLinks = [
    { label: "How It Works", to: "#" },
    { label: "Pricing", to: "#" },
    { label: "About Us", to: "/about" },
    { separator: true },
    { label: "For Companies", to: "#" },
    { label: "For Recruiters", to: "#" },
    { label: "FAQs", to: "#" },
    { separator: true },
    { label: "Privacy Policy", to: "#" },
    { label: "Terms", to: "#" },
    { label: "Compliance", to: "#" },
  ];

  const legalLinks = [
    { label: "Status", to: "#" },
    { label: "Security", to: "#" },
    { label: "Cookie Settings", to: "#" },
  ];

  return (
    <footer className="relative min-h-[581px] overflow-hidden bg-gradient-to-b from-slate-900 via-cyan-900 to-slate-900 text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -top-5 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-l from-slate-900 to-blue-900" />

      <div className="relative z-10 max-w-[1216px] mx-auto min-h-[581px] px-6 md:px-10 xl:px-0 pt-20 pb-8 flex flex-col gap-12">
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center gap-4 mb-6">
            <span className="absolute -inset-3 rounded-full bg-white/20 blur-2xl" />
            <img
              src={logo}
              alt="Nomad Recruitment"
              className="relative w-14 h-14 rounded-md object-cover"
            />
            <h2 className="relative text-2xl font-semibold leading-8">Nomad Recruitment</h2>
          </div>
          <p className="text-white/80 text-base leading-6 max-w-xl mx-auto">
            The transparent recruitment marketplace where both sides decide the deal.
          </p>
        </div>

        <div className="border-b border-white/10 pb-5">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm">
            {footerLinks.map((item, index) =>
              item.separator ? (
                <span key={`sep-${index}`} className="text-white/30">
                  •
                </span>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link
            to="#"
            className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 inline-flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          >
            <span className="text-base font-semibold leading-6">in</span>
          </Link>
          <Link
            to="#"
            className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 inline-flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          >
            <FooterFacebookIcon className="w-5 h-5 text-white" />
          </Link>
          <Link
            to="#"
            className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 inline-flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          >
            <FooterTwitterIcon className="w-5 h-5 text-white" />
          </Link>
        </div>

        <div className="mt-auto pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
            <p className="text-white/60">© 2026 Nomad Recruitment. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((item, index) => (
                <React.Fragment key={item.label}>
                  <Link to={item.to} className="text-white/60 hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="text-white/30">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
