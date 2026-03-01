

"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const testimonials = [
    {
      name: "David Cohen",
      role: "Tech Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1764084051461-d82772f90a5c?auto=format&fit=crop&w=1080&q=80",
      // ✅ quote stays EN
      quote:
        "LegalGuard made our ₪4.2M property purchase in Herzliya completely stress-free. Their due diligence uncovered issues the seller never disclosed, saving us hundreds of thousands.",
      transactionValue: "₪4,200,000",
      city: "Herzliya",
      rating: 5,
    },
    {
      name: "Sarah Levinson",
      role: "Investment Manager",
      image:
        "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?auto=format&fit=crop&w=1080&q=80",
      quote:
        "As a foreign investor, I needed a team I could trust completely. Their transparency and technology platform kept me informed throughout. Best decision I made.",
      transactionValue: "₪2,800,000",
      city: "Tel Aviv",
      rating: 5,
    },
    {
      name: "Michael Abrahamov",
      role: "Real Estate Developer",
      image:
        "https://images.unsplash.com/photo-1764084051461-d82772f90a5c?auto=format&fit=crop&w=1080&q=80",
      quote:
        "Professional, precise, and proactive. They handled our complex multi-property acquisition with exceptional expertise. Highly recommend for high-value transactions.",
      transactionValue: "₪8,500,000",
      city: "Tel Aviv",
      rating: 5,
    },
    {
      name: "Rachel Goldstein",
      role: "Returning Expat",
      image:
        "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?auto=format&fit=crop&w=1080&q=80",
      quote:
        "After 15 years abroad, buying property in Israel felt overwhelming. LegalGuard guided us through every step with patience and expertise. Exceptional service.",
      transactionValue: "₪3,100,000",
      city: "Ramat Aviv",
      rating: 5,
    },
    {
      name: "Alex Petrov",
      role: "Tech Executive",
      image:
        "https://images.unsplash.com/photo-1764084051461-d82772f90a5c?auto=format&fit=crop&w=1080&q=80",
      quote:
        "The legal tech platform is a game-changer. Real-time updates, document access, and WhatsApp notifications made the entire process transparent and efficient.",
      transactionValue: "₪5,700,000",
      city: "Tel Aviv",
      rating: 5,
    },
    {
      name: "Miriam Katz",
      role: "Private Investor",
      image:
        "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?auto=format&fit=crop&w=1080&q=80",
      quote:
        "Their attention to detail is remarkable. They caught several contract issues that could have led to future disputes. Worth every shekel.",
      transactionValue: "₪2,400,000",
      city: "Netanya",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-24 left-[-14%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.24),transparent_60%)]" />
        <div className="absolute -bottom-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-14 bg-[radial-gradient(circle,rgba(76,194,255,0.28),transparent_60%)]" />
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
              <Star size={16} className="text-[#c9a961] fill-[#c9a961]" />
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
          className="mt-12 lg:mt-16 grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((x) => (
            <motion.article
              key={`${x.name}-${x.transactionValue}`}
              variants={m.item}
              className="
                group relative overflow-hidden
                rounded-2xl p-6 sm:p-7
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.42)]
                transition-all duration-300 ease-[0.16,1,0.3,1]
                hover:-translate-y-1
                hover:border-[#c9a961]/35
              "
            >
              {/* Quote bubble */}
              <div
                className={[
                  "pointer-events-none absolute -top-6 h-24 w-24 rounded-full flex items-center justify-center opacity-50",
                  isRTL ? "-left-6" : "-right-6",
                  "bg-[#c9a961]/[0.06]",
                ].join(" ")}
                aria-hidden="true"
              >
                <Quote size={44} className="text-[#c9a961]" />
              </div>

              {/* Rating */}
              <div
                className={[
                  "flex gap-1",
                  isRTL ? "justify-end" : "justify-start",
                ].join(" ")}
              >
                {Array.from({ length: x.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#c9a961] fill-[#c9a961]"
                  />
                ))}
              </div>

              {/* Quote (✅ stays EN, no i18n) */}
              <p
                className={[
                  "mt-4 text-slate-200/80 leading-relaxed relative z-10",
                  "text-sm sm:text-[15px]",
                  isRTL ? "text-right" : "text-left",
                ].join(" ")}
              >
                “{x.quote}”
              </p>

              {/* Client */}
              <div
                className={[
                  "mt-6 pt-6 border-t border-white/10 flex items-center gap-4",
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left",
                ].join(" ")}
              >
                <div className="h-12 w-12 rounded-full overflow-hidden border border-[#c9a961]/25">
                  <ImageWithFallback
                    src={x.image}
                    alt={x.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{x.name}</div>
                  <div className="text-slate-200/55 text-sm">{x.role}</div>
                </div>
              </div>

              {/* Deal info */}
              <div
                className={[
                  "mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4",
                  isRTL ? "flex-row-reverse" : "flex-row",
                ].join(" ")}
              >
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[#c9a961] font-bold">
                    {x.transactionValue}
                  </div>
                  <div className="text-slate-200/50 text-xs mt-0.5">
                    {x.city}
                  </div>
                </div>

                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full px-3 py-1
                    bg-white/[0.04] border border-white/10
                    text-slate-200/70 text-xs font-semibold
                  "
                >
                  <CheckCircle2 size={14} className="text-[#c9a961]" />
                  {t("verified")}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={m.fadeUp.initial}
          whileInView={m.fadeUp.whileInView}
          viewport={m.viewport}
          className="
            mt-12 lg:mt-16
            rounded-2xl p-6 sm:p-8
            bg-[#132235]
            border border-white/10
            shadow-[0_25px_80px_rgba(0,0,0,0.42)]
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "4.9/5", label: t("stats.s1") },
              { value: "500+", label: t("stats.s2") },
              { value: "₪3.2B+", label: t("stats.s3") },
              { value: "98%", label: t("stats.s4") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c9a961]">
                  {s.value}
                </div>
                <div className="mt-2 text-slate-200/60 text-xs sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}