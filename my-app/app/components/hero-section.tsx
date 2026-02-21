// "use client";

// import { Shield, TrendingUp } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function HeroSection() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] overflow-hidden">
//       {/* Background Image with Overlay */}

//       <div className="pointer-events-none absolute inset-0 z-10">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1768245076812-143d7794d1f7?auto=format&fit=crop&w=2400&q=80"
//             alt="Tel Aviv Skyline"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover opacity-60"
//           />
//         </div>

//         {/* overlay — сделай слабее */}
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 via-[#0f1f3a]/65 to-[#1a2942]/75" /> */}
//       </div>
//       {/* Decorative Elements */}
//       <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a961]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             {/* Trust Badges */}
//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
//                 <Shield size={16} className="text-[#c9a961]" />
//                 <span className="text-gray-300 text-sm">₪2M+ Properties</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
//                 <TrendingUp size={16} className="text-[#c9a961]" />
//                 <span className="text-gray-300 text-sm">Foreign Investors</span>
//               </div>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
//               Buying Property
//               <br />
//               in Israel?
//               <span className="block text-[#c9a961] mt-2">
//                 Protect Your Investment Legally.
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
//               A single mistake in a contract can cost hundreds of thousands of
//               shekels. We manage your transaction from due diligence to final
//               registration.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="bg-[#c9a961] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/20 text-lg"
//               >
//                 Get a Personal Consultation
//               </button>
//               <button
//                 onClick={() => scrollToSection("calculator")}
//                 className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 text-lg"
//               >
//                 Calculate Legal Fees
//               </button>
//             </div>

//             {/* Additional Trust Elements */}
//             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
//               <div>
//                 <div className="text-3xl font-bold text-[#c9a961]">500+</div>
//                 <div className="text-gray-400 text-sm mt-1">Transactions</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-[#c9a961]">₪3.2B</div>
//                 <div className="text-gray-400 text-sm mt-1">Secured</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-[#c9a961]">98%</div>
//                 <div className="text-gray-400 text-sm mt-1">Success Rate</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Image Grid */}
//           <div className="hidden lg:grid grid-cols-2 gap-4">
//             <div className="space-y-4">
//               <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                 <ImageWithFallback
//                   src="https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGF3JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                   alt="Premium Law Office"
//                   fill
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
//               </div>
//               <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                 <ImageWithFallback
//                   src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2NDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                   alt="Luxury Property"
//                   fill
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
//               </div>
//             </div>
//             <div className="space-y-4 pt-12">
//               <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                 <ImageWithFallback
//                   src="https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGF0dG9ybmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                   alt="Professional Attorney"
//                   fill
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
//               </div>
//               <div className="bg-gradient-to-br from-[#c9a961]/20 to-transparent border border-[#c9a961]/30 rounded-2xl p-6 backdrop-blur-sm">
//                 <div className="text-[#c9a961] font-semibold mb-2">
//                   Trusted by
//                 </div>
//                 <div className="text-white text-lg font-semibold">
//                   High-Net-Worth Clients
//                 </div>
//                 <div className="text-gray-400 text-sm mt-2">
//                   Tel Aviv & Beyond
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocale } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
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
    >
      {/* ✅ BACKGROUND (fix: image is clearly visible) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768245076812-143d7794d1f7?auto=format&fit=crop&w=2400&q=80"
          alt="Tel Aviv Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"
        />
      </div>

      {/* Overlays above image */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Corporate wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/40 via-[#050B16]/68 to-[#050B16]/90" />

        {/* Subtle glows (cool + gold) */}
        <div className="absolute -top-24 right-[-10%] h-80 w-80 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
        <div className="absolute -bottom-28 left-[-12%] h-96 w-96 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />

        {/* Subtle grid (lighter than before) */}
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
                    ₪2M+ Properties
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <TrendingUp size={16} className="text-[#c9a961]" />
                  <span className="text-slate-200/85 text-[12px] sm:text-[13px] tracking-wide">
                    Foreign Investors
                  </span>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={item}
                className="
                  mt-6 font-semibold tracking-tight leading-[1.05]
                  text-[clamp(2.05rem,6vw,3.35rem)]
                  lg:text-[clamp(3.1rem,3.8vw,4.25rem)]
                "
              >
                Buying Property
                <br />
                in Israel?
                <span className="block mt-3 text-[#c9a961]">
                  Protect Your Investment Legally.
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
                A single mistake in a contract can cost hundreds of thousands of
                shekels. We manage your transaction from due diligence to final
                registration.
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
                  Get a Personal Consultation
                </button>

                <button
                  onClick={() => scrollToSection("calculator")}
                  className="
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
                  Calculate Legal Fees
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
                    Transactions
                  </div>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[22px] sm:text-3xl font-semibold text-[#c9a961]">
                    ₪3.2B
                  </div>
                  <div className="text-slate-300/70 text-[11px] sm:text-sm mt-1">
                    Secured
                  </div>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-[22px] sm:text-3xl font-semibold text-[#c9a961]">
                    98%
                  </div>
                  <div className="text-slate-300/70 text-[11px] sm:text-sm mt-1">
                    Success Rate
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
                      alt="Premium Law Office"
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
                      Trusted by
                    </div>
                    <div className="mt-1 text-white text-lg font-semibold">
                      High-Net-Worth Clients
                    </div>
                    <div className="mt-2 text-slate-300/70 text-sm">
                      Tel Aviv &amp; Beyond
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
                      alt="Premium Law Office"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/65 to-transparent" />
                  </div>

                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=crop&w=1600&q=80"
                      alt="Luxury Property"
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
                      alt="Professional Attorney"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/65 to-transparent" />
                  </div>

                  <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                    <div className="text-[#c9a961] text-xs font-semibold tracking-wider">
                      Trusted by
                    </div>
                    <div className="mt-1 text-white text-lg font-semibold">
                      High-Net-Worth Clients
                    </div>
                    <div className="mt-2 text-slate-300/70 text-sm">
                      Tel Aviv &amp; Beyond
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