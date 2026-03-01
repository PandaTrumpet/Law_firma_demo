
"use client";

import { Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "he";
  const reduce = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: reduce
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="top"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050B16] text-white"
      aria-labelledby="hero-title"
    >
      {/* ✅ BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768245076812-143d7794d1f7?auto=format&fit=crop&w=2400&q=80"
          alt={t("media.skylineAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/40 via-[#050B16]/68 to-[#050B16]/90" />

        <div className="absolute -top-24 right-[-10%] h-80 w-80 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
        <div className="absolute -bottom-28 left-[-12%] h-96 w-96 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className="
              grid lg:grid-cols-2 items-center gap-10 lg:gap-16
              pt-24 pb-14
              md:pt-28 md:pb-16
              lg:pt-32 lg:pb-20
            "
          >
            {/* LEFT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className={isRTL ? "text-right" : "text-left"}
            >
              {/* Trust badges */}
              <motion.div
                variants={item}
                className={[
                  "flex flex-wrap gap-2 sm:gap-3",
                  isRTL ? "justify-end" : "justify-start",
                ].join(" ")}
              >
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <Shield size={16} className="text-[#c9a961]" />
                  <span className="text-slate-200/85 text-[12px] sm:text-[13px] tracking-wide">
                    {t("badges.properties")}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <TrendingUp size={16} className="text-[#c9a961]" />
                  <span className="text-slate-200/85 text-[12px] sm:text-[13px] tracking-wide">
                    {t("badges.investors")}
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                id="hero-title"
                variants={item}
                className="
                  mt-6 font-semibold tracking-tight leading-[1.05]
                  text-[clamp(2.05rem,6vw,3.35rem)]
                  lg:text-[clamp(3.1rem,3.8vw,4.25rem)]
                "
              >
                {t("title.line1")}
                <br />
                {t("title.line2")}
                <span className="block mt-3 text-[#c9a961]">
                  {t("title.accent")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={item}
                className="
                  mt-5 text-slate-200/80 leading-relaxed max-w-[60ch]
                  text-[clamp(1.02rem,2.5vw,1.2rem)]
                  lg:text-[clamp(1.15rem,1.35vw,1.35rem)]
                "
              >
                {t("subtitle")}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={item}
                className={[
                  "mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4",
                  isRTL ? "sm:flex-row-reverse" : "",
                ].join(" ")}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center
                    rounded-xl px-6 sm:px-7 py-3.5
                    text-[15px] sm:text-[16px]
                    font-semibold
                    bg-[#c9a961] text-[#071023]
                    shadow-[0_18px_50px_rgba(201,169,97,0.18)]
                    hover:bg-[#d4b870] transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/60
                  "
                >
                  {t("cta.primary")}
                </button>

                <button
                  onClick={() => scrollToSection("calculator")}
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center
                    rounded-xl px-6 sm:px-7 py-3.5
                    text-[15px] sm:text-[16px]
                    font-semibold
                    bg-white/[0.05] text-white
                    border border-white/12
                    backdrop-blur-xl
                    hover:bg-white/[0.08] transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50
                  "
                >
                  {t("cta.secondary")}
                </button>
              </motion.div>

              {/* Metrics */}
              <motion.div
                variants={item}
                className="
                  mt-9 grid grid-cols-3 gap-4 sm:gap-6
                  pt-7 border-t border-white/10
                "
              >
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[22px] sm:text-3xl font-semibold text-[#c9a961]">
                    500+
                  </div>
                  <div className="text-slate-300/70 text-[11px] sm:text-sm mt-1">
                    {t("metrics.transactions")}
                  </div>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[22px] sm:text-3xl font-semibold text-[#c9a961]">
                    ₪3.2B
                  </div>
                  <div className="text-slate-300/70 text-[11px] sm:text-sm mt-1">
                    {t("metrics.secured")}
                  </div>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[22px] sm:text-3xl font-semibold text-[#c9a961]">
                    98%
                  </div>
                  <div className="text-slate-300/70 text-[11px] sm:text-sm mt-1">
                    {t("metrics.success")}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT visuals */}
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={
                reduce
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: EASE },
                    }
              }
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Mobile single card */}
              <div className="lg:hidden mt-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                  <div className="relative h-56">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1598139384902-5a8217874645?auto=format&fit=crop&w=1600&q=80"
                      alt={t("media.officeAlt")}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/75 to-transparent" />
                  </div>
                  <div
                    className={["p-5", isRTL ? "text-right" : "text-left"].join(
                      " ",
                    )}
                  >
                    <div className="text-[#c9a961] text-xs font-semibold tracking-wider">
                      {t("card.kicker")}
                    </div>
                    <div className="mt-1 text-white text-lg font-semibold">
                      {t("card.title")}
                    </div>
                    <div className="mt-2 text-slate-300/70 text-sm">
                      {t("card.subtitle")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1598139384902-5a8217874645?auto=format&fit=crop&w=1600&q=80"
                      alt={t("media.officeAlt")}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/65 to-transparent" />
                  </div>

                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=crop&w=1600&q=80"
                      alt={t("media.propertyAlt")}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/65 to-transparent" />
                  </div>
                </div>

                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?auto=format&fit=crop&w=1600&q=80"
                      alt={t("media.attorneyAlt")}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/65 to-transparent" />
                  </div>

                  <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                    <div className="text-[#c9a961] text-xs font-semibold tracking-wider">
                      {t("card.kicker")}
                    </div>
                    <div className="mt-1 text-white text-lg font-semibold">
                      {t("card.title")}
                    </div>
                    <div className="mt-2 text-slate-300/70 text-sm">
                      {t("card.subtitle")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block pointer-events-none absolute -bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CC2FF]/25 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}