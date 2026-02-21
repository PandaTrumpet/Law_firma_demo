// "use client";

// import { useState } from 'react';
// import { Calculator, TrendingUp } from 'lucide-react';

// export function PricingCalculatorSection() {
//   const [formData, setFormData] = useState({
//     transactionType: 'purchase',
//     propertyValue: '2000000',
//     city: 'tel-aviv',
//     urgency: 'standard',
//     dueDiligence: true,
//   });

//   const calculateFee = () => {
//     const value = parseInt(formData.propertyValue) || 0;
//     let baseFee = value * 0.015; // 1.5% base

//     if (formData.urgency === 'urgent') baseFee *= 1.3;
//     if (formData.urgency === 'express') baseFee *= 1.6;
//     if (formData.dueDiligence) baseFee += 15000;
//     if (formData.city === 'jerusalem') baseFee *= 1.1;

//     return Math.round(baseFee);
//   };

//   const estimatedFee = calculateFee();

//   return (
//     <section id="calculator" className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a961]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
//             <Calculator size={16} className="text-[#c9a961]" />
//             <span className="text-[#c9a961] text-sm font-semibold">Transparent Pricing</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Calculate the Cost of<br />
//             <span className="text-[#c9a961]">Legal Support</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Get an instant estimate for your real estate legal services. No hidden fees.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Calculator Form */}
//           <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 lg:p-10">
//             <div className="space-y-6">
//               {/* Transaction Type */}
//               <div>
//                 <label className="block text-white font-semibold mb-3">Type of Transaction</label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {[
//                     { value: 'purchase', label: 'Purchase' },
//                     { value: 'sale', label: 'Sale' },
//                     { value: 'investment', label: 'Investment' },
//                   ].map((option) => (
//                     <button
//                       key={option.value}
//                       onClick={() => setFormData({ ...formData, transactionType: option.value })}
//                       className={`py-3 px-4 rounded-lg font-semibold transition-all ${
//                         formData.transactionType === option.value
//                           ? 'bg-[#c9a961] text-[#0a1628]'
//                           : 'bg-white/5 text-gray-400 hover:bg-white/10'
//                       }`}
//                     >
//                       {option.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Property Value */}
//               <div>
//                 <label className="block text-white font-semibold mb-3">Property Value (₪)</label>
//                 <input
//                   type="number"
//                   value={formData.propertyValue}
//                   onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
//                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
//                   placeholder="2,000,000"
//                 />
//               </div>

//               {/* City */}
//               <div>
//                 <label className="block text-white font-semibold mb-3">City</label>
//                 <select
//                   value={formData.city}
//                   onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
//                 >
//                   <option value="tel-aviv">Tel Aviv</option>
//                   <option value="jerusalem">Jerusalem</option>
//                   <option value="herzliya">Herzliya</option>
//                   <option value="netanya">Netanya</option>
//                   <option value="haifa">Haifa</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               {/* Urgency Level */}
//               <div>
//                 <label className="block text-white font-semibold mb-3">Urgency Level</label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {[
//                     { value: 'standard', label: 'Standard', time: '30 days' },
//                     { value: 'urgent', label: 'Urgent', time: '14 days' },
//                     { value: 'express', label: 'Express', time: '7 days' },
//                   ].map((option) => (
//                     <button
//                       key={option.value}
//                       onClick={() => setFormData({ ...formData, urgency: option.value })}
//                       className={`py-3 px-4 rounded-lg font-semibold transition-all ${
//                         formData.urgency === option.value
//                           ? 'bg-[#c9a961] text-[#0a1628]'
//                           : 'bg-white/5 text-gray-400 hover:bg-white/10'
//                       }`}
//                     >
//                       <div>{option.label}</div>
//                       <div className="text-xs mt-1 opacity-70">{option.time}</div>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Due Diligence */}
//               <div className="flex items-center justify-between bg-white/5 rounded-lg p-4 border border-white/10">
//                 <div>
//                   <div className="text-white font-semibold">Full Due Diligence</div>
//                   <div className="text-gray-400 text-sm mt-1">Comprehensive property investigation</div>
//                 </div>
//                 <button
//                   onClick={() => setFormData({ ...formData, dueDiligence: !formData.dueDiligence })}
//                   className={`w-12 h-6 rounded-full transition-all ${
//                     formData.dueDiligence ? 'bg-[#c9a961]' : 'bg-white/20'
//                   }`}
//                 >
//                   <div
//                     className={`w-5 h-5 bg-white rounded-full transition-all ${
//                       formData.dueDiligence ? 'translate-x-6' : 'translate-x-1'
//                     }`}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Results Dashboard */}
//           <div className="space-y-6">
//             {/* Main Fee Display */}
//             <div className="bg-gradient-to-br from-[#c9a961] to-[#a68a4e] rounded-2xl p-8 lg:p-10 text-[#0a1628] shadow-2xl">
//               <div className="flex items-center gap-2 mb-4">
//                 <TrendingUp size={20} />
//                 <span className="font-semibold">Estimated Legal Fee</span>
//               </div>
//               <div className="text-5xl lg:text-6xl font-bold mb-2">
//                 ₪{estimatedFee.toLocaleString()}
//               </div>
//               <div className="text-sm opacity-80">
//                 Based on {((estimatedFee / parseInt(formData.propertyValue || '1')) * 100).toFixed(2)}% of property value
//               </div>
//             </div>

//             {/* Breakdown */}
//             <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
//               <h3 className="text-white font-bold text-xl mb-6">Fee Breakdown</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
//                   <span className="text-gray-400">Base Legal Fee</span>
//                   <span className="text-white font-semibold">
//                     ₪{Math.round(parseInt(formData.propertyValue || '0') * 0.015).toLocaleString()}
//                   </span>
//                 </div>
//                 {formData.dueDiligence && (
//                   <div className="flex justify-between items-center pb-4 border-b border-white/10">
//                     <span className="text-gray-400">Due Diligence</span>
//                     <span className="text-white font-semibold">₪15,000</span>
//                   </div>
//                 )}
//                 {formData.urgency !== 'standard' && (
//                   <div className="flex justify-between items-center pb-4 border-b border-white/10">
//                     <span className="text-gray-400">
//                       {formData.urgency === 'urgent' ? 'Urgent Service' : 'Express Service'}
//                     </span>
//                     <span className="text-[#c9a961] font-semibold">
//                       +{formData.urgency === 'urgent' ? '30%' : '60%'}
//                     </span>
//                   </div>
//                 )}
//                 <div className="flex justify-between items-center pt-2">
//                   <span className="text-white font-bold">Total Estimate</span>
//                   <span className="text-[#c9a961] font-bold text-xl">
//                     ₪{estimatedFee.toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <button className="w-full bg-[#c9a961] text-[#0a1628] py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl text-lg">
//               Get Exact Quote
//             </button>

//             {/* Disclaimer */}
//             <p className="text-gray-500 text-sm text-center">
//               *This is an estimate. Final fees depend on transaction complexity and specific requirements.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { useLocale } from "next-intl";
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
    { value: "purchase" as const, label: "Purchase" },
    { value: "sale" as const, label: "Sale" },
    { value: "investment" as const, label: "Investment" },
  ];

  const urgencyOptions = [
    { value: "standard" as const, label: "Standard", time: "30 days" },
    { value: "urgent" as const, label: "Urgent", time: "14 days" },
    { value: "express" as const, label: "Express", time: "7 days" },
  ];

  return (
    <section
      id="calculator"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
    >
      {/* Corporate background (same system) */}
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
              <Calculator size={16} className="text-[#c9a961]" />
              <span className="text-[#c9a961] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                Transparent Pricing
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
            Calculate the Cost of
            <br />
            <span className="text-[#c9a961]">Legal Support</span>
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
            Get an instant estimate for your real estate legal services. No
            hidden fees.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div
          className={[
            "mt-10 grid gap-8 lg:gap-12 items-start",
            "lg:grid-cols-2",
            // RTL: results first looks nicer for Hebrew reading flow
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
                  Type of Transaction
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
                  Property Value (₪)
                </label>
                {/* <input
                  type="number"
                  inputMode="numeric"
                  value={formData.propertyValue}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyValue: e.target.value })
                  }
                  className="
                    w-full rounded-xl px-4 py-3
                    bg-white/[0.05]
                    border border-white/10
                    text-white
                    placeholder:text-white/30
                    focus:border-[#c9a961]/60 focus:outline-none
                    transition-colors
                  "
                  placeholder="2,000,000"
                /> */}
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
                  />

                  {/* Custom controls */}
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
                    >
                      ▼
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-200/55">
                  Typical transactions start from ₪2,000,000+
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  City
                </label>
                {/* <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value as FormState["city"],
                    })
                  }
                  className="
                    w-full rounded-xl px-4 py-3
                    bg-white/[0.05]
                    border border-white/10
                    text-white
                    focus:border-[#c9a961]/60 focus:outline-none
                    transition-colors
                  "
                >
                  <option value="tel-aviv">Tel Aviv</option>
                  <option value="jerusalem">Jerusalem</option>
                  <option value="herzliya">Herzliya</option>
                  <option value="netanya">Netanya</option>
                  <option value="haifa">Haifa</option>
                  <option value="other">Other</option>
                </select> */}

                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value as FormState["city"],
                    })
                  }
                  className="
    w-full rounded-xl px-4 py-3
    bg-[#132235]
    border border-white/15
    text-white
    appearance-none
    focus:border-[#c9a961]/60 focus:outline-none
    transition-colors
  "
                >
                  <option className="bg-[#132235] text-white" value="tel-aviv">
                    Tel Aviv
                  </option>
                  <option className="bg-[#132235] text-white" value="jerusalem">
                    Jerusalem
                  </option>
                  <option className="bg-[#132235] text-white" value="herzliya">
                    Herzliya
                  </option>
                  <option className="bg-[#132235] text-white" value="netanya">
                    Netanya
                  </option>
                  <option className="bg-[#132235] text-white" value="haifa">
                    Haifa
                  </option>
                  <option className="bg-[#132235] text-white" value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Urgency Level
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
                    Full Due Diligence
                  </div>
                  <div className="text-slate-200/65 text-sm mt-1">
                    Comprehensive property investigation
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
    relative w-12 h-6 rounded-full
    transition-colors duration-300
    ${formData.dueDiligence ? "bg-[#c9a961]" : "bg-white/20"}
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/40
  `}
                  aria-pressed={formData.dueDiligence}
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
              // RTL: make numbers align nicely
              isRTL ? "text-right" : "text-left",
            ].join(" ")}
          >
            {/* Main fee card (gold, but corporate) */}
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
                <span>Estimated Legal Fee</span>
              </div>

              <div className="text-[clamp(2.2rem,6vw,3.2rem)] font-bold leading-none">
                ₪{estimatedFee.toLocaleString()}
              </div>

              <div className="mt-3 text-sm opacity-80">
                Based on {percentOfValue.toFixed(2)}% of property value
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
                Fee Breakdown
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                  <span className="text-slate-200/70">Base Legal Fee</span>
                  <span className="text-white font-semibold">
                    ₪{baseFee.toLocaleString()}
                  </span>
                </div>

                {formData.dueDiligence && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">Due Diligence</span>
                    <span className="text-white font-semibold">₪15,000</span>
                  </div>
                )}

                {formData.urgency !== "standard" && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">
                      {formData.urgency === "urgent"
                        ? "Urgent Service"
                        : "Express Service"}
                    </span>
                    <span className="text-[#c9a961] font-semibold">
                      +{formData.urgency === "urgent" ? "30%" : "60%"}
                    </span>
                  </div>
                )}

                {formData.city === "jerusalem" && (
                  <div className="flex items-center justify-between gap-6 pb-4 border-b border-white/10">
                    <span className="text-slate-200/70">City Factor</span>
                    <span className="text-[#c9a961] font-semibold">+10%</span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-6 pt-1">
                  <span className="text-white font-bold">Total Estimate</span>
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
              Get Exact Quote
            </button>

            {/* Disclaimer */}
            <p className="text-slate-200/55 text-sm text-center">
              *This is an estimate. Final fees depend on transaction complexity
              and specific requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}