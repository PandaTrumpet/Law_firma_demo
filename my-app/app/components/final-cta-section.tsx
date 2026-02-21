// "use client";

// import { Shield } from "lucide-react";
// import { useLocale } from "next-intl";
// import { motion } from "motion/react";
// import { useMotion } from "../lib/motion";

// export function FinalCTASection() {
//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       dir={isRTL ? "rtl" : "ltr"}
//       className="relative overflow-hidden text-white"
//     >
//       {/* Corporate background */}
//       <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
//         <div className="absolute -top-24 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-14 bg-[radial-gradient(circle,rgba(76,194,255,0.28),transparent_60%)]" />
//         <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.24),transparent_60%)]" />
//         <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
//       </div>

//       <div
//         className="
//           relative z-10 max-w-[1000px] mx-auto
//           px-4 sm:px-6 lg:px-12
//           pt-16 pb-16
//           md:pt-20 md:pb-20
//           lg:pt-24 lg:pb-24
//           text-center
//         "
//       >
//         <motion.div
//           variants={m.container}
//           initial="hidden"
//           whileInView="show"
//           viewport={m.viewport}
//         >
//           {/* Icon */}
//           <motion.div
//             variants={m.item}
//             className="
//               w-16 h-16 sm:w-20 sm:h-20
//               rounded-2xl
//               bg-gradient-to-br from-[#c9a961] to-[#a68a4e]
//               flex items-center justify-center
//               mx-auto
//               shadow-[0_22px_60px_rgba(201,169,97,0.22)]
//             "
//           >
//             <Shield className="text-[#071023]" size={isRTL ? 36 : 36} />
//           </motion.div>

//           {/* Heading */}
//           <motion.h2
//             variants={m.item}
//             className="
//               mt-7 sm:mt-8
//               font-semibold tracking-tight leading-[1.08]
//               text-[clamp(1.75rem,5.6vw,2.6rem)]
//               lg:text-[clamp(2.6rem,3.2vw,3.3rem)]
//             "
//           >
//             Real Estate in Israel
//             <br />
//             is a <span className="text-[#c9a961]">Serious Investment.</span>
//           </motion.h2>

//           {/* Subheading */}
//           <motion.p
//             variants={m.item}
//             className="
//               mt-5
//               text-slate-200/75 leading-relaxed
//               max-w-[70ch] mx-auto
//               text-[clamp(1.0rem,2.6vw,1.15rem)]
//               lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
//             "
//           >
//             Make sure it’s legally protected — with expert guidance you can
//             trust.
//           </motion.p>

//           {/* CTA */}
//           <motion.div variants={m.item} className="mt-8 sm:mt-10">
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="
//                 cursor-pointer
//                 group inline-flex items-center justify-center gap-3
//                 rounded-xl px-9 py-4 sm:px-12 sm:py-5
//                 bg-[#c9a961] text-[#071023]
//                 font-semibold text-base sm:text-lg
//                 shadow-[0_22px_60px_rgba(201,169,97,0.22)]
//                 transition-all duration-300 ease-[0.16,1,0.3,1]
//                 hover:bg-[#d4b870]
//                 hover:-translate-y-0.5
//               "
//             >
//               <span>Schedule a Consultation</span>

//               {/* Arrow (RTL flips) */}
//               <svg
//                 className={[
//                   "w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300",
//                   "group-hover:translate-x-0.5",
//                   isRTL ? "rotate-180 group-hover:-translate-x-0.5" : "",
//                 ].join(" ")}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>

//             <div className="mt-4 text-sm text-slate-200/55">
//               We respond within{" "}
//               <span className="text-white/80 font-semibold">24 hours</span>.
//             </div>
//           </motion.div>

//           {/* Stats panel */}
//           <motion.div
//             variants={m.item}
//             className="
//               mt-12 sm:mt-14
//               rounded-2xl
//               bg-[#132235]
//               border border-white/10
//               shadow-[0_25px_80px_rgba(0,0,0,0.42)]
//               p-6 sm:p-8
//             "
//           >
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//               {[
//                 { value: "500+", label: "Transactions" },
//                 { value: "₪3.2B", label: "Secured" },
//                 { value: "98%", label: "Success Rate" },
//                 { value: "24h", label: "Response Time" },
//               ].map((s) => (
//                 <div key={s.label} className="text-center">
//                   <div className="text-2xl sm:text-3xl font-bold text-[#c9a961]">
//                     {s.value}
//                   </div>
//                   <div className="mt-2 text-slate-200/60 text-xs sm:text-sm">
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Shield } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

export function FinalCTASection() {
  const t = useTranslations("finalCta");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-24 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-14 bg-[radial-gradient(circle,rgba(76,194,255,0.28),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.24),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
      </div>

      <div
        className="
          relative z-10 max-w-[1000px] mx-auto
          px-4 sm:px-6 lg:px-12
          pt-16 pb-16
          md:pt-20 md:pb-20
          lg:pt-24 lg:pb-24
          text-center
        "
      >
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
        >
          {/* Icon */}
          <motion.div
            variants={m.item}
            className="
              w-16 h-16 sm:w-20 sm:h-20
              rounded-2xl
              bg-gradient-to-br from-[#c9a961] to-[#a68a4e]
              flex items-center justify-center
              mx-auto
              shadow-[0_22px_60px_rgba(201,169,97,0.22)]
            "
          >
            <Shield className="text-[#071023]" size={36} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={m.item}
            className="
              mt-7 sm:mt-8
              font-semibold tracking-tight leading-[1.08]
              text-[clamp(1.75rem,5.6vw,2.6rem)]
              lg:text-[clamp(2.6rem,3.2vw,3.3rem)]
            "
          >
            {t("title.line1")}
            <br />
            {t("title.line2")}{" "}
            <span className="text-[#c9a961]">{t("title.accent")}</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={m.item}
            className="
              mt-5
              text-slate-200/75 leading-relaxed
              max-w-[70ch] mx-auto
              text-[clamp(1.0rem,2.6vw,1.15rem)]
              lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
            "
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA */}
          <motion.div variants={m.item} className="mt-8 sm:mt-10">
            <button
              onClick={() => scrollToSection("contact")}
              className="
                cursor-pointer
                group inline-flex items-center justify-center gap-3
                rounded-xl px-9 py-4 sm:px-12 sm:py-5
                bg-[#c9a961] text-[#071023]
                font-semibold text-base sm:text-lg
                shadow-[0_22px_60px_rgba(201,169,97,0.22)]
                transition-all duration-300 ease-[0.16,1,0.3,1]
                hover:bg-[#d4b870]
                hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/60
              "
            >
              <span>{t("cta")}</span>

              {/* Arrow (RTL flips) */}
              <svg
                className={[
                  "w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300",
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
            </button>

            <div className="mt-4 text-sm text-slate-200/55">
              {t("response.before")}{" "}
              <span className="text-white/80 font-semibold">
                {t("response.highlight")}
              </span>
              {t("response.after")}
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            variants={m.item}
            className="
              mt-12 sm:mt-14
              rounded-2xl
              bg-[#132235]
              border border-white/10
              shadow-[0_25px_80px_rgba(0,0,0,0.42)]
              p-6 sm:p-8
            "
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {(
                t.raw("stats") as unknown as { value: string; label: string }[]
              ).map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#c9a961]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-slate-200/60 text-xs sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}