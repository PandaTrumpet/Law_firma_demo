"use client";

import { Shield } from "lucide-react";

export function FinalCTASection() {
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
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a961]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#c9a961]/30">
          <Shield size={40} className="text-[#0a1628]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Real Estate in Israel
          <br />
          is a <span className="text-[#c9a961]">Serious Investment.</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Make sure it's legally protected with expert guidance you can trust.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#c9a961] text-[#0a1628] px-12 py-5 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-2xl hover:shadow-[#c9a961]/40 text-xl inline-flex items-center gap-3"
        >
          Schedule a Consultation
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c9a961] mb-2">500+</div>
              <div className="text-gray-400 text-sm">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c9a961] mb-2">
                ₪3.2B
              </div>
              <div className="text-gray-400 text-sm">Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c9a961] mb-2">98%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c9a961] mb-2">24h</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
