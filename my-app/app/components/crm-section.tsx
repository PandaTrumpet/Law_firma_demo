// import { Bell, FileText, Lock, Smartphone } from 'lucide-react';

// export function CRMSection() {
//   const features = [
//     {
//       icon: Smartphone,
//       title: 'Online Transaction Status Tracking',
//       description: 'Monitor your property transaction progress in real-time through our secure client portal.',
//     },
//     {
//       icon: Bell,
//       title: 'WhatsApp Updates',
//       description: 'Receive instant notifications about critical milestones and document requirements.',
//     },
//     {
//       icon: Lock,
//       title: 'Secure Document Storage',
//       description: 'Access all your legal documents anytime, anywhere through encrypted cloud storage.',
//     },
//     {
//       icon: FileText,
//       title: 'Automated Deadline Reminders',
//       description: 'Never miss an important date with our intelligent reminder system.',
//     },
//   ];

//   return (
//     <section className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
//             <Smartphone size={16} className="text-emerald-400" />
//             <span className="text-emerald-400 text-sm font-semibold">Legal Tech Platform</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Full Transparency<br />
//             <span className="text-[#c9a961]">Throughout the Process</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Our cutting-edge legal technology platform keeps you informed and in control at every stage.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Features List */}
//           <div className="space-y-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-xl p-6 hover:border-emerald-500/40 transition-all group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
//                     <feature.icon size={24} className="text-emerald-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                     <p className="text-gray-400">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dashboard Mockup */}
//           <div className="relative">
//             {/* Main Dashboard */}
//             <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
//               {/* Header */}
//               <div className="bg-[#0a1628] border-b border-white/10 p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-white font-bold text-lg mb-1">Transaction Dashboard</div>
//                     <div className="text-gray-400 text-sm">Apt. 12B, Rothschild Blvd, Tel Aviv</div>
//                   </div>
//                   <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
//                     <span className="text-emerald-400 text-sm font-semibold">Active</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Dashboard Content */}
//               <div className="p-6 space-y-6">
//                 {/* Progress Bar */}
//                 <div>
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-white font-semibold text-sm">Overall Progress</span>
//                     <span className="text-[#c9a961] font-bold">65%</span>
//                   </div>
//                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//                     <div className="h-full w-[65%] bg-gradient-to-r from-[#c9a961] to-emerald-500 rounded-full" />
//                   </div>
//                 </div>

//                 {/* Timeline Items */}
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
//                     <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
//                       <svg
//                         className="w-5 h-5 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-white font-semibold text-sm">Due Diligence Completed</div>
//                       <div className="text-gray-400 text-xs mt-0.5">Feb 15, 2026</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-3 bg-[#c9a961]/10 rounded-lg border border-[#c9a961]/20">
//                     <div className="w-8 h-8 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0">
//                       <div className="w-3 h-3 bg-[#0a1628] rounded-full animate-pulse" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-white font-semibold text-sm">Contract Review in Progress</div>
//                       <div className="text-gray-400 text-xs mt-0.5">Expected: Feb 20, 2026</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
//                     <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <div className="w-3 h-3 bg-gray-500 rounded-full" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-gray-400 font-semibold text-sm">Final Registration</div>
//                       <div className="text-gray-500 text-xs mt-0.5">Pending previous steps</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Documents Section */}
//                 <div className="border-t border-white/10 pt-4">
//                   <div className="text-white font-semibold text-sm mb-3">Recent Documents</div>
//                   <div className="space-y-2">
//                     <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
//                       <FileText size={16} className="text-[#c9a961]" />
//                       <span>Title_Search_Report.pdf</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
//                       <FileText size={16} className="text-[#c9a961]" />
//                       <span>Property_Valuation.pdf</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Notification Overlay */}
//             <div className="absolute -bottom-6 -right-6 w-72 bg-[#25D366] rounded-2xl p-4 shadow-2xl border-4 border-[#141e2e] hidden lg:block">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
//                   <Bell size={20} className="text-[#25D366]" />
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-sm mb-1">WhatsApp Update</div>
//                   <div className="text-white/90 text-xs">
//                     Your contract has been reviewed. Please check the dashboard for details.
//                   </div>
//                   <div className="text-white/70 text-xs mt-1">Just now</div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Tech Overlay */}
//             <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Bell, FileText, Lock, Smartphone } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";


export function CRMSection() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const features = [
    {
      icon: Smartphone,
      title: "Online Transaction Status Tracking",
      description:
        "Monitor your property transaction progress in real-time through our secure client portal.",
    },
    {
      icon: Bell,
      title: "WhatsApp Updates",
      description:
        "Receive instant notifications about critical milestones and document requirements.",
    },
    {
      icon: Lock,
      title: "Secure Document Storage",
      description:
        "Access all your legal documents anytime, anywhere through encrypted cloud storage.",
    },
    {
      icon: FileText,
      title: "Automated Deadline Reminders",
      description:
        "Never miss an important date with our intelligent reminder system.",
    },
  ];

  return (
    <section
      id="crm"
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a961]/20 to-transparent" />
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
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#4CC2FF]/18 bg-[#4CC2FF]/10 backdrop-blur-xl">
              <Smartphone size={16} className="text-[#86D7FF]" />
              <span className="text-[#86D7FF] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                Legal Tech Platform
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
            Full Transparency
            <br />
            <span className="text-[#c9a961]">Throughout the Process</span>
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
            Our legal-tech platform keeps you informed and in control at every
            stage — with secure storage, proactive updates, and clear
            milestones.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features */}
          <motion.div
            variants={m.container}
            initial="hidden"
            whileInView="show"
            viewport={m.viewport}
            className="space-y-4 sm:space-y-5"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={m.item}
                  className="
                    group rounded-2xl p-5 sm:p-6
                    bg-[#132235]
                    border border-white/10
                    shadow-[0_25px_80px_rgba(0,0,0,0.42)]
                    transition-all duration-300 ease-[0.16,1,0.3,1]
                    hover:-translate-y-1
                    hover:border-[#4CC2FF]/28
                  "
                >
                  <div
                    className={[
                      "flex items-start gap-4",
                      isRTL
                        ? "flex-row-reverse text-right"
                        : "flex-row text-left",
                    ].join(" ")}
                  >
                    <div
                      className="
                        w-12 h-12 rounded-xl
                        bg-[#4CC2FF]/10 border border-[#4CC2FF]/16
                        flex items-center justify-center flex-shrink-0
                        transition-colors
                        group-hover:bg-[#4CC2FF]/14
                      "
                    >
                      <Icon size={22} className="text-[#86D7FF]" />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dashboard mock */}
          <motion.div
            initial={m.fadeUp.initial}
            whileInView={m.fadeUp.whileInView}
            viewport={m.viewport}
            className="relative"
          >
            {/* Main dashboard */}
            <div
              className="
                rounded-2xl overflow-hidden
                bg-[#132235]
                border border-white/10
                shadow-[0_35px_110px_rgba(0,0,0,0.55)]
              "
            >
              {/* Dashboard header */}
              <div className="bg-[#0B1726] border-b border-white/10 p-5 sm:p-6">
                <div
                  className={[
                    "flex items-start justify-between gap-4",
                    isRTL
                      ? "flex-row-reverse text-right"
                      : "flex-row text-left",
                  ].join(" ")}
                >
                  <div>
                    <div className="text-white font-semibold text-base sm:text-lg">
                      Transaction Dashboard
                    </div>
                    <div className="text-slate-200/60 text-xs sm:text-sm mt-1">
                      Apt. 12B, Rothschild Blvd, Tel Aviv
                    </div>
                  </div>

                  <div className="inline-flex items-center rounded-full px-3 py-1 bg-[#4CC2FF]/10 border border-[#4CC2FF]/16">
                    <span className="text-[#86D7FF] text-xs font-semibold tracking-wide">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-6">
                {/* Progress */}
                <div>
                  <div
                    className={[
                      "flex items-center justify-between mb-2",
                      isRTL ? "flex-row-reverse" : "flex-row",
                    ].join(" ")}
                  >
                    <span className="text-white font-semibold text-sm">
                      Overall Progress
                    </span>
                    <span className="text-[#c9a961] font-bold">65%</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-[#c9a961] to-[#4CC2FF] rounded-full" />
                  </div>
                </div>

                {/* Timeline items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-[#4CC2FF]/16 bg-[#4CC2FF]/10">
                    <div className="w-8 h-8 bg-[#4CC2FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-[#071023]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">
                        Due Diligence Completed
                      </div>
                      <div className="text-slate-200/60 text-xs mt-0.5">
                        Feb 15, 2026
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl border border-[#c9a961]/18 bg-[#c9a961]/10">
                    <div className="w-8 h-8 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-[#071023] rounded-full animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">
                        Contract Review in Progress
                      </div>
                      <div className="text-slate-200/60 text-xs mt-0.5">
                        Expected: Feb 20, 2026
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.04]">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-white/25 rounded-full" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-200/70 font-semibold text-sm">
                        Final Registration
                      </div>
                      <div className="text-slate-200/45 text-xs mt-0.5">
                        Pending previous steps
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white font-semibold text-sm mb-3">
                    Recent Documents
                  </div>

                  <div className="space-y-2">
                    {["Title_Search_Report.pdf", "Property_Valuation.pdf"].map(
                      (doc) => (
                        <div
                          key={doc}
                          className={[
                            "flex items-center gap-2 text-sm cursor-pointer",
                            "text-slate-200/60 hover:text-white transition-colors",
                            isRTL ? "flex-row-reverse" : "flex-row",
                          ].join(" ")}
                        >
                          <FileText size={16} className="text-[#c9a961]" />
                          <span>{doc}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp overlay (premium integrated, not neon block) */}
            <div
              className="
                hidden lg:block
                absolute -bottom-6
                rounded-2xl p-4
                bg-[#132235]
                border border-white/10
                shadow-[0_35px_110px_rgba(0,0,0,0.55)]
                w-72
              "
              style={{
                right: isRTL ? "auto" : "-1.5rem",
                left: isRTL ? "-1.5rem" : "auto",
              }}
            >
              <div
                className={[
                  "flex items-start gap-3",
                  isRTL ? "flex-row-reverse text-right" : "",
                ].join(" ")}
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center flex-shrink-0">
                  <Bell size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    WhatsApp Update
                  </div>
                  <div className="text-slate-200/70 text-xs mt-1 leading-relaxed">
                    Your contract has been reviewed. Please check the dashboard
                    for details.
                  </div>
                  <div className="text-slate-200/50 text-xs mt-2">Just now</div>
                </div>
              </div>
            </div>

            {/* subtle tech glow */}
            <div className="pointer-events-none absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(circle,rgba(76,194,255,0.16),transparent_60%)] blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}