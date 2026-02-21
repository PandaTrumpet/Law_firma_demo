
"use client";

import { AlertTriangle, FileWarning, Lock } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";


export function RiskAwarenessSection() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.09, delay: 0.08, duration: 0.75 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Background: same “corporate night” system */}
      {/* Background: unified corporate system (same as other sections) */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />

        {/* orbs */}
        <div className="absolute -top-24 right-[-15%] h-80 w-80 rounded-full blur-3xl opacity-14 bg-[radial-gradient(circle,rgba(76,194,255,0.24),transparent_62%)]" />
        <div className="absolute -bottom-28 left-[-18%] h-96 w-96 rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.22),transparent_60%)]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />

        {/* top/bottom separators */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div
        className="
          relative z-10 max-w-[1400px] mx-auto
          px-4 sm:px-6 lg:px-12
          pt-16 pb-16
          md:pt-20 md:pb-20
          lg:pt-24 lg:pb-24
        "
      >
        {/* Header */}
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="text-center"
        >
          <motion.div
            variants={m.item}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#7A1E1E]/30 bg-[#7A1E1E]/10 backdrop-blur-xl">
              <AlertTriangle size={16} className="text-[#D66A6A]" />
              <span className="text-red-200/90 text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                Risk Awareness
              </span>
            </span>
          </motion.div>

          <motion.h2
            variants={m.item}
            className="
      font-semibold tracking-tight leading-[1.08]
      text-[clamp(1.75rem,5.6vw,2.6rem)]
      lg:text-[clamp(2.6rem,3.2vw,3.3rem)]
    "
          >
            What Are You Risking
            <br />
            <span className="text-[#c9a961]">Without Legal Protection?</span>
          </motion.h2>

          <motion.p
            variants={m.item}
            className="
      mt-5 mx-auto
      text-slate-200/75 leading-relaxed
      max-w-[70ch]
      text-[clamp(1.0rem,2.6vw,1.15rem)]
      lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
    "
          >
            Most property buyers underestimate the legal complexities involved
            in Israeli real estate transactions. Here is what is at stake.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="mt-10 grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3"
        >
          {risks.map((risk) => {
            const Icon = risk.icon;

            return (
              <motion.div
                key={risk.title}
                variants={m.item}
                className="
                  group relative rounded-2xl p-6 sm:p-7
                  border border-white/10
                  bg-[#132235] backdrop-blur-2xl
                  shadow-[0_25px_80px_rgba(0,0,0,0.50)]
                  transition-all duration-300
                  hover:border-red-500/25 hover:bg-white/[0.04]
                "
              >
                {/* subtle top accent line */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />

                <div
                  className={[
                    "flex items-start gap-4",
                    isRTL ? "flex-row-reverse" : "flex-row",
                  ].join(" ")}
                >
                  <div
                    className="
                      shrink-0 h-12 w-12 rounded-xl
                    border-[#7A1E1E]/30
                      bg-[#7A1E1E]/10
                      flex items-center justify-center
                      transition-colors
                      group-hover:bg-red-500/14
                    "
                  >
                    <Icon className="h-6 w-6 text-[#D66A6A]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {risk.title}
                    </h3>

                    <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
                      {risk.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/10">
                      <div className="text-red-200/90 font-semibold text-[12px] sm:text-[13px] tracking-wide">
                        {risk.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={m.fadeUp.initial}
          whileInView={m.fadeUp.whileInView}
          viewport={m.viewport}
          className="mt-10 sm:mt-12 text-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="
              cursor-pointer
      inline-flex items-center justify-center gap-2
      rounded-xl
      px-6 sm:px-7 py-3.5
      text-[15px] sm:text-[16px]
      font-semibold
      bg-[#c9a961] text-[#071023]
      shadow-[0_18px_50px_rgba(201,169,97,0.18)]
      hover:bg-[#d4b870] transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/60
    "
          >
            <span>Review My Transaction</span>

            <svg
              className={[
                "w-5 h-5 transition-transform",
                isRTL ? "rotate-180" : "",
              ].join(" ")}
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
        </motion.div>
      </div>
    </section>
  );
}