"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type Language = "EN" | "HE" | "RU";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a1628]/95 backdrop-blur-lg border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-lg">L</span>
              </div>
              <div>
                <div className="text-white font-semibold text-lg tracking-tight">
                  LegalGuard
                </div>
                <div className="text-[#c9a961] text-xs tracking-wider">
                  Real Estate Law
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
            >
              Contact
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-1.5">
              {(["EN", "HE", "RU"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-xs px-2 py-1 rounded transition-all ${
                    language === lang
                      ? "bg-[#c9a961] text-[#0a1628] font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#c9a961] text-[#0a1628] px-5 py-2.5 rounded-md font-semibold hover:bg-[#d4b870] transition-all shadow-lg hover:shadow-[#c9a961]/20"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center gap-2 mt-4">
                {(["EN", "HE", "RU"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`text-xs px-3 py-2 rounded transition-all ${
                      language === lang
                        ? "bg-[#c9a961] text-[#0a1628] font-semibold"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#c9a961] text-[#0a1628] px-5 py-3 rounded-md font-semibold mt-4"
              >
                Get Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
