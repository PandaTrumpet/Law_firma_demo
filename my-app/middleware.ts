// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "he", "ru"],
//   defaultLocale: "en",
//   localePrefix: "always",
// });

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "he", "ru"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false, // ✅ ВАЖНО
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};