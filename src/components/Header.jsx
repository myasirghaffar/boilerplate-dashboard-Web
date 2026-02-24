import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets/logos";
import { ChevronDownIcon } from "../assets/icons";

const Header = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = [
    "English",
    "Dutch",
    "Spanich",
    "German",
    "French",
    "Arabic",
    "Portuguese",
    "Russian",
    "Chinease",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <header
      className={`w-full px-6 md:px-10 xl:px-28 ${isHomePage
        ? "absolute inset-x-0 top-0 z-30 bg-transparent"
        : "bg-gradient-to-l from-slate-900 to-blue-900"
        }`}
    >
      <div className="h-28 border-b border-white/10 flex items-center justify-between">
        <Link to="/" className="relative flex items-center gap-3">
          <span className="absolute -inset-3 rounded-full bg-white/40 blur-2xl" />
          <img
            src={logo}
            alt="Nomad Recruitment"
            className="relative w-12 h-12 rounded-md object-cover"
          />
          {/* <span className="relative text-white text-xl font-semibold tracking-wide">
            Nomad Recruitment
          </span> */}
        </Link>

        <div className="hidden lg:flex items-center gap-7 ml-auto">
          <nav className="flex items-center gap-10 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/90 hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/90 hover:text-white transition-colors"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/90 hover:text-white transition-colors"
              }
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm"
            >
              {selectedLanguage}
              <ChevronDownIcon className="w-4 h-4 text-white" />
            </button>
            {isLanguageOpen && (
              <div className="absolute -right-12 top-full z-50 mt-3 w-40 overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-white shadow-2xl">
                <div className="flex items-center justify-center gap-3 border-b border-[#e5e5e5] px-4 py-3 text-[14px] font-medium text-[#111827]">
                  {selectedLanguage}
                  <ChevronDownIcon className="h-5 w-5 text-[#111827]" />
                </div>
                {languages
                  .filter((language) => language !== selectedLanguage)
                  .map((language) => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => handleLanguageSelect(language)}
                      className="block w-full border-b border-[#e5e5e5] px-4 py-3 text-center text-[14px] text-[#111827] transition hover:bg-slate-50 last:border-b-0"
                    >
                      {language}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="w-24 h-11 rounded-2xl bg-white/95 text-slate-900 text-sm font-medium inline-flex items-center justify-center"
          >
            Sign In
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white border border-white/30 rounded-md px-3 py-1.5 text-sm"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`lg:hidden mt-2 rounded-2xl border border-white/10 px-3 py-3 ${isHomePage ? "bg-slate-900/90 backdrop-blur-sm" : "bg-slate-900/70 backdrop-blur-sm"
            }`}
        >
          <div className="flex flex-col gap-2">
            <Link to="/" className="py-1 text-white/90" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="py-1 text-white/90" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="py-1 text-white/90" onClick={toggleMenu}>
              Contact Us
            </Link>
            <div className="relative w-fit">
              <button
                type="button"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 py-1 text-sm text-white/90"
              >
                {selectedLanguage}
                <ChevronDownIcon className="w-4 h-4 text-white" />
              </button>
              {isLanguageOpen && (
                <div className="mt-2 w-44 overflow-hidden">
                  {/* <div className="flex items-center justify-center gap-2 border-b border-white/10 px-3 py-2 text-sm font-medium text-white">
                    {selectedLanguage}
                    <ChevronDownIcon className="h-4 w-4 text-white" />
                  </div> */}
                  {languages
                    .filter((language) => language !== selectedLanguage)
                    .map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => handleLanguageSelect(language)}
                        className="block w-full border-b border-white/10 px-3 py-2 text-left text-sm text-white/90 transition hover:bg-white/5 last:border-b-0"
                      >
                        {language}
                      </button>
                    ))}
                </div>
              )}
            </div>
            <Link
              to="/login"
              className="inline-flex w-fit rounded-lg border border-white/25 px-3 py-1.5 text-sm font-medium text-white/90 transition hover:bg-white/5"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
