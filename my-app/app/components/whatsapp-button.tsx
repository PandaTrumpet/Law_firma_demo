// import { MessageCircle } from 'lucide-react';

// export function WhatsAppButton() {
//   const phoneNumber = '+972501234567'; // Replace with actual number
//   const message =
//     "Hello, I need legal assistance for a real estate transaction in Israel. Please contact me at your earliest convenience.";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
//       aria-label="Contact us on WhatsApp"
//     >
//       <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
//       <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
//     </a>
//   );
// }

"use client";

import { MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const locale = useLocale();
  const isRTL = locale === "he";

  const phoneNumber = "+972501234567"; // Replace with actual number

  const message = t("message");

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    "",
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "fixed bottom-8 z-50",
        isRTL ? "left-8" : "right-8",
        "bg-[#25D366] text-white",
        "w-14 h-14 rounded-full",
        "flex items-center justify-center",
        "shadow-2xl hover:scale-110",
        "transition-transform duration-300 group",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
      ].join(" ")}
      aria-label={t("aria")}
    >
      <MessageCircle
        size={28}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </a>
  );
}