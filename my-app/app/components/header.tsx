// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { LanguageSwitcher } from "./LanguageSwitcher";

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#0a1628]/95 backdrop-blur-lg border-b border-white/10 shadow-xl"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center">
//                 <span className="text-[#0a1628] font-bold text-lg">L</span>
//               </div>
//               <div>
//                 <div className="text-white font-semibold text-lg tracking-tight">
//                   LegalGuard
//                 </div>
//                 <div className="text-[#c9a961] text-xs tracking-wider">
//                   Real Estate Law
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => scrollToSection("calculator")}
//               className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
//             >
//               Pricing
//             </button>
//             <button
//               onClick={() => scrollToSection("process")}
//               className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
//             >
//               Process
//             </button>
//             <button
//               onClick={() => scrollToSection("testimonials")}
//               className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
//             >
//               Testimonials
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-gray-300 hover:text-[#c9a961] transition-colors text-sm"
//             >
//               Contact
//             </button>
//           </nav>

//           {/* Language Switcher & CTA */}
//           <div className="hidden lg:flex items-center gap-6">

//             <LanguageSwitcher/>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="bg-[#c9a961] text-[#0a1628] px-5 py-2.5 rounded-md font-semibold hover:bg-[#d4b870] transition-all shadow-lg hover:shadow-[#c9a961]/20"
//             >
//               Get Consultation
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden text-white"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-6 border-t border-white/10">
//             <nav className="flex flex-col gap-4">
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
//               >
//                 Services
//               </button>
//               <button
//                 onClick={() => scrollToSection("calculator")}
//                 className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={() => scrollToSection("process")}
//                 className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
//               >
//                 Process
//               </button>
//               <button
//                 onClick={() => scrollToSection("testimonials")}
//                 className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
//               >
//                 Testimonials
//               </button>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="text-gray-300 hover:text-[#c9a961] transition-colors text-left"
//               >
//                 Contact
//               </button>
//         <LanguageSwitcher/>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="bg-[#c9a961] text-[#0a1628] px-5 py-3 rounded-md font-semibold mt-4"
//               >
//                 Get Consultation
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
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
    { id: "services", label: "Services" },
    { id: "calculator", label: "Pricing" },
    { id: "process", label: "Process" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
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
            aria-label="Go to top"
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span className="text-[#0a1628] font-bold text-base lg:text-lg">
                L
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-[15px] lg:text-lg tracking-tight">
                LegalGuard
              </div>
              <div className="text-[#c9a961] text-[10px] lg:text-xs tracking-wider">
                Real Estate Law
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
              Get Consultation
            </button>
          </div>

          {/* Mobile Right side: keep it premium and compact */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Optional: keep language switcher visible even on mobile */}
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {/* <div
        className={[
          "lg:hidden fixed inset-0 z-40",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMobileMenuOpen}
      >
    
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={[
            "absolute inset-0",
            "bg-black/55 backdrop-blur-[2px]",
            "transition-opacity duration-200",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

    
        <div
          className={[
            "absolute left-0 right-0 top-0",
            "pt-20", // below header area
            "transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-2",
          ].join(" ")}
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
        
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a961]/50 to-transparent" /> */}
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
          className={[
            "absolute left-0 right-0 top-0",
            "pt-20",
            "transition-all duration-300",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-6 invisible",
          ].join(" ")}
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

            <nav className="p-4 sm:p-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={[
                    "w-full text-left",
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
                  Get Consultation
                </button>

                <p className="text-xs text-slate-400 leading-relaxed">
                  We respond within 24 hours.
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}