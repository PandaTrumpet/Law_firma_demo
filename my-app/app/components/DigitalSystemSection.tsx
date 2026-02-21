// "use client";

// import {
//   Workflow,
//   MessageCircle,
//   Calculator,
//   Languages,
//   LineChart,
//   Database,
//   Shield,
//   ArrowRight,
// } from "lucide-react";
// import { useLocale } from "next-intl";
// import { motion } from "motion/react";
// import { useMotion } from "../lib/motion";

// export function DigitalSystemSection() {
//   const locale = useLocale();
//   const isRTL = locale === "he";
//   const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

//   const items = [
//     {
//       icon: Workflow,
//       title: "CRM-система обработки заявок",
//       description:
//         "Все обращения автоматически фиксируются, получают статус и распределяются по ответственным без ручного хаоса.",
//       features: [
//         "Статусы и ответственные",
//         "История коммуникации",
//         "Сегментация лидов",
//         "Сроки реакции и выполнения задач",
//       ],
//       accent: "gold",
//     },
//     {
//       icon: MessageCircle,
//       title: "Автоматизация WhatsApp",
//       description:
//         "Мгновенный автоответ клиенту + уведомления команде. Статусы, напоминания и быстрые шаблоны сообщений.",
//       features: [
//         "Автоответ за секунды",
//         "Статусы “в обработке / запрос документов”",
//         "Шаблоны и теги",
//         "Уведомления о дедлайнах",
//       ],
//       accent: "blue",
//     },
//     {
//       icon: Calculator,
//       title: "Онлайн-калькулятор стоимости",
//       description:
//         "Повышает вовлечённость и помогает отсеивать несерьёзные запросы ещё до консультации.",
//       features: [
//         "Предварительная оценка",
//         "Квалификация лида",
//         "Сбор параметров сделки",
//         "Рост конверсии CTA",
//       ],
//       accent: "cyan",
//     },
//     {
//       icon: Languages,
//       title: "Мультиязычность (EN | HE | RU)",
//       description:
//         "Одинаково удобно для местных клиентов и иностранных инвесторов: язык, направление текста и UX адаптируются автоматически.",
//       features: [
//         "RTL для иврита",
//         "SEO под языки",
//         "Единый дизайн-системный слой",
//         "Локализованные формы",
//       ],
//       accent: "violet",
//     },
//     {
//       icon: LineChart,
//       title: "Система контроля обращений",
//       description:
//         "Цифровой контроль всех входящих запросов и этапов работы без потерь и ручного хаоса.",
//       features: [
//         "Учёт всех заявок",
//         "Приоритизация клиентов",
//         "Сроки обработки",
//         "Отчёт по статусам",
//       ],
//       accent: "emerald",
//     },
//     {
//       icon: Database,
//       title: "Защищённая база данных клиентов",
//       description:
//         "Системное хранение данных и документов. Контроль доступа и порядок в работе с клиентами.",
//       features: [
//         "Структура данных клиентов",
//         "Документы и статусы",
//         "Роли и доступы",
//         "Экспорт и отчёты",
//       ],
//       accent: "amber",
//     },
//   ] as const;

//   const getAccent = (accent: (typeof items)[number]["accent"]) => {
//     switch (accent) {
//       case "gold":
//         return {
//           ring: "ring-[#c9a961]/25",
//           iconBg: "bg-[#c9a961]/12",
//           iconBorder: "border-[#c9a961]/22",
//           iconColor: "text-[#c9a961]",
//           hoverBorder: "hover:border-[#c9a961]/40",
//           hoverTitle: "group-hover:text-[#c9a961]",
//         };
//       case "blue":
//         return {
//           ring: "ring-[#4CC2FF]/20",
//           iconBg: "bg-[#4CC2FF]/10",
//           iconBorder: "border-[#4CC2FF]/18",
//           iconColor: "text-[#86D7FF]",
//           hoverBorder: "hover:border-[#4CC2FF]/35",
//           hoverTitle: "group-hover:text-[#86D7FF]",
//         };
//       case "cyan":
//         return {
//           ring: "ring-cyan-300/15",
//           iconBg: "bg-cyan-300/10",
//           iconBorder: "border-cyan-300/15",
//           iconColor: "text-cyan-200",
//           hoverBorder: "hover:border-cyan-300/30",
//           hoverTitle: "group-hover:text-cyan-200",
//         };
//       case "violet":
//         return {
//           ring: "ring-violet-400/15",
//           iconBg: "bg-violet-400/10",
//           iconBorder: "border-violet-400/15",
//           iconColor: "text-violet-200",
//           hoverBorder: "hover:border-violet-400/30",
//           hoverTitle: "group-hover:text-violet-200",
//         };
//       case "emerald":
//         return {
//           ring: "ring-emerald-400/15",
//           iconBg: "bg-emerald-400/10",
//           iconBorder: "border-emerald-400/15",
//           iconColor: "text-emerald-200",
//           hoverBorder: "hover:border-emerald-400/30",
//           hoverTitle: "group-hover:text-emerald-200",
//         };
//       case "amber":
//         return {
//           ring: "ring-amber-300/15",
//           iconBg: "bg-amber-300/10",
//           iconBorder: "border-amber-300/15",
//           iconColor: "text-amber-200",
//           hoverBorder: "hover:border-amber-300/30",
//           hoverTitle: "group-hover:text-amber-200",
//         };
//       default:
//         return {
//           ring: "ring-white/10",
//           iconBg: "bg-white/5",
//           iconBorder: "border-white/10",
//           iconColor: "text-white",
//           hoverBorder: "hover:border-white/15",
//           hoverTitle: "group-hover:text-white",
//         };
//     }
//   };

//   return (
//     <section
//       id="digital-system"
//       dir={isRTL ? "rtl" : "ltr"}
//       className="relative overflow-hidden text-white"
//       aria-labelledby="digital-system-title"
//     >
//       {/* Corporate background (same style as ServicesSection) */}
//       <div className="absolute inset-0 -z-10 bg-[#0C1A2A]" />
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
//         <div className="absolute -top-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
//         <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />
//         <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
//       </div>

//       <div
//         className="
//           relative z-10 max-w-[1400px] mx-auto
//           px-4 sm:px-6 lg:px-12
//           pt-16 pb-16
//           md:pt-20 md:pb-20
//           lg:pt-24 lg:pb-24
//         "
//       >
//         {/* Header */}
//         <motion.div
//           variants={m.container}
//           initial="hidden"
//           whileInView="show"
//           viewport={m.viewport}
//           className="text-center"
//         >
//           <motion.div
//             variants={m.item}
//             className="mb-6 flex items-center justify-center gap-2"
//           >
//             <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#4CC2FF]/20 bg-[#4CC2FF]/10 backdrop-blur-xl">
//               <Shield size={16} className="text-[#86D7FF]" />
//               <span className="text-[#86D7FF] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
//                 Legal-Tech / Automation
//               </span>
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={m.item}
//             id="digital-system-title"
//             className="
//               font-semibold tracking-tight leading-[1.08]
//               text-[clamp(1.75rem,5.6vw,2.6rem)]
//               lg:text-[clamp(2.6rem,3.2vw,3.3rem)]
//             "
//           >
//             Цифровая система, которая стоит за этим сайтом
//             <br />
//             <span className="text-[#c9a961]">и делает его инструментом</span>
//           </motion.h2>

//           <motion.p
//             variants={m.item}
//             className="
//               mt-5 mx-auto
//               text-slate-200/75 leading-relaxed max-w-[78ch]
//               text-[clamp(1.0rem,2.6vw,1.15rem)]
//               lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
//             "
//           >
//             Этот landing page — пример того, как можно автоматизировать и
//             масштабировать юридический бизнес: лиды, коммуникация, аналитика,
//             прозрачность процесса.
//           </motion.p>

//           {/* subtle divider to mark "system section" */}
//           <motion.div variants={m.item} className="mt-8 flex justify-center">
//             <div className="h-px w-[min(820px,92%)] bg-gradient-to-r from-transparent via-white/14 to-transparent" />
//           </motion.div>
//         </motion.div>

//         {/* Grid (same pattern as services cards) */}
//         <motion.div
//           variants={m.container}
//           initial="hidden"
//           whileInView="show"
//           viewport={m.viewport}
//           className="mt-10 grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3"
//         >
//           {items.map((it) => {
//             const Icon = it.icon;
//             const a = getAccent(it.accent);

//             return (
//               <motion.div
//                 key={it.title}
//                 variants={m.item}
//                 className={[
//                   "group relative rounded-2xl p-6 sm:p-7",
//                   "bg-[#132235]",
//                   "border border-white/10",
//                   "shadow-[0_25px_80px_rgba(0,0,0,0.42)]",
//                   "transition-all duration-300 ease-[0.16,1,0.3,1]",
//                   "hover:-translate-y-2",
//                   a.hoverBorder,
//                   "hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]",
//                 ].join(" ")}
//               >
//                 <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

//                 <div
//                   className={[
//                     "h-12 w-12 sm:h-14 sm:w-14 rounded-xl",
//                     "border",
//                     "flex items-center justify-center",
//                     "shadow-[0_12px_30px_rgba(0,0,0,0.30)]",
//                     a.iconBg,
//                     a.iconBorder,
//                   ].join(" ")}
//                 >
//                   <Icon
//                     className={["h-6 w-6 sm:h-7 sm:w-7", a.iconColor].join(" ")}
//                   />
//                 </div>

//                 <h3
//                   className={[
//                     "mt-5 text-lg sm:text-xl font-semibold text-white",
//                     "transition-colors duration-300",
//                     a.hoverTitle,
//                   ].join(" ")}
//                 >
//                   {it.title}
//                 </h3>

//                 <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
//                   {it.description}
//                 </p>

//                 <ul className="mt-5 space-y-3">
//                   {it.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className={[
//                         "flex items-start gap-2.5 text-sm sm:text-[14px]",
//                         "text-slate-200/70",
//                         isRTL
//                           ? "flex-row-reverse text-right"
//                           : "flex-row text-left",
//                       ].join(" ")}
//                     >
//                       <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
//                         <svg
//                           className="h-3.5 w-3.5 text-[#c9a961]"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           aria-hidden="true"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </span>
//                       <span className="leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-6 pt-6 border-t border-white/10">
//                   <span
//                     className={[
//                       "inline-flex items-center gap-2 text-sm font-semibold",
//                       "text-[#c9a961]/85",
//                       "opacity-90 group-hover:opacity-100 transition-opacity",
//                       isRTL ? "flex-row-reverse" : "flex-row",
//                     ].join(" ")}
//                   >
//                     Как это работает
//                     <svg
//                       className={[
//                         "w-4 h-4 transition-transform duration-300",
//                         isRTL
//                           ? "rotate-180 group-hover:-translate-x-0.5"
//                           : "group-hover:translate-x-0.5",
//                       ].join(" ")}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </span>
//                 </div>

//                 {/* subtle ring on hover */}
//                 <div
//                   className={[
//                     "pointer-events-none absolute inset-0 rounded-2xl ring-1 opacity-0",
//                     a.ring,
//                     "group-hover:opacity-100 transition-opacity duration-300",
//                   ].join(" ")}
//                   aria-hidden="true"
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* System note + mini CTA (different style) */}
//         <motion.div
//           initial={m.fadeUp.initial}
//           whileInView={m.fadeUp.whileInView}
//           viewport={m.viewport}
//           className="mt-12 sm:mt-14 text-center"
//         >
//           <p className="text-slate-200/70 mb-5 text-sm sm:text-base max-w-[70ch] mx-auto">
//             <span className="text-white font-semibold">
//               Этот сайт — не просто лендинг.
//             </span>{" "}
//             Это инструмент генерации и управления клиентами: автоматизация,
//             прозрачность процесса и системная работа с лидами.
//           </p>

//           <motion.a
//             href="https://www.savondev.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.99 }}
//             className="
//               inline-flex items-center justify-center gap-2
//               rounded-xl
//               px-6 sm:px-7 py-3.5
//               text-[15px] sm:text-[16px]
//               font-semibold
//               bg-[#4CC2FF]/10 text-white
//               border border-[#4CC2FF]/25
//               backdrop-blur-xl
//               hover:bg-[#4CC2FF]/14
//               transition-colors
//               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50
//             "
//             aria-label="Перейти на сайт SavonDev"
//           >
//             Хочу такую систему для своего бизнеса
//             <ArrowRight
//               className={["h-4 w-4", isRTL ? "rotate-180" : ""].join(" ")}
//             />
//           </motion.a>

//           <p className="mt-4 text-slate-200/55 text-xs sm:text-sm">
//             Мини-CTA: демонстрация возможностей digital-системы без конфликта с
//             юридическим оффером.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Workflow,
  MessageCircle,
  Calculator,
  Languages,
  LineChart,
  Database,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useMotion } from "../lib/motion";

export function DigitalSystemSection() {
  const t = useTranslations("digitalSystem");
  const locale = useLocale();
  const isRTL = locale === "he";
  const m = useMotion({ y: 18, stagger: 0.08, delay: 0.06, duration: 0.75 });

  const items = [
    {
      icon: Workflow,
      title: t("cards.crm.title"),
      description: t("cards.crm.description"),
      features: [
        t("cards.crm.features.0"),
        t("cards.crm.features.1"),
        t("cards.crm.features.2"),
        t("cards.crm.features.3"),
      ],
      accent: "gold",
    },
    {
      icon: MessageCircle,
      title: t("cards.whatsapp.title"),
      description: t("cards.whatsapp.description"),
      features: [
        t("cards.whatsapp.features.0"),
        t("cards.whatsapp.features.1"),
        t("cards.whatsapp.features.2"),
        t("cards.whatsapp.features.3"),
      ],
      accent: "blue",
    },
    {
      icon: Calculator,
      title: t("cards.calculator.title"),
      description: t("cards.calculator.description"),
      features: [
        t("cards.calculator.features.0"),
        t("cards.calculator.features.1"),
        t("cards.calculator.features.2"),
        t("cards.calculator.features.3"),
      ],
      accent: "cyan",
    },
    {
      icon: Languages,
      title: t("cards.lang.title"),
      description: t("cards.lang.description"),
      features: [
        t("cards.lang.features.0"),
        t("cards.lang.features.1"),
        t("cards.lang.features.2"),
        t("cards.lang.features.3"),
      ],
      accent: "violet",
    },
    {
      icon: LineChart,
      title: t("cards.control.title"),
      description: t("cards.control.description"),
      features: [
        t("cards.control.features.0"),
        t("cards.control.features.1"),
        t("cards.control.features.2"),
        t("cards.control.features.3"),
      ],
      accent: "emerald",
    },
    {
      icon: Database,
      title: t("cards.secureDb.title"),
      description: t("cards.secureDb.description"),
      features: [
        t("cards.secureDb.features.0"),
        t("cards.secureDb.features.1"),
        t("cards.secureDb.features.2"),
        t("cards.secureDb.features.3"),
      ],
      accent: "amber",
    },
  ] as const;

  const getAccent = (accent: (typeof items)[number]["accent"]) => {
    switch (accent) {
      case "gold":
        return {
          ring: "ring-[#c9a961]/25",
          iconBg: "bg-[#c9a961]/12",
          iconBorder: "border-[#c9a961]/22",
          iconColor: "text-[#c9a961]",
          hoverBorder: "hover:border-[#c9a961]/40",
          hoverTitle: "group-hover:text-[#c9a961]",
        };
      case "blue":
        return {
          ring: "ring-[#4CC2FF]/20",
          iconBg: "bg-[#4CC2FF]/10",
          iconBorder: "border-[#4CC2FF]/18",
          iconColor: "text-[#86D7FF]",
          hoverBorder: "hover:border-[#4CC2FF]/35",
          hoverTitle: "group-hover:text-[#86D7FF]",
        };
      case "cyan":
        return {
          ring: "ring-cyan-300/15",
          iconBg: "bg-cyan-300/10",
          iconBorder: "border-cyan-300/15",
          iconColor: "text-cyan-200",
          hoverBorder: "hover:border-cyan-300/30",
          hoverTitle: "group-hover:text-cyan-200",
        };
      case "violet":
        return {
          ring: "ring-violet-400/15",
          iconBg: "bg-violet-400/10",
          iconBorder: "border-violet-400/15",
          iconColor: "text-violet-200",
          hoverBorder: "hover:border-violet-400/30",
          hoverTitle: "group-hover:text-violet-200",
        };
      case "emerald":
        return {
          ring: "ring-emerald-400/15",
          iconBg: "bg-emerald-400/10",
          iconBorder: "border-emerald-400/15",
          iconColor: "text-emerald-200",
          hoverBorder: "hover:border-emerald-400/30",
          hoverTitle: "group-hover:text-emerald-200",
        };
      case "amber":
        return {
          ring: "ring-amber-300/15",
          iconBg: "bg-amber-300/10",
          iconBorder: "border-amber-300/15",
          iconColor: "text-amber-200",
          hoverBorder: "hover:border-amber-300/30",
          hoverTitle: "group-hover:text-amber-200",
        };
      default:
        return {
          ring: "ring-white/10",
          iconBg: "bg-white/5",
          iconBorder: "border-white/10",
          iconColor: "text-white",
          hoverBorder: "hover:border-white/15",
          hoverTitle: "group-hover:text-white",
        };
    }
  };

  return (
    <section
      id="digital-system"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden text-white"
      aria-labelledby="digital-system-title"
      aria-label={t("seo.sectionLabel")}
    >
      {/* Corporate background */}
      <div className="absolute inset-0 -z-10 bg-[#0C1A2A]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10" />
        <div className="absolute -top-28 right-[-12%] h-96 w-96 rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle,rgba(76,194,255,0.35),transparent_60%)]" />
        <div className="absolute -bottom-32 left-[-18%] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-12 bg-[radial-gradient(circle,rgba(201,169,97,0.28),transparent_60%)]" />
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
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#4CC2FF]/20 bg-[#4CC2FF]/10 backdrop-blur-xl">
              <Shield size={16} className="text-[#86D7FF]" />
              <span className="text-[#86D7FF] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase">
                {t("badge")}
              </span>
            </span>
          </motion.div>

          <motion.h2
            variants={m.item}
            id="digital-system-title"
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
              text-slate-200/75 leading-relaxed max-w-[78ch]
              text-[clamp(1.0rem,2.6vw,1.15rem)]
              lg:text-[clamp(1.1rem,1.25vw,1.25rem)]
            "
          >
            {t("subtitle")}
          </motion.p>

          <motion.div variants={m.item} className="mt-8 flex justify-center">
            <div className="h-px w-[min(820px,92%)] bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={m.container}
          initial="hidden"
          whileInView="show"
          viewport={m.viewport}
          className="mt-10 grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3"
        >
          {items.map((it) => {
            const Icon = it.icon;
            const a = getAccent(it.accent);

            return (
              <motion.div
                key={it.title}
                variants={m.item}
                className={[
                  "group relative rounded-2xl p-6 sm:p-7",
                  "bg-[#132235]",
                  "border border-white/10",
                  "shadow-[0_25px_80px_rgba(0,0,0,0.42)]",
                  "transition-all duration-300 ease-[0.16,1,0.3,1]",
                  "hover:-translate-y-2",
                  a.hoverBorder,
                  "hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                <div
                  className={[
                    "h-12 w-12 sm:h-14 sm:w-14 rounded-xl",
                    "border",
                    "flex items-center justify-center",
                    "shadow-[0_12px_30px_rgba(0,0,0,0.30)]",
                    a.iconBg,
                    a.iconBorder,
                  ].join(" ")}
                >
                  <Icon
                    className={["h-6 w-6 sm:h-7 sm:w-7", a.iconColor].join(" ")}
                  />
                </div>

                <h3
                  className={[
                    "mt-5 text-lg sm:text-xl font-semibold text-white",
                    "transition-colors duration-300",
                    a.hoverTitle,
                  ].join(" ")}
                >
                  {it.title}
                </h3>

                <p className="mt-3 text-slate-200/70 leading-relaxed text-sm sm:text-[15px]">
                  {it.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {it.features.map((feature) => (
                    <li
                      key={feature}
                      className={[
                        "flex items-start gap-2.5 text-sm sm:text-[14px]",
                        "text-slate-200/70",
                        isRTL
                          ? "flex-row-reverse text-right"
                          : "flex-row text-left",
                      ].join(" ")}
                    >
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        <svg
                          className="h-3.5 w-3.5 text-[#c9a961]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span
                    className={[
                      "inline-flex items-center gap-2 text-sm font-semibold",
                      "text-[#c9a961]/85",
                      "opacity-90 group-hover:opacity-100 transition-opacity",
                      isRTL ? "flex-row-reverse" : "flex-row",
                    ].join(" ")}
                  >
                    {t("howItWorks")}
                    <svg
                      className={[
                        "w-4 h-4 transition-transform duration-300",
                        isRTL
                          ? "rotate-180 group-hover:-translate-x-0.5"
                          : "group-hover:translate-x-0.5",
                      ].join(" ")}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  className={[
                    "pointer-events-none absolute inset-0 rounded-2xl ring-1 opacity-0",
                    a.ring,
                    "group-hover:opacity-100 transition-opacity duration-300",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={m.fadeUp.initial}
          whileInView={m.fadeUp.whileInView}
          viewport={m.viewport}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-slate-200/70 mb-5 text-sm sm:text-base max-w-[70ch] mx-auto">
            <span className="text-white font-semibold">
              {t("bottom.noteStrong")}
            </span>{" "}
            {t("bottom.note")}
          </p>

          <motion.a
            href="https://www.savondev.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl
              px-6 sm:px-7 py-3.5
              text-[15px] sm:text-[16px]
              font-semibold
              bg-[#4CC2FF]/10 text-white
              border border-[#4CC2FF]/25
              backdrop-blur-xl
              hover:bg-[#4CC2FF]/14
              transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CC2FF]/50
            "
            aria-label={t("seo.ctaAria")}
          >
            {t("bottom.cta")}
            <ArrowRight
              className={["h-4 w-4", isRTL ? "rotate-180" : ""].join(" ")}
            />
          </motion.a>

          <p className="mt-4 text-slate-200/55 text-xs sm:text-sm">
            {t("bottom.disclaimer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}