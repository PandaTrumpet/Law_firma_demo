// import { CheckCircle2, Circle } from 'lucide-react';

// export function ProcessSection() {
//   const steps = [
//     {
//       number: '01',
//       title: 'Initial Consultation',
//       description:
//         'We review your situation, transaction details, and objectives. Our experts assess the complexity and provide a clear roadmap for your property transaction.',
//       duration: '1-2 days',
//       deliverables: ['Preliminary assessment', 'Fee structure', 'Timeline proposal', 'Team assignment'],
//     },
//     {
//       number: '02',
//       title: 'Legal & Document Review',
//       description:
//         'Comprehensive due diligence on the property, including title search, lien verification, and document analysis. We identify risks and ensure legal clarity.',
//       duration: '7-14 days',
//       deliverables: ['Title report', 'Lien search', 'Property history', 'Risk assessment'],
//     },
//     {
//       number: '03',
//       title: 'Contract Preparation & Signing',
//       description:
//         'We draft or review the purchase agreement, negotiate terms, and ensure your interests are protected. Final review and signing coordination.',
//       duration: '5-10 days',
//       deliverables: ['Contract draft', 'Terms negotiation', 'Final review', 'Signing coordination'],
//     },
//     {
//       number: '04',
//       title: 'Ownership Registration',
//       description:
//         'We manage the transfer of ownership at the Land Registry, payment coordination, and ensure all legal requirements are met for final registration.',
//       duration: '30-60 days',
//       deliverables: ['Registry filing', 'Transfer completion', 'Title deed', 'Final documentation'],
//     },
//   ];

//   return (
//     <section id="process" className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a] relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
//             <CheckCircle2 size={16} className="text-[#c9a961]" />
//             <span className="text-[#c9a961] text-sm font-semibold">Our Process</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Your Path to Secure<br />
//             <span className="text-[#c9a961]">Property Ownership</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             A streamlined, transparent process designed to protect your investment at every stage.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical Line - Desktop */}
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a961] via-[#c9a961]/50 to-[#c9a961]" />

//           {/* Steps */}
//           <div className="space-y-20">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`grid lg:grid-cols-2 gap-8 items-center ${
//                   index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
//                 }`}
//               >
//                 {/* Content */}
//                 <div
//                   className={`${
//                     index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
//                   }`}
//                 >
//                   <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 hover:border-[#c9a961]/50 transition-all">
//                     <div
//                       className={`flex items-center gap-4 mb-4 ${
//                         index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
//                       }`}
//                     >
//                       <span className="text-5xl font-bold text-[#c9a961]/30">{step.number}</span>
//                       <div className="px-3 py-1 bg-[#c9a961]/10 rounded-full">
//                         <span className="text-[#c9a961] text-xs font-semibold">{step.duration}</span>
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
//                     <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
//                     <div>
//                       <div className="text-sm font-semibold text-[#c9a961] mb-3">Key Deliverables:</div>
//                       <ul className="space-y-2">
//                         {step.deliverables.map((item, idx) => (
//                           <li
//                             key={idx}
//                             className={`flex items-center gap-2 text-sm text-gray-400 ${
//                               index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
//                             }`}
//                           >
//                             {index % 2 === 0 ? (
//                               <>
//                                 <span>{item}</span>
//                                 <CheckCircle2 size={16} className="text-[#c9a961]" />
//                               </>
//                             ) : (
//                               <>
//                                 <CheckCircle2 size={16} className="text-[#c9a961]" />
//                                 <span>{item}</span>
//                               </>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline Dot */}
//                 <div className="hidden lg:flex justify-center">
//                   <div className="relative">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-full flex items-center justify-center shadow-2xl shadow-[#c9a961]/30">
//                       {index === steps.length - 1 ? (
//                         <CheckCircle2 size={36} className="text-[#0a1628]" />
//                       ) : (
//                         <Circle size={36} className="text-[#0a1628]" />
//                       )}
//                     </div>
//                     {/* Pulse Animation */}
//                     <div className="absolute inset-0 bg-[#c9a961] rounded-full animate-ping opacity-20" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Stats */}
//         <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-[#c9a961] mb-2">43-90</div>
//             <div className="text-gray-400 text-sm">Average Days to Close</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-[#c9a961] mb-2">24/7</div>
//             <div className="text-gray-400 text-sm">Client Support</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-[#c9a961] mb-2">100%</div>
//             <div className="text-gray-400 text-sm">Transparency</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-[#c9a961] mb-2">Real-Time</div>
//             <div className="text-gray-400 text-sm">Status Updates</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";


export function ProcessSection() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We review your situation, transaction details, and objectives. Our experts assess the complexity and provide a clear roadmap for your property transaction.",
      duration: "1-2 days",
      deliverables: [
        "Preliminary assessment",
        "Fee structure",
        "Timeline proposal",
        "Team assignment",
      ],
    },
    {
      number: "02",
      title: "Legal & Document Review",
      description:
        "Comprehensive due diligence on the property, including title search, lien verification, and document analysis. We identify risks and ensure legal clarity.",
      duration: "7-14 days",
      deliverables: [
        "Title report",
        "Lien search",
        "Property history",
        "Risk assessment",
      ],
    },
    {
      number: "03",
      title: "Contract Preparation & Signing",
      description:
        "We draft or review the purchase agreement, negotiate terms, and ensure your interests are protected. Final review and signing coordination.",
      duration: "5-10 days",
      deliverables: [
        "Contract draft",
        "Terms negotiation",
        "Final review",
        "Signing coordination",
      ],
    },
    {
      number: "04",
      title: "Ownership Registration",
      description:
        "We manage the transfer of ownership at the Land Registry, payment coordination, and ensure all legal requirements are met for final registration.",
      duration: "30-60 days",
      deliverables: [
        "Registry filing",
        "Transfer completion",
        "Title deed",
        "Final documentation",
      ],
    },
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
        {/* Header (center) */}
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
                Our Process
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
            Your Path to Secure
            <br />
            <span className="text-[#c9a961]">Property Ownership</span>
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
            A streamlined, transparent process designed to protect your
            investment at every stage.
          </motion.p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="mt-12 lg:mt-16 relative">
          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a961]/70 via-[#c9a961]/25 to-[#c9a961]/70" />

          {/* Mobile line (left in LTR, right in RTL) */}
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

              // On desktop we alternate, but RTL flips the feel:
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
                    // alternate flow (dense) but in RTL we invert
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
                      // mobile padding offset so text doesn't overlap the line
                      "lg:col-span-1",
                      "pl-12",
                      isRTL ? "pl-0 pr-12" : "",
                      // desktop alignment
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
                          Key Deliverables:
                        </div>

                        <ul className="space-y-2">
                          {step.deliverables.map((item) => (
                            <li
                              key={item}
                              className={[
                                "flex items-center gap-2 text-sm text-slate-200/70",
                                isRTL ? "flex-row-reverse" : "flex-row",
                                // keep overall line direction correct
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

                      {/* subtle “learn more” feel without salesy */}
                      <div className="mt-6 pt-6 border-t border-white/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span
                          className={[
                            "inline-flex items-center gap-2 text-sm font-semibold text-[#c9a961]/85",
                            isRTL ? "flex-row-reverse" : "flex-row",
                          ].join(" ")}
                        >
                          View step details
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

                  {/* Desktop timeline dot */}
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
          {[
            { value: "43–90", label: "Average Days to Close" },
            { value: "24/7", label: "Client Support" },
            { value: "100%", label: "Transparency" },
            { value: "Real-Time", label: "Status Updates" },
          ].map((s) => (
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