// "use client";

// import { useState } from "react";
// import { Send, Phone, Mail, CheckCircle2 } from "lucide-react";

// export function ContactFormSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     propertyValue: "",
//     transactionType: "purchase",
//     description: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Mock submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         propertyValue: "",
//         transactionType: "purchase",
//         description: "",
//       });
//     }, 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >,
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 lg:py-32 bg-[#141e2e] relative overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern
//               id="contact-grid"
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 40 0 L 0 0 0 40"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#contact-grid)" />
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
//             <Send size={16} className="text-[#c9a961]" />
//             <span className="text-[#c9a961] text-sm font-semibold">
//               Get Started
//             </span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Get a Legal Evaluation
//             <br />
//             <span className="text-[#c9a961]">of Your Transaction</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Share your details and our experts will contact you within 24 hours.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Form */}
//           <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8 lg:p-10">
//             {!isSubmitted ? (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="David Cohen"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="+972-50-123-4567"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="david@example.com"
//                   />
//                 </div>

//                 {/* Property Value */}
//                 <div>
//                   <label
//                     htmlFor="propertyValue"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Property Value (₪) *
//                   </label>
//                   <input
//                     type="number"
//                     id="propertyValue"
//                     name="propertyValue"
//                     value={formData.propertyValue}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500"
//                     placeholder="2,000,000"
//                   />
//                 </div>

//                 {/* Transaction Type */}
//                 <div>
//                   <label
//                     htmlFor="transactionType"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Type of Transaction *
//                   </label>
//                   <select
//                     id="transactionType"
//                     name="transactionType"
//                     value={formData.transactionType}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors"
//                   >
//                     <option value="purchase">Purchase</option>
//                     <option value="sale">Sale</option>
//                     <option value="investment">Investment</option>
//                     <option value="lease">Lease</option>
//                     <option value="dispute">Legal Dispute</option>
//                   </select>
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <label
//                     htmlFor="description"
//                     className="block text-white font-semibold mb-2"
//                   >
//                     Brief Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-gray-500 resize-none"
//                     placeholder="Tell us about your property transaction..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-[#c9a961] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/20 text-lg flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Request Consultation
//                 </button>

//                 {/* Response Time */}
//                 <p className="text-center text-gray-400 text-sm">
//                   ⏱️ We respond within 24 hours
//                 </p>
//               </form>
//             ) : (
//               <div className="py-12 text-center">
//                 <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle2 size={48} className="text-emerald-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3">
//                   Thank You!
//                 </h3>
//                 <p className="text-gray-400 mb-6">
//                   We've received your request. Our legal team will contact you
//                   within 24 hours.
//                 </p>
//                 <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
//                   <span className="text-emerald-400 text-sm font-semibold">
//                     Request Submitted
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Contact Information & Details */}
//           <div className="space-y-6">
//             {/* Contact Cards */}
//             <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
//               <h3 className="text-white font-bold text-xl mb-6">
//                 Direct Contact
//               </h3>
//               <div className="space-y-4">
//                 <a
//                   href="tel:+972501234567"
//                   className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
//                 >
//                   <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
//                     <Phone size={24} className="text-[#c9a961]" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-sm">Phone</div>
//                     <div className="text-white font-semibold">
//                       +972-50-123-4567
//                     </div>
//                   </div>
//                 </a>

//                 <a
//                   href="mailto:info@legalguard.co.il"
//                   className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
//                 >
//                   <div className="w-12 h-12 bg-[#c9a961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c9a961]/20 transition-colors">
//                     <Mail size={24} className="text-[#c9a961]" />
//                   </div>
//                   <div>
//                     <div className="text-gray-400 text-sm">Email</div>
//                     <div className="text-white font-semibold">
//                       info@legalguard.co.il
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Trust Elements */}
//             <div className="bg-gradient-to-br from-[#c9a961]/10 to-transparent border border-[#c9a961]/20 rounded-2xl p-8">
//               <h3 className="text-white font-bold text-xl mb-4">
//                 Why Choose Us?
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   "Specialized in high-value transactions",
//                   "Foreign investor expertise",
//                   "Real-time tech platform",
//                   "98% success rate",
//                   "Transparent pricing",
//                   "Hebrew, English, Russian support",
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-2 text-gray-300"
//                   >
//                     <CheckCircle2
//                       size={20}
//                       className="text-[#c9a961] flex-shrink-0"
//                     />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Office Location */}
//             <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border border-white/10 rounded-2xl p-8">
//               <h3 className="text-white font-bold text-xl mb-4">
//                 Office Location
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Rothschild Boulevard 12
//                 <br />
//                 Tel Aviv, Israel 6688012
//               </p>
//               <div className="mt-4 pt-4 border-t border-white/10">
//                 <p className="text-gray-400 text-sm">
//                   Office Hours: Sunday-Thursday, 9:00-18:00
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Send, Phone, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";


export function ContactFormSection() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyValue: "",
    transactionType: "purchase",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyValue: "",
        transactionType: "purchase",
        description: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
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
          <motion.div variants={m.item} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#c9a961]/20 bg-[#c9a961]/10 backdrop-blur-xl">
              <Send size={16} className="text-[#c9a961]" />
              <span className="text-[#c9a961] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                Get Started
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
            Get a Legal Evaluation
            <br />
            <span className="text-[#c9a961]">of Your Transaction</span>
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
            Share your details and our team will contact you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Card */}
          <motion.div
            initial={m.fadeUp.initial}
            whileInView={m.fadeUp.whileInView}
            viewport={m.viewport}
            className="
              rounded-2xl
              bg-[#132235]
              border border-white/10
              shadow-[0_35px_110px_rgba(0,0,0,0.55)]
              p-6 sm:p-7 lg:p-10
            "
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* helper microcopy */}
                <div
                  className="
                    flex items-start gap-3
                    rounded-xl p-4
                    bg-white/[0.04] border border-white/10
                    text-slate-200/70 text-sm
                  "
                >
                  <ShieldCheck size={18} className="text-[#86D7FF] mt-0.5" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    Your information is handled confidentially. We respond
                    within{" "}
                    <span className="text-white/90 font-semibold">
                      24 hours
                    </span>
                    .
                  </div>
                </div>

                {/* Grid inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full rounded-xl px-4 py-3
                        bg-white/[0.05]
                        border border-white/10
                        text-white
                        placeholder:text-white/30
                        focus:border-[#c9a961]/60 focus:outline-none
                        transition-colors
                      "
                      placeholder="David Cohen"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="
                        w-full rounded-xl px-4 py-3
                        bg-white/[0.05]
                        border border-white/10
                        text-white
                        placeholder:text-white/30
                        focus:border-[#c9a961]/60 focus:outline-none
                        transition-colors
                      "
                      placeholder="+972 50 123 4567"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full rounded-xl px-4 py-3
                        bg-white/[0.05]
                        border border-white/10
                        text-white
                        placeholder:text-white/30
                        focus:border-[#c9a961]/60 focus:outline-none
                        transition-colors
                      "
                      placeholder="david@example.com"
                    />
                  </div>

                  {/* Property Value */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="propertyValue"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Property Value (₪) *
                    </label>
                    <input
                      type="number"
                      inputMode="numeric"
                      id="propertyValue"
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleChange}
                      required
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
                    />
                    <p className="mt-2 text-xs text-slate-200/55">
                      Typical transactions start from ₪2,000,000+
                    </p>
                  </div>

                  {/* Transaction Type */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="transactionType"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Type of Transaction *
                    </label>

                    {/* NOTE: option styling is limited across browsers; use darker bg + focus ring.
                        If you want full control, we'll switch to a custom Listbox later. */}
                    <select
                      id="transactionType"
                      name="transactionType"
                      value={formData.transactionType}
                      onChange={handleChange}
                      required
                      className="
                        cursor-pointer
                        w-full rounded-xl px-4 py-3
                        bg-[#0B1726]
                        border border-white/10
                        text-white
                        focus:border-[#c9a961]/60 focus:outline-none
                        transition-colors
                      "
                      style={{
                        colorScheme: "dark",
                      }}
                    >
                      <option value="purchase">Purchase</option>
                      <option value="sale">Sale</option>
                      <option value="investment">Investment</option>
                      <option value="lease">Lease</option>
                      <option value="dispute">Legal Dispute</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-white/90 font-semibold mb-2"
                    >
                      Brief Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="
                        w-full rounded-xl px-4 py-3
                        bg-white/[0.05]
                        border border-white/10
                        text-white
                        placeholder:text-white/30
                        focus:border-[#c9a961]/60 focus:outline-none
                        transition-colors resize-none
                      "
                      placeholder="Tell us about your property transaction..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    cursor-pointer
                    w-full inline-flex items-center justify-center gap-2
                    rounded-xl px-8 py-4
                    bg-[#c9a961] text-[#071023]
                    font-semibold text-base sm:text-lg
                    shadow-[0_22px_60px_rgba(201,169,97,0.22)]
                    transition-all duration-300 ease-[0.16,1,0.3,1]
                    hover:bg-[#d4b870]
                    hover:-translate-y-0.5
                  "
                >
                  <Send size={18} />
                  Request Consultation
                </button>

                <p className="text-center text-slate-200/60 text-sm">
                  ⏱️ We respond within 24 hours
                </p>
              </form>
            ) : (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-[#c9a961]/15 border border-[#c9a961]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={34} className="text-[#c9a961]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  Request received
                </h3>
                <p className="text-slate-200/65 max-w-[52ch] mx-auto">
                  We&apos;ve received your request. Our team will contact you
                  within 24 hours.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/[0.04] border border-white/10">
                  <span className="text-slate-200/75 text-sm font-semibold">
                    Submission confirmed
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right column: contact + trust + location */}
          <motion.div
            variants={m.container}
            initial="hidden"
            whileInView="show"
            viewport={m.viewport}
            className="space-y-6"
          >
            {/* Direct contact */}
            <motion.div
              variants={m.item}
              className="
                rounded-2xl p-6 sm:p-7
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.42)]
              "
            >
              <h3 className="text-white font-semibold text-lg mb-5">
                Direct Contact
              </h3>

              <div className="space-y-3">
                <a
                  href="tel:+972501234567"
                  className={[
                    "group flex items-center gap-4 rounded-xl p-4",
                    "bg-white/[0.04] border border-white/10",
                    "transition-all duration-300 ease-[0.16,1,0.3,1]",
                    "hover:-translate-y-0.5 hover:border-[#c9a961]/25",
                    isRTL
                      ? "flex-row-reverse text-right"
                      : "flex-row text-left",
                  ].join(" ")}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c9a961]/10 border border-[#c9a961]/16 flex items-center justify-center group-hover:bg-[#c9a961]/14 transition-colors">
                    <Phone size={20} className="text-[#c9a961]" />
                  </div>
                  <div>
                    <div className="text-slate-200/55 text-sm">Phone</div>
                    <div className="text-white font-semibold">
                      +972 50 123 4567
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@legalguard.co.il"
                  className={[
                    "group flex items-center gap-4 rounded-xl p-4",
                    "bg-white/[0.04] border border-white/10",
                    "transition-all duration-300 ease-[0.16,1,0.3,1]",
                    "hover:-translate-y-0.5 hover:border-[#4CC2FF]/25",
                    isRTL
                      ? "flex-row-reverse text-right"
                      : "flex-row text-left",
                  ].join(" ")}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#4CC2FF]/10 border border-[#4CC2FF]/16 flex items-center justify-center group-hover:bg-[#4CC2FF]/14 transition-colors">
                    <Mail size={20} className="text-[#86D7FF]" />
                  </div>
                  <div>
                    <div className="text-slate-200/55 text-sm">Email</div>
                    <div className="text-white font-semibold">
                      info@legalguard.co.il
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Why choose us */}
            <motion.div
              variants={m.item}
              className="
                rounded-2xl p-6 sm:p-7
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.42)]
              "
            >
              <h3 className="text-white font-semibold text-lg mb-4">
                Why Choose Us?
              </h3>

              <ul className="space-y-3">
                {[
                  "Specialized in high-value transactions",
                  "Foreign investor expertise",
                  "Real-time tech platform",
                  "98% success rate",
                  "Transparent pricing",
                  "Hebrew, English, Russian support",
                ].map((item) => (
                  <li
                    key={item}
                    className={[
                      "flex items-start gap-2 text-slate-200/75",
                      isRTL
                        ? "flex-row-reverse text-right"
                        : "flex-row text-left",
                    ].join(" ")}
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#c9a961] mt-0.5 flex-shrink-0"
                    />
                    <span className="leading-relaxed text-sm sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Office */}
            <motion.div
              variants={m.item}
              className="
                rounded-2xl p-6 sm:p-7
                bg-[#132235]
                border border-white/10
                shadow-[0_25px_80px_rgba(0,0,0,0.42)]
              "
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                Office Location
              </h3>

              <p
                className={[
                  "text-slate-200/65 leading-relaxed",
                  isRTL ? "text-right" : "text-left",
                ].join(" ")}
              >
                Rothschild Boulevard 12
                <br />
                Tel Aviv, Israel 6688012
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-slate-200/55 text-sm">
                  Office Hours: Sunday–Thursday, 9:00–18:00
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}