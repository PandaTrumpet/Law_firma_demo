"use client";

import { Shield, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#1a2942] overflow-hidden">
      {/* Background Image with Overlay */}
      {/* <div className="absolute inset-0 z-0">
       <div className="relative w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768245076812-143d7794d1f7?auto=format&fit=crop&w=2400&q=80"
            alt="Tel Aviv Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0f1f3a]/90 to-[#1a2942]/95" />
      </div> */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768245076812-143d7794d1f7?auto=format&fit=crop&w=2400&q=80"
            alt="Tel Aviv Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>

        {/* overlay — сделай слабее */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 via-[#0f1f3a]/65 to-[#1a2942]/75" /> */}
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#c9a961]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Shield size={16} className="text-[#c9a961]" />
                <span className="text-gray-300 text-sm">₪2M+ Properties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <TrendingUp size={16} className="text-[#c9a961]" />
                <span className="text-gray-300 text-sm">Foreign Investors</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Buying Property
              <br />
              in Israel?
              <span className="block text-[#c9a961] mt-2">
                Protect Your Investment Legally.
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              A single mistake in a contract can cost hundreds of thousands of
              shekels. We manage your transaction from due diligence to final
              registration.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#c9a961] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4b870] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#c9a961]/20 text-lg"
              >
                Get a Personal Consultation
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 text-lg"
              >
                Calculate Legal Fees
              </button>
            </div>

            {/* Additional Trust Elements */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#c9a961]">500+</div>
                <div className="text-gray-400 text-sm mt-1">Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a961]">₪3.2B</div>
                <div className="text-gray-400 text-sm mt-1">Secured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a961]">98%</div>
                <div className="text-gray-400 text-sm mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGF3JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Law Office"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2NDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Property"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGF0dG9ybmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjY0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Attorney"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
              </div>
              <div className="bg-gradient-to-br from-[#c9a961]/20 to-transparent border border-[#c9a961]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-[#c9a961] font-semibold mb-2">
                  Trusted by
                </div>
                <div className="text-white text-lg font-semibold">
                  High-Net-Worth Clients
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Tel Aviv & Beyond
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
