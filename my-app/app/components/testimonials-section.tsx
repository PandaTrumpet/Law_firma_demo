// import { Star, Quote } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: 'David Cohen',
//       role: 'Tech Entrepreneur',
//       image: 'https://images.unsplash.com/photo-1764084051461-d82772f90a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzE2NjQ0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'LegalGuard made our ₪4.2M property purchase in Herzliya completely stress-free. Their due diligence uncovered issues the seller never disclosed, saving us hundreds of thousands.',
//       transactionValue: '₪4,200,000',
//       city: 'Herzliya',
//       rating: 5,
//     },
//     {
//       name: 'Sarah Levinson',
//       role: 'Investment Manager',
//       image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGF0dG9ybmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'As a foreign investor, I needed a team I could trust completely. Their transparency and technology platform kept me informed throughout. Best decision I made.',
//       transactionValue: '₪2,800,000',
//       city: 'Tel Aviv',
//       rating: 5,
//     },
//     {
//       name: 'Michael Abrahamov',
//       role: 'Real Estate Developer',
//       image: 'https://images.unsplash.com/photo-1764084051461-d82772f90a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzE2NjQ0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'Professional, precise, and proactive. They handled our complex multi-property acquisition with exceptional expertise. Highly recommend for high-value transactions.',
//       transactionValue: '₪8,500,000',
//       city: 'Tel Aviv',
//       rating: 5,
//     },
//     {
//       name: 'Rachel Goldstein',
//       role: 'Returning Expat',
//       image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGF0dG9ybmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'After 15 years abroad, buying property in Israel felt overwhelming. LegalGuard guided us through every step with patience and expertise. Exceptional service.',
//       transactionValue: '₪3,100,000',
//       city: 'Ramat Aviv',
//       rating: 5,
//     },
//     {
//       name: 'Alex Petrov',
//       role: 'Tech Executive',
//       image: 'https://images.unsplash.com/photo-1764084051461-d82772f90a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzE2NjQ0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'The legal tech platform is a game-changer. Real-time updates, document access, and WhatsApp notifications made the entire process transparent and efficient.',
//       transactionValue: '₪5,700,000',
//       city: 'Tel Aviv',
//       rating: 5,
//     },
//     {
//       name: 'Miriam Katz',
//       role: 'Private Investor',
//       image: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGF0dG9ybmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       quote:
//         'Their attention to detail is remarkable. They caught several contract issues that could have led to future disputes. Worth every shekel.',
//       transactionValue: '₪2,400,000',
//       city: 'Netanya',
//       rating: 5,
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f1f3a] relative overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-[#c9a961]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-full px-4 py-2 mb-6">
//             <Star size={16} className="text-[#c9a961] fill-[#c9a961]" />
//             <span className="text-[#c9a961] text-sm font-semibold">Client Success Stories</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Trusted by High-Net-Worth<br />
//             <span className="text-[#c9a961]">Property Investors</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Hear from clients who secured their investments with our legal expertise.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#1a2942]/80 to-[#0f1f3a]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#c9a961]/50 transition-all duration-300 group relative overflow-hidden"
//             >
//               {/* Quote Icon */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c9a961]/5 rounded-full flex items-center justify-center opacity-50">
//                 <Quote size={48} className="text-[#c9a961]" />
//               </div>

//               {/* Rating */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} size={16} className="text-[#c9a961] fill-[#c9a961]" />
//                 ))}
//               </div>

//               {/* Quote */}
//               <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
//                 "{testimonial.quote}"
//               </p>

//               {/* Client Info */}
//               <div className="flex items-center gap-4 pt-6 border-t border-white/10">
//                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a961]/30">
//                   <ImageWithFallback
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold">{testimonial.name}</div>
//                   <div className="text-gray-400 text-sm">{testimonial.role}</div>
//                 </div>
//               </div>

//               {/* Transaction Details */}
//               <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
//                 <div>
//                   <div className="text-[#c9a961] font-bold">{testimonial.transactionValue}</div>
//                   <div className="text-gray-500 text-xs mt-0.5">{testimonial.city}</div>
//                 </div>
//                 <div className="px-3 py-1 bg-emerald-500/10 rounded-full">
//                   <span className="text-emerald-400 text-xs font-semibold">Verified</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Bar */}
//         <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gradient-to-br from-[#1a2942]/60 to-[#0f1f3a]/60 backdrop-blur-sm border border-white/10 rounded-2xl">
//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#c9a961] mb-2">4.9/5</div>
//             <div className="text-gray-400 text-sm">Average Rating</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#c9a961] mb-2">500+</div>
//             <div className="text-gray-400 text-sm">Happy Clients</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#c9a961] mb-2">₪3.2B+</div>
//             <div className="text-gray-400 text-sm">Secured</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-[#c9a961] mb-2">98%</div>
//             <div className="text-gray-400 text-sm">Success Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocale } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";


export function TestimonialsSection() {
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const testimonials = [
    {
      name: "David Cohen",
      role: "Tech Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1764084051461-d82772f90a5c?auto=format&fit=crop&w=1080&q=80",
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
                Client Success Stories
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
            Trusted by High-Net-Worth
            <br />
            <span className="text-[#c9a961]">Property Investors</span>
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
            Hear from clients who secured their investments with our legal
            expertise.
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
          {testimonials.map((t) => (
            <motion.article
              key={`${t.name}-${t.transactionValue}`}
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
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#c9a961] fill-[#c9a961]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className={[
                  "mt-4 text-slate-200/80 leading-relaxed relative z-10",
                  "text-sm sm:text-[15px]",
                  isRTL ? "text-right" : "text-left",
                ].join(" ")}
              >
                “{t.quote}”
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
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-200/55 text-sm">{t.role}</div>
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
                    {t.transactionValue}
                  </div>
                  <div className="text-slate-200/50 text-xs mt-0.5">
                    {t.city}
                  </div>
                </div>

                {/* Verified (premium, not green) */}
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full px-3 py-1
                    bg-white/[0.04] border border-white/10
                    text-slate-200/70 text-xs font-semibold
                  "
                >
                  <CheckCircle2 size={14} className="text-[#c9a961]" />
                  Verified
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
              { value: "4.9/5", label: "Average Rating" },
              { value: "500+", label: "Happy Clients" },
              { value: "₪3.2B+", label: "Secured" },
              { value: "98%", label: "Success Rate" },
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