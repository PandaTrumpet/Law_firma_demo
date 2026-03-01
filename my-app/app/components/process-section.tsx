
"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

export function ProcessSection() {
  const t = useTranslations("process");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const steps = [
    {
      number: "01",
      title: t("steps.s1.title"),
      description: t("steps.s1.description"),
      duration: t("steps.s1.duration"),
      deliverables: [
        t("steps.s1.deliverables.d1"),
        t("steps.s1.deliverables.d2"),
        t("steps.s1.deliverables.d3"),
        t("steps.s1.deliverables.d4"),
      ],
    },
    {
      number: "02",
      title: t("steps.s2.title"),
      description: t("steps.s2.description"),
      duration: t("steps.s2.duration"),
      deliverables: [
        t("steps.s2.deliverables.d1"),
        t("steps.s2.deliverables.d2"),
        t("steps.s2.deliverables.d3"),
        t("steps.s2.deliverables.d4"),
      ],
    },
    {
      number: "03",
      title: t("steps.s3.title"),
      description: t("steps.s3.description"),
      duration: t("steps.s3.duration"),
      deliverables: [
        t("steps.s3.deliverables.d1"),
        t("steps.s3.deliverables.d2"),
        t("steps.s3.deliverables.d3"),
        t("steps.s3.deliverables.d4"),
      ],
    },
    {
      number: "04",
      title: t("steps.s4.title"),
      description: t("steps.s4.description"),
      duration: t("steps.s4.duration"),
      deliverables: [
        t("steps.s4.deliverables.d1"),
        t("steps.s4.deliverables.d2"),
        t("steps.s4.deliverables.d3"),
        t("steps.s4.deliverables.d4"),
      ],
    },
  ];

  const stats = [
    { value: t("stats.s1.value"), label: t("stats.s1.label") },
    { value: t("stats.s2.value"), label: t("stats.s2.label") },
    { value: t("stats.s3.value"), label: t("stats.s3.label") },
    { value: t("stats.s4.value"), label: t("stats.s4.label") },
  ];

  return (
    <section
      id="process"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-24 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-14 bg-[radial-gradient(circle,rgba(76,194,255,0.30),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.24),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
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
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#c9a961]/20 bg-[#c9a961]/10 backdrop-blur-xl">
              <CheckCircle2 size={16} className="text-[#c9a961]" />
              <span className="text-[#c9a961] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                {t("badge")}
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
            {t("title.line1")}
            <br />
            <span className="text-[#c9a961]">{t("title.accent")}</span>
          </motion.h2>

          <motion.p
            variants={m.item}
            className="
              mt-5 mx-auto
              text-slate-200/75 leading-relaxed max-w-[70ch]
              text-[clamp(1.0rem,2.6vw,1.15rem)]
              lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
            "
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="mt-12 lg:mt-16 relative">
          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a961]/70 via-[#c9a961]/25 to-[#c9a961]/70" />

          {/* Mobile line */}
          <div
            className={[
              "lg:hidden absolute top-0 bottom-0 w-px",
              isRTL ? "right-5" : "left-5",
              "bg-gradient-to-b from-[#c9a961]/55 via-[#c9a961]/18 to-[#c9a961]/55",
            ].join(" ")}
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const alignRightOnDesktop = isRTL ? !isEven : isEven;

              return (
                <motion.div
                  key={step.number}
                  initial={m.fadeUp.initial}
                  whileInView={m.fadeUp.whileInView}
                  viewport={m.viewport}
                  className={[
                    "relative grid gap-6 lg:gap-10 items-center",
                    "lg:grid-cols-2",
                    alignRightOnDesktop
                      ? "lg:grid-flow-col"
                      : "lg:grid-flow-col-dense",
                  ].join(" ")}
                >
                  {/* Mobile dot */}
                  <div
                    className={[
                      "lg:hidden absolute top-7",
                      isRTL
                        ? "right-5 -translate-x-1/2"
                        : "left-5 -translate-x-1/2",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a68a4e] shadow-[0_18px_50px_rgba(201,169,97,0.20)] flex items-center justify-center">
                        {index === steps.length - 1 ? (
                          <CheckCircle2 className="h-5 w-5 text-[#071023]" />
                        ) : (
                          <Circle className="h-5 w-5 text-[#071023]" />
                        )}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#c9a961] opacity-15 animate-ping" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={[
                      "lg:col-span-1",
                      "pl-12",
                      isRTL ? "pl-0 pr-12" : "",
                      alignRightOnDesktop
                        ? "lg:text-right lg:pr-16 lg:pl-0"
                        : "lg:text-left lg:pl-16 lg:pr-0",
                    ].join(" ")}
                  >
                    <div
                      className="
                        group rounded-2xl p-6 sm:p-7 lg:p-8
                        bg-[#132235]
                        border border-white/10
                        shadow-[0_25px_80px_rgba(0,0,0,0.42)]
                        transition-all duration-300 ease-[0.16,1,0.3,1]
                        hover:-translate-y-1
                        hover:border-[#c9a961]/35
                      "
                    >
                      <div
                        className={[
                          "flex items-center gap-4 mb-4",
                          alignRightOnDesktop
                            ? "lg:justify-end"
                            : "lg:justify-start",
                          isRTL ? "flex-row-reverse" : "flex-row",
                        ].join(" ")}
                      >
                        <span className="text-4xl sm:text-5xl font-bold text-[#c9a961]/22">
                          {step.number}
                        </span>

                        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[#c9a961]/10 border border-[#c9a961]/15">
                          <span className="text-[#c9a961] text-[11px] sm:text-xs font-semibold tracking-wide">
                            {step.duration}
                          </span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
                        {step.description}
                      </p>

                      <div className="mt-6">
                        <div className="text-sm font-semibold text-[#c9a961] mb-3">
                          {t("deliverablesTitle")}
                        </div>

                        <ul className="space-y-2">
                          {step.deliverables.map((item) => (
                            <li
                              key={item}
                              className={[
                                "flex items-center gap-2 text-sm text-slate-200/70",
                                isRTL ? "flex-row-reverse" : "flex-row",
                                alignRightOnDesktop
                                  ? "lg:justify-end"
                                  : "lg:justify-start",
                              ].join(" ")}
                            >
                              <CheckCircle2
                                size={16}
                                className="text-[#c9a961]"
                              />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span
                          className={[
                            "inline-flex items-center gap-2 text-sm font-semibold text-[#c9a961]/85",
                            isRTL ? "flex-row-reverse" : "flex-row",
                          ].join(" ")}
                        >
                          {t("viewDetails")}
                          <svg
                            className={[
                              "w-4 h-4 transition-transform duration-300",
                              isRTL
                                ? "rotate-180 group-hover:-translate-x-0.5"
                                : "group-hover:translate-x-0.5",
                            ].join(" ")}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop dot */}
                  <div className="hidden lg:flex justify-center">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a68a4e] shadow-[0_22px_60px_rgba(201,169,97,0.22)] flex items-center justify-center">
                        {index === steps.length - 1 ? (
                          <CheckCircle2 className="h-7 w-7 text-[#071023]" />
                        ) : (
                          <Circle className="h-7 w-7 text-[#071023]" />
                        )}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#c9a961] opacity-15 animate-ping" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="mt-14 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={m.item}
              className="
                rounded-2xl p-5 sm:p-6
                bg-[#132235]
                border border-white/10
                text-center
              "
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a961]">
                {s.value}
              </div>
              <div className="mt-2 text-slate-200/65 text-xs sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}