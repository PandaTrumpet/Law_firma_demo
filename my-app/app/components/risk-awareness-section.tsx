"use client";

import { AlertTriangle, FileWarning, Lock } from "lucide-react";

export function RiskAwarenessSection() {
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

  const risks = [
    {
      icon: AlertTriangle,
      title: "Hidden Property Liabilities",
      description:
        "Undisclosed liens, easements, or legal encumbrances that could cost you millions. These issues often remain invisible until it is too late.",
      impact: "Potential loss: ₪200,000-500,000+",
    },
    {
      icon: FileWarning,
      title: "Contract Errors & Loopholes",
      description:
        "Poorly drafted clauses, missing protections, or unfavorable terms that expose you to future disputes and financial liability.",
      impact: "Legal disputes lasting 2-5 years",
    },
    {
      icon: Lock,
      title: "Undisclosed Debts or Restrictions",
      description:
        "Property tax arrears, municipal debts, building violations, or zoning restrictions that become your responsibility after purchase.",
      impact: "Average hidden costs: ₪150,000",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold">
              Risk Awareness
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Are You Risking
            <br />
            <span className="text-[#c9a961]">Without Legal Protection?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Most property buyers underestimate the legal complexities involved
            in Israeli real estate transactions. Here is what is at stake.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <risk.icon size={28} className="text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {risk.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {risk.description}
              </p>
              <div className="pt-4 border-t border-red-500/20">
                <div className="text-red-400 font-semibold text-sm">
                  {risk.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#c9a961] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/20 text-lg inline-flex items-center gap-2"
          >
            Review My Transaction
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
}
