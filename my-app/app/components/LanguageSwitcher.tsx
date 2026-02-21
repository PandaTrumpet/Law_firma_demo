
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "ru", label: "RU" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isRTL = locale === "he";

  const handleChange = (newLocale: (typeof languages)[number]["code"]) => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div
      className={[
        "relative inline-flex items-center",
        "rounded-full p-1",
        "border border-white/10",
        "bg-white/[0.04] backdrop-blur-xl",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "ring-1 ring-white/5",
        isPending ? "opacity-80" : "opacity-100",
        isRTL ? "flex-row-reverse" : "flex-row",
      ].join(" ")}
      role="tablist"
      aria-label="Language switcher"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* subtle inner highlight line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full
                   [background:radial-gradient(circle_at_30%_20%,rgba(76,194,255,0.14),transparent_55%)]"
      />

      {languages.map((lang) => {
        const isActive = locale === lang.code;

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleChange(lang.code)}
            disabled={isPending}
            role="tab"
            aria-selected={isActive}
            className={[
              "relative isolate",
              "px-3.5 md:px-4 py-2",
              "text-[10px] md:text-[11px]",
              "font-semibold tracking-[0.22em] uppercase",
              "rounded-full",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]",
              "disabled:cursor-not-allowed",
              isActive
                ? "text-[#EAF3FF]"
                : "text-slate-300/80 hover:text-[#EAF3FF]",
            ].join(" ")}
          >
            {/* Active pill: строгий «стеклянный» акцент (без pulse) */}
            {isActive && (
              <span
                aria-hidden="true"
                className={[
                  "absolute inset-0 -z-10 rounded-full",
                  "bg-white/[0.07]",
                  "border border-white/12",
                  "shadow-[0_0_0_1px_rgba(76,194,255,0.22),0_10px_25px_rgba(0,0,0,0.45)]",
                ].join(" ")}
              />
            )}

            {/* tiny accent dot for active */}
            <span className="inline-flex items-center gap-2">
              {isActive && (
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full
                             bg-[#4CC2FF]
                             shadow-[0_0_12px_rgba(76,194,255,0.65)]"
                />
              )}
              <span>{lang.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}