

"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

type FormState = {
  transactionType: "purchase" | "sale" | "investment";
  propertyValue: string;
  city: "tel-aviv" | "jerusalem" | "herzliya" | "netanya" | "haifa" | "other";
  urgency: "standard" | "urgent" | "express";
  dueDiligence: boolean;
};

export function PricingCalculatorSection() {
  const t = useTranslations("calculator");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const [formData, setFormData] = useState<FormState>({
    transactionType: "purchase",
    propertyValue: "2000000",
    city: "tel-aviv",
    urgency: "standard",
    dueDiligence: true,
  });

  const valueNum = useMemo(() => {
    const v = parseInt(formData.propertyValue, 10);
    return Number.isFinite(v) ? v : 0;
  }, [formData.propertyValue]);

  const baseFee = useMemo(() => Math.round(valueNum * 0.015), [valueNum]);

  const urgencyMultiplier = useMemo(() => {
    if (formData.urgency === "urgent") return 1.3;
    if (formData.urgency === "express") return 1.6;
    return 1;
  }, [formData.urgency]);

  const cityMultiplier = useMemo(() => {
    if (formData.city === "jerusalem") return 1.1;
    return 1;
  }, [formData.city]);

  const dueDiligenceAdd = formData.dueDiligence ? 15000 : 0;

  const estimatedFee = useMemo(() => {
    let total = baseFee;
    total = Math.round(total * urgencyMultiplier);
    total = Math.round(total * cityMultiplier);
    total += dueDiligenceAdd;
    return Math.max(0, total);
  }, [baseFee, urgencyMultiplier, cityMultiplier, dueDiligenceAdd]);

  const percentOfValue = useMemo(() => {
    if (!valueNum) return 0;
    return (estimatedFee / valueNum) * 100;
  }, [estimatedFee, valueNum]);

  const txOptions = [
    {
      value: "purchase" as const,
      label: t("form.transaction.options.purchase"),
    },
    { value: "sale" as const, label: t("form.transaction.options.sale") },
    {
      value: "investment" as const,
      label: t("form.transaction.options.investment"),
    },
  ];

  const urgencyOptions = [
    {
      value: "standard" as const,
      label: t("form.urgency.options.standard.label"),
      time: t("form.urgency.options.standard.time"),
    },
    {
      value: "urgent" as const,
      label: t("form.urgency.options.urgent.label"),
      time: t("form.urgency.options.urgent.time"),
    },
    {
      value: "express" as const,
      label: t("form.urgency.options.express.label"),
      time: t("form.urgency.options.express.time"),
    },
  ];

  return (
    <section
      id="calculator"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0F1E30]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,rgba(76,194,255,0.32),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.26),transparent_60%)]" />
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
              <Calculator size={16} className="text-[#c9a961]" />
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
        <div
          className={[
            "mt-10 grid gap-8 lg:gap-12 items-start",
            "lg:grid-cols-2",
            isRTL
              ? "lg:[grid-template-columns:1fr_1.05fr]"
              : "lg:[grid-template-columns:1.05fr_1fr]",
          ].join(" ")}
        >
          {/* Form */}
          <motion.div
            initial={m.fadeUp.initial}
            whileInView={m.fadeUp.whileInView}
            viewport={m.viewport}
            className="
              rounded-2xl p-6 sm:p-8 lg:p-10
              bg-[#132235]
              border border-white/10
              shadow-[0_25px_80px_rgba(0,0,0,0.42)]
            "
          >
            <div className="space-y-6">
              {/* Transaction Type */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  {t("form.transaction.label")}
                </label>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {txOptions.map((option) => {
                    const active = formData.transactionType === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            transactionType: option.value,
                          })
                        }
                        className={[
                          "cursor-pointer",
                          "rounded-xl px-3 py-3",
                          "text-[13px] sm:text-[14px]",
                          "font-semibold transition-all",
                          active
                            ? "bg-[#c9a961] text-[#071023] shadow-[0_14px_40px_rgba(201,169,97,0.18)]"
                            : "bg-white/[0.05] text-slate-200/70 hover:bg-white/[0.08] border border-white/10",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/45",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Value */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  {t("form.value.label")}
                </label>

                <div className="relative">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={formData.propertyValue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyValue: e.target.value,
                      })
                    }
                    className="
                      w-full rounded-xl px-4 py-3 pr-14
                      bg-white/[0.05]
                      border border-white/10
                      text-white
                      placeholder:text-white/30
                      focus:border-[#c9a961]/60 focus:outline-none
                      transition-colors
                    "
                    aria-label={t("form.value.aria")}
                  />

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          propertyValue: String(
                            (parseInt(formData.propertyValue || "0") || 0) +
                              100000,
                          ),
                        })
                      }
                      className="text-[#c9a961] text-xs hover:text-[#d4b870]"
                      aria-label={t("form.value.increase")}
                    >
                      ▲
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          propertyValue: String(
                            Math.max(
                              0,
                              (parseInt(formData.propertyValue || "0") || 0) -
                                100000,
                            ),
                          ),
                        })
                      }
                      className="text-[#c9a961] text-xs hover:text-[#d4b870]"
                      aria-label={t("form.value.decrease")}
                    >
                      ▼
                    </button>
                  </div>
                </div>

                <div className="mt-2 text-xs text-slate-200/55">
                  {t("form.value.hint")}
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  {t("form.city.label")}
                </label>

                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value as FormState["city"],
                    })
                  }
                  className="
                    cursor-pointer
                    w-full rounded-xl px-4 py-3
                    bg-[#132235]
                    border border-white/15
                    text-white
                    appearance-none
                    focus:border-[#c9a961]/60 focus:outline-none
                    transition-colors
                  "
                  aria-label={t("form.city.aria")}
                >
                  <option className="bg-[#132235] text-white" value="tel-aviv">
                    {t("form.city.options.telAviv")}
                  </option>
                  <option className="bg-[#132235] text-white" value="jerusalem">
                    {t("form.city.options.jerusalem")}
                  </option>
                  <option className="bg-[#132235] text-white" value="herzliya">
                    {t("form.city.options.herzliya")}
                  </option>
                  <option className="bg-[#132235] text-white" value="netanya">
                    {t("form.city.options.netanya")}
                  </option>
                  <option className="bg-[#132235] text-white" value="haifa">
                    {t("form.city.options.haifa")}
                  </option>
                  <option className="bg-[#132235] text-white" value="other">
                    {t("form.city.options.other")}
                  </option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  {t("form.urgency.label")}
                </label>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {urgencyOptions.map((option) => {
                    const active = formData.urgency === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, urgency: option.value })
                        }
                        className={[
                          "cursor-pointer",
                          "rounded-xl px-3 py-3 text-left",
                          isRTL ? "text-right" : "text-left",
                          "font-semibold transition-all",
                          active
                            ? "bg-[#c9a961] text-[#071023] shadow-[0_14px_40px_rgba(201,169,97,0.18)]"
                            : "bg-white/[0.05] text-slate-200/70 hover:bg-white/[0.08] border border-white/10",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/45",
                        ].join(" ")}
                      >
                        <div className="text-[13px] sm:text-[14px]">
                          {option.label}
                        </div>
                        <div className="text-[11px] mt-1 opacity-70 font-medium">
                          {option.time}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Due Diligence toggle */}
              <div className="flex items-center justify-between rounded-xl p-4 border border-white/10 bg-white/[0.05]">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-white font-semibold">
                    {t("form.dd.title")}
                  </div>
                  <div className="text-slate-200/65 text-sm mt-1">
                    {t("form.dd.subtitle")}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      dueDiligence: !formData.dueDiligence,
                    })
                  }
                  className={`
                    cursor-pointer
                    relative w-12 h-6 rounded-full
                    transition-colors duration-300
                    ${formData.dueDiligence ? "bg-[#c9a961]" : "bg-white/20"}
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/40
                  `}
                  aria-pressed={formData.dueDiligence}
                  aria-label={t("form.dd.aria")}
                >
                  <span
                    className={`
                      absolute top-1/2 -translate-y-1/2
                      h-4 w-4 rounded-full bg-white
                      transition-all duration-300
                      ${
                        formData.dueDiligence
                          ? isRTL
                            ? "right-1"
                            : "left-[calc(100%-1.25rem)]"
                          : isRTL
                            ? "left-[calc(100%-1.25rem)]"
                            : "left-1"
                      }
                    `}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={m.fadeUp.initial}
            whileInView={m.fadeUp.whileInView}
            viewport={m.viewport}
            className={[
              "space-y-5 sm:space-y-6",
              isRTL ? "text-right" : "text-left",
            ].join(" ")}
          >
            {/* Main fee card */}
            <div
              className="
                rounded-2xl p-6 sm:p-8 lg:p-10
                border border-[#c9a961]/25
                bg-gradient-to-br from-[#c9a961] to-[#a68a4e]
                text-[#071023]
                shadow-[0_30px_90px_rgba(0,0,0,0.45)]
              "
            >
              <div
                className={[
                  "flex items-center gap-2 mb-4 font-semibold",
                  isRTL ? "justify-end" : "justify-start",
                ].join(" ")}
              >
                <TrendingUp size={18} />
                <span>{t("result.title")}</span>
              </div>

              <div className="text-[clamp(2.2rem,6vw,3.2rem)] font-bold leading-none">
                ₪{estimatedFee.toLocaleString()}
              </div>

              <div className="mt-3 text-sm opacity-80">
                {t("result.basedOn", { percent: percentOfValue.toFixed(2) })}
              </div>
            </div>

            {/* Breakdown */}
            <div
              className="
                rounded-2xl p-6 sm:p-8
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.42)]
              "
            >
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-5">
                {t("breakdown.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                  <span className="text-slate-200/70">
                    {t("breakdown.base")}
                  </span>
                  <span className="text-white font-semibold">
                    ₪{baseFee.toLocaleString()}
                  </span>
                </div>

                {formData.dueDiligence && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">
                      {t("breakdown.dd")}
                    </span>
                    <span className="text-white font-semibold">
                      {t("breakdown.ddPrice")}
                    </span>
                  </div>
                )}

                {formData.urgency !== "standard" && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">
                      {formData.urgency === "urgent"
                        ? t("breakdown.urgent")
                        : t("breakdown.express")}
                    </span>
                    <span className="text-[#c9a961] font-semibold">
                      {formData.urgency === "urgent"
                        ? t("breakdown.urgentAdd")
                        : t("breakdown.expressAdd")}
                    </span>
                  </div>
                )}

                {formData.city === "jerusalem" && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">
                      {t("breakdown.cityFactor")}
                    </span>
                    <span className="text-[#c9a961] font-semibold">
                      {t("breakdown.cityAdd")}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-6 pt-1">
                  <span className="text-white font-bold">
                    {t("breakdown.total")}
                  </span>
                  <span className="text-[#c9a961] font-bold text-lg sm:text-xl">
                    ₪{estimatedFee.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              className="
                cursor-pointer
                w-full inline-flex items-center justify-center
                rounded-xl
                py-3.5
                text-[15px] sm:text-[16px]
                font-semibold
                bg-[#c9a961] text-[#071023]
                hover:bg-[#d4b870]
                transition-colors
                shadow-[0_18px_50px_rgba(201,169,97,0.18)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]/60
              "
            >
              {t("cta")}
            </button>

            {/* Disclaimer */}
            <p className="text-slate-200/55 text-sm text-center">
              {t("disclaimer")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}