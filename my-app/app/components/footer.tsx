

"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useMotion } from "../lib/motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("footer");
  const m = useMotion({ y: 14, stagger: 0.06, delay: 0.05, duration: 0.7 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const quickLinks = t.raw("quickLinks") as unknown as {
    id: string;
    label: string;
  }[];
  const services = t.raw("services") as unknown as string[];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-28 right-[-14%] h-96 w-96 rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(76,194,255,0.24),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-10 bg-[radial-gradient(circle,rgba(201,169,97,0.22),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-10">
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="grid gap-10 lg:gap-12 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={m.item}>
            <div
              className={[
                "cursor-pointer",
                "flex items-center gap-3",
                isRTL ? "flex-row-reverse" : "",
              ].join(" ")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-md flex items-center justify-center shadow-[0_18px_45px_rgba(201,169,97,0.18)]">
                <span className="text-[#071023] font-bold text-lg">L</span>
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="text-white font-semibold text-lg tracking-tight">
                  LegalGuard
                </div>
                <div className="text-[#c9a961] text-xs tracking-[0.18em] uppercase">
                  {t("brandTagline")}
                </div>
              </div>
            </div>

            <p
              className={[
                "mt-5 text-slate-200/65 text-sm leading-relaxed max-w-[38ch]",
                isRTL ? "text-right" : "text-left",
              ].join(" ")}
            >
              {t("brandDescription")}
            </p>

            <div
              className={[
                "mt-6 inline-flex items-center gap-2 rounded-full px-3.5 py-2 bg-white/[0.04] border border-white/10 text-slate-200/70 text-xs",
                isRTL ? "flex-row-reverse" : "",
              ].join(" ")}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a961]" />
              {t("pill")}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={m.item}>
            <h4 className="text-white/90 font-semibold mb-4">
              {t("quickLinksTitle")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="
                      cursor-pointer
                      text-slate-200/60 hover:text-[#c9a961]
                      transition-colors text-sm
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50
                      focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E30]
                      rounded
                    "
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services list */}
          <motion.div variants={m.item}>
            <h4 className="text-white/90 font-semibold mb-4">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-slate-200/60">
              {services.map((s) => (
                <li key={s} className={isRTL ? "text-right" : "text-left"}>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={m.item}>
            <h4 className="text-white/90 font-semibold mb-4">
              {t("contactTitle")}
            </h4>

            <div
              className="
                rounded-2xl p-5
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >
              <div className="space-y-3 text-sm text-slate-200/65">
                <div
                  className={[
                    "flex items-start gap-3",
                    isRTL ? "flex-row-reverse text-right" : "text-left",
                  ].join(" ")}
                >
                  <MapPin
                    size={18}
                    className="text-[#c9a961] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div>{t("address.line1")}</div>
                    <div>{t("address.line2")}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10" />

                <a
                  href="tel:+972501234567"
                  className={[
                    "group flex items-center gap-3 hover:text-[#c9a961] transition-colors",
                    isRTL ? "flex-row-reverse text-right" : "text-left",
                  ].join(" ")}
                >
                  <Phone
                    size={18}
                    className="text-[#86D7FF] group-hover:text-[#c9a961] transition-colors"
                  />
                  <span className="font-semibold text-white/90">
                    {t("phone")}
                  </span>
                </a>

                <a
                  href="mailto:info@legalguard.co.il"
                  className={[
                    "group flex items-center gap-3 hover:text-[#c9a961] transition-colors",
                    isRTL ? "flex-row-reverse text-right" : "text-left",
                  ].join(" ")}
                >
                  <Mail
                    size={18}
                    className="text-[#86D7FF] group-hover:text-[#c9a961] transition-colors"
                  />
                  <span className="font-semibold text-white/90">
                    {t("email")}
                  </span>
                </a>

                <div className="pt-3 text-xs text-slate-200/50">
                  {t("officeHours")}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={m.fadeUp.initial}
          whileInView={m.fadeUp.whileInView}
          viewport={m.viewport}
          className="
            mt-10 pt-6
            border-t border-white/10
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-slate-200/45 text-sm">
            {t("copyright", { year: currentYear })}
          </p>

          <div
            className={[
              "flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200/45",
              isRTL ? "justify-center" : "",
            ].join(" ")}
          >
            <a
              href="#"
              className="
                hover:text-[#c9a961] transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E30]
                rounded
              "
            >
              {t("links.privacy")}
            </a>
            <a
              href="#"
              className="
                hover:text-[#c9a961] transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E30]
                rounded
              "
            >
              {t("links.terms")}
            </a>
            <a
              href="#"
              className="
                hover:text-[#c9a961] transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/50
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E30]
                rounded
              "
            >
              {t("links.notice")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}