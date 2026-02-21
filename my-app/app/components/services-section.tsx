// "use client";

// import {
//   Shield,
//   Search,
//   TrendingUp,
//   Scale,
//   FileText,
//   Building2,
// } from "lucide-react";
// import { useLocale } from "next-intl";
// import { motion } from "motion/react";
// import { useMotion } from "../lib/motion";

// export function ServicesSection() {
//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

//   const services = [
//     {
//       icon: Shield,
//       title: "Full Transaction Management",
//       description:
//         "End-to-end legal support from initial due diligence through final ownership registration. We handle every legal aspect of your property transaction.",
//       features: [
//         "Contract drafting & review",
//         "Negotiation support",
//         "Closing coordination",
//         "Post-sale assistance",
//       ],
//       // keep premium gold as the main accent
//       accent: "gold",
//     },
//     {
//       icon: Search,
//       title: "Property Due Diligence",
//       description:
//         "Comprehensive investigation of property history, ownership status, liens, restrictions, and potential legal issues before you commit.",
//       features: [
//         "Title search",
//         "Lien verification",
//         "Zoning compliance",
//         "Building permit review",
//       ],
//       accent: "blue",
//     },
//     {
//       icon: TrendingUp,
//       title: "Investment Legal Support",
//       description:
//         "Specialized legal counsel for foreign investors and high-net-worth individuals seeking to build their Israeli real estate portfolio.",
//       features: [
//         "Tax optimization",
//         "Entity structuring",
//         "Multi-property strategy",
//         "Exit planning",
//       ],
//       accent: "emerald",
//     },
//     {
//       icon: Scale,
//       title: "Complex Legal Cases & Disputes",
//       description:
//         "Expert representation in property disputes, breach of contract, fraud claims, and litigation related to real estate transactions.",
//       features: [
//         "Dispute resolution",
//         "Court representation",
//         "Arbitration & mediation",
//         "Damage claims",
//       ],
//       accent: "violet",
//     },
//     {
//       icon: FileText,
//       title: "Lease & Contract Agreements",
//       description:
//         "Professional drafting and review of lease agreements, rental contracts, and commercial property agreements to protect your interests.",
//       features: [
//         "Lease drafting",
//         "Tenant agreements",
//         "Commercial contracts",
//         "Terms negotiation",
//       ],
//       accent: "amber",
//     },
//     {
//       icon: Building2,
//       title: "Development & Construction Legal",
//       description:
//         "Legal guidance for property development projects, construction contracts, and contractor agreements in Israel.",
//       features: [
//         "Construction contracts",
//         "Permit assistance",
//         "Contractor disputes",
//         "Project compliance",
//       ],
//       accent: "cyan",
//     },
//   ] as const;

//   const getAccent = (accent: (typeof services)[number]["accent"]) => {
//     // Subtle: no neon gradients, only soft ring + icon background tint
//     switch (accent) {
//       case "gold":
//         return {
//           ring: "ring-[#c9a961]/25",
//           iconBg: "bg-[#c9a961]/12",
//           iconBorder: "border-[#c9a961]/22",
//           iconColor: "text-[#c9a961]",
//         };
//       case "blue":
//         return {
//           ring: "ring-[#4CC2FF]/20",
//           iconBg: "bg-[#4CC2FF]/10",
//           iconBorder: "border-[#4CC2FF]/18",
//           iconColor: "text-[#86D7FF]",
//         };
//       case "emerald":
//         return {
//           ring: "ring-emerald-400/15",
//           iconBg: "bg-emerald-400/10",
//           iconBorder: "border-emerald-400/15",
//           iconColor: "text-emerald-200",
//         };
//       case "violet":
//         return {
//           ring: "ring-violet-400/15",
//           iconBg: "bg-violet-400/10",
//           iconBorder: "border-violet-400/15",
//           iconColor: "text-violet-200",
//         };
//       case "amber":
//         return {
//           ring: "ring-amber-300/15",
//           iconBg: "bg-amber-300/10",
//           iconBorder: "border-amber-300/15",
//           iconColor: "text-amber-200",
//         };
//       case "cyan":
//         return {
//           ring: "ring-cyan-300/15",
//           iconBg: "bg-cyan-300/10",
//           iconBorder: "border-cyan-300/15",
//           iconColor: "text-cyan-200",
//         };
//       default:
//         return {
//           ring: "ring-white/10",
//           iconBg: "bg-white/5",
//           iconBorder: "border-white/10",
//           iconColor: "text-white",
//         };
//     }
//   };

//   return (
//     <section
//       id="services"
//       dir={isRTL ? "rtl" : "ltr"}
//       className="relative overflow-hidden text-white"
//     >
//       {/* Corporate background (per your new rule) */}
//       <div className="absolute inset-0 -z-10 bg-[#0C1A2A]" />
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
//         <div className="absolute -top-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
//         <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />
//         <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
//       </div>

//       <div
//         className="
//           relative z-10 max-w-[1400px] mx-auto
//           px-4 sm:px-6 lg:px-12
//           pt-16 pb-16
//           md:pt-20 md:pb-20
//           lg:pt-24 lg:pb-24
//         "
//       >
//         {/* Header (center as in your requirement) */}
//         <motion.div
//           variants={m.container}
//           initial="hidden"
//           whileInView="show"
//           viewport={m.viewport}
//           className="text-center"
//         >
//           <motion.div
//             variants={m.item}
//             className="mb-6 flex items-center justify-center gap-2"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#c9a961]/20 bg-[#c9a961]/10 backdrop-blur-xl">
//               <Shield size={16} className="text-[#c9a961]" />
//               <span className="text-[#c9a961] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
//                 Our Services
//               </span>
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={m.item}
//             className="
//               font-semibold tracking-tight leading-[1.08]
//               text-[clamp(1.75rem,5.6vw,2.6rem)]
//               lg:text-[clamp(2.6rem,3.2vw,3.3rem)]
//             "
//           >
//             Premium Legal Services
//             <br />
//             <span className="text-[#c9a961]">for Your Real Estate Needs</span>
//           </motion.h2>

//           <motion.p
//             variants={m.item}
//             className="
//               mt-5 mx-auto
//               text-slate-200/75 leading-relaxed max-w-[70ch]
//               text-[clamp(1.0rem,2.6vw,1.15rem)]
//               lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
//             "
//           >
//             Comprehensive legal protection tailored for high-value property
//             transactions in Israel.
//           </motion.p>
//         </motion.div>

//         {/* Grid */}
//         <motion.div
//           variants={m.container}
//           initial="hidden"
//           whileInView="show"
//           viewport={m.viewport}
//           className="mt-10 grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3"
//         >
//           {services.map((service) => {
//             const Icon = service.icon;
//             const a = getAccent(service.accent);

//             return (
//               <motion.div
//                 key={service.title}
//                 variants={m.item}

//                 className="
//   group relative rounded-2xl p-6 sm:p-7
//   bg-[#132235]
//   border border-white/10
//   shadow-[0_25px_80px_rgba(0,0,0,0.42)]
//   transition-all duration-300 ease-[0.16,1,0.3,1]
//   hover:-translate-y-2
//   hover:border-[#c9a961]/40
//   hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]
// "
//               >
//                 {/* subtle top line */}
//                 <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

//                 {/* Icon */}
//                 <div
//                   className={[
//                     "h-12 w-12 sm:h-14 sm:w-14 rounded-xl",
//                     "border",
//                     "flex items-center justify-center",
//                     "shadow-[0_12px_30px_rgba(0,0,0,0.30)]",
//                     a.iconBg,
//                     a.iconBorder,
//                   ].join(" ")}
//                 >
//                   <Icon
//                     className={["h-6 w-6 sm:h-7 sm:w-7", a.iconColor].join(" ")}
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#c9a961]">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
//                   {service.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="mt-5 space-y-3">
//                   {service.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className={[
//                         "flex items-start gap-2.5 text-sm sm:text-[14px]",
//                         "text-slate-200/70",
//                         isRTL
//                           ? "flex-row-reverse text-right"
//                           : "flex-row text-left",
//                       ].join(" ")}
//                     >
//                       <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
//                         <svg
//                           className="h-3.5 w-3.5 text-[#c9a961]"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           aria-hidden="true"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </span>
//                       <span className="leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Learn more (premium subtle, not “salesy”) */}
//                 <div className="mt-6 pt-6 border-t border-white/10">
//                   <span
//                     className={[
//                       "inline-flex items-center gap-2 text-sm font-semibold",
//                       "text-[#c9a961]/85",
//                       "opacity-90 group-hover:opacity-100 transition-opacity",
//                       isRTL ? "flex-row-reverse" : "flex-row",
//                     ].join(" ")}
//                   >
//                     Learn More
//                     <svg
//                       className={[
//                         "w-4 h-4 transition-transform duration-300",
//                         isRTL
//                           ? "rotate-180 group-hover:-translate-x-0.5"
//                           : "group-hover:translate-x-0.5",
//                       ].join(" ")}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA (center) */}
//         <motion.div
//           initial={m.fadeUp.initial}
//           whileInView={m.fadeUp.whileInView}
//           viewport={m.viewport}
//           className="mt-12 sm:mt-14 text-center"
//         >
//           <p className="text-slate-200/70 mb-5 text-sm sm:text-base">
//             Not sure which service you need?
//           </p>
//           <button
//             className="
//               inline-flex items-center justify-center
//               rounded-xl
//               px-6 sm:px-7 py-3.5
//               text-[15px] sm:text-[16px]
//               font-semibold
//               bg-white/[0.06] text-white
//               border border-white/12
//               backdrop-blur-xl
//               hover:bg-white/[0.09] transition-colors
//               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50
//             "
//           >
//             Schedule a Free Consultation
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Shield,
  Search,
  TrendingUp,
  Scale,
  FileText,
  Building2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const services = [
    {
      icon: Shield,
      title: t("cards.full.title"),
      description: t("cards.full.description"),
      features: [
        t("cards.full.features.0"),
        t("cards.full.features.1"),
        t("cards.full.features.2"),
        t("cards.full.features.3"),
      ],
      accent: "gold",
    },
    {
      icon: Search,
      title: t("cards.dd.title"),
      description: t("cards.dd.description"),
      features: [
        t("cards.dd.features.0"),
        t("cards.dd.features.1"),
        t("cards.dd.features.2"),
        t("cards.dd.features.3"),
      ],
      accent: "blue",
    },
    {
      icon: TrendingUp,
      title: t("cards.invest.title"),
      description: t("cards.invest.description"),
      features: [
        t("cards.invest.features.0"),
        t("cards.invest.features.1"),
        t("cards.invest.features.2"),
        t("cards.invest.features.3"),
      ],
      accent: "emerald",
    },
    {
      icon: Scale,
      title: t("cards.disputes.title"),
      description: t("cards.disputes.description"),
      features: [
        t("cards.disputes.features.0"),
        t("cards.disputes.features.1"),
        t("cards.disputes.features.2"),
        t("cards.disputes.features.3"),
      ],
      accent: "violet",
    },
    {
      icon: FileText,
      title: t("cards.lease.title"),
      description: t("cards.lease.description"),
      features: [
        t("cards.lease.features.0"),
        t("cards.lease.features.1"),
        t("cards.lease.features.2"),
        t("cards.lease.features.3"),
      ],
      accent: "amber",
    },
    {
      icon: Building2,
      title: t("cards.dev.title"),
      description: t("cards.dev.description"),
      features: [
        t("cards.dev.features.0"),
        t("cards.dev.features.1"),
        t("cards.dev.features.2"),
        t("cards.dev.features.3"),
      ],
      accent: "cyan",
    },
  ] as const;

  const getAccent = (accent: (typeof services)[number]["accent"]) => {
    switch (accent) {
      case "gold":
        return {
          ring: "ring-[#c9a961]/25",
          iconBg: "bg-[#c9a961]/12",
          iconBorder: "border-[#c9a961]/22",
          iconColor: "text-[#c9a961]",
        };
      case "blue":
        return {
          ring: "ring-[#4CC2FF]/20",
          iconBg: "bg-[#4CC2FF]/10",
          iconBorder: "border-[#4CC2FF]/18",
          iconColor: "text-[#86D7FF]",
        };
      case "emerald":
        return {
          ring: "ring-emerald-400/15",
          iconBg: "bg-emerald-400/10",
          iconBorder: "border-emerald-400/15",
          iconColor: "text-emerald-200",
        };
      case "violet":
        return {
          ring: "ring-violet-400/15",
          iconBg: "bg-violet-400/10",
          iconBorder: "border-violet-400/15",
          iconColor: "text-violet-200",
        };
      case "amber":
        return {
          ring: "ring-amber-300/15",
          iconBg: "bg-amber-300/10",
          iconBorder: "border-amber-300/15",
          iconColor: "text-amber-200",
        };
      case "cyan":
        return {
          ring: "ring-cyan-300/15",
          iconBg: "bg-cyan-300/10",
          iconBorder: "border-cyan-300/15",
          iconColor: "text-cyan-200",
        };
      default:
        return {
          ring: "ring-white/10",
          iconBg: "bg-white/5",
          iconBorder: "border-white/10",
          iconColor: "text-white",
        };
    }
  };

  return (
    <section
      id="services"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0C1A2A]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />
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
              <Shield size={16} className="text-[#c9a961]" />
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

        {/* Grid */}
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="mt-10 grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const a = getAccent(service.accent);

            return (
              <motion.div
                key={service.title}
                variants={m.item}
                className="
                  group relative rounded-2xl p-6 sm:p-7
                  bg-[#132235]
                  border border-white/10
                  shadow-[0_25px_80px_rgba(0,0,0,0.42)]
                  transition-all duration-300 ease-[0.16,1,0.3,1]
                  hover:-translate-y-2
                  hover:border-[#c9a961]/40
                  hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]
                "
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                <div
                  className={[
                    "h-12 w-12 sm:h-14 sm:w-14 rounded-xl",
                    "border",
                    "flex items-center justify-center",
                    "shadow-[0_12px_30px_rgba(0,0,0,0.30)]",
                    a.iconBg,
                    a.iconBorder,
                  ].join(" ")}
                >
                  <Icon
                    className={["h-6 w-6 sm:h-7 sm:w-7", a.iconColor].join(" ")}
                  />
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#c9a961]">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={[
                        "flex items-start gap-2.5 text-sm sm:text-[14px]",
                        "text-slate-200/70",
                        isRTL
                          ? "flex-row-reverse text-right"
                          : "flex-row text-left",
                      ].join(" ")}
                    >
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        <svg
                          className="h-3.5 w-3.5 text-[#c9a961]"
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
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span
                    className={[
                      "inline-flex items-center gap-2 text-sm font-semibold",
                      "text-[#c9a961]/85",
                      "opacity-90 group-hover:opacity-100 transition-opacity",
                      isRTL ? "flex-row-reverse" : "flex-row",
                    ].join(" ")}
                  >
                    {t("learnMore")}
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={m.fadeUp.initial}
          whileInView={m.fadeUp.whileInView}
          viewport={m.viewport}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-slate-200/70 mb-5 text-sm sm:text-base">
            {t("bottom.note")}
          </p>

          <button
            className="
              inline-flex items-center justify-center
              rounded-xl
              px-6 sm:px-7 py-3.5
              text-[15px] sm:text-[16px]
              font-semibold
              bg-white/[0.06] text-white
              border border-white/12
              backdrop-blur-xl
              hover:bg-white/[0.09] transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50
            "
          >
            {t("bottom.cta")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}