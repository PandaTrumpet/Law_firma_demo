
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const isRTL = locale === "he";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "services", label: t("nav.services") },
    { id: "calculator", label: t("nav.pricing") },
    { id: "process", label: t("nav.process") },
    { id: "testimonials", label: t("nav.testimonials") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={[
        "fixed top-0 left-0 right-0 z-60",
        "transition-all duration-300",
        isScrolled
          ? "bg-[#0a1628]/92 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="flex items-center gap-3 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50 rounded-md"
            aria-label={t("aria.goTop")}
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span className="text-[#0a1628] font-bold text-base lg:text-lg">
                L
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-[15px] lg:text-lg tracking-tight">
                {t("brand.name")}
              </div>
              <div className="text-[#c9a961] text-[10px] lg:text-xs tracking-wider">
                {t("brand.subtitle")}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label={t("aria.primaryNav")}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 cursor-pointer hover:text-[#c9a961] transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/40 rounded-md px-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#c9a961] text-[#0a1628] px-5 py-2.5 rounded-md font-semibold hover:bg-[#d4b870] transition-all shadow-lg hover:shadow-[#c9a961]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50"
            >
              {t("cta.getConsultation")}
            </button>
          </div>

          {/* Mobile Right side */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={[
                "lg:hidden inline-flex items-center justify-center",
                "h-11 w-11 rounded-full",
                "border border-white/10 bg-white/5 backdrop-blur-xl",
                "text-white hover:bg-white/8 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/40",
                isMobileMenuOpen
                  ? "fixed top-4 right-4 z-[70]"
                  : "relative z-10",
              ].join(" ")}
              aria-label={
                isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-40",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={[
            "absolute inset-0",
            "bg-black/55 backdrop-blur-[2px]",
            "transition-opacity duration-200",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel wrapper */}
        <div
          id="mobile-menu-panel"
          className={[
            "absolute left-0 right-0 top-0",
            "pt-20",
            "transition-all duration-300",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-6 invisible",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label={t("aria.mobileMenu")}
        >
          <div
            className={[
              "mx-3 sm:mx-6",
              "rounded-2xl",
              "border border-white/10",
              "bg-[#071023]/92 backdrop-blur-2xl",
              "shadow-[0_25px_80px_rgba(0,0,0,0.55)]",
              "overflow-hidden",
            ].join(" ")}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a961]/50 to-transparent" />

            <nav
              className="p-4 sm:p-5 flex flex-col gap-1"
              aria-label={t("aria.primaryNav")}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={[
                    "w-full",
                    "px-4 py-3",
                    "rounded-xl",
                    "text-[15px] font-medium",
                    "text-slate-200",
                    "hover:bg-white/6 hover:text-white",
                    "transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/40",
                    isRTL ? "text-right" : "text-left",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-3 pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className={isRTL ? "self-end" : "self-start"}>
                  <LanguageSwitcher />
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#c9a961] text-[#0a1628] px-5 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#d4b870] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50"
                >
                  {t("cta.getConsultation")}
                </button>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {t("meta.responseTime")}
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}