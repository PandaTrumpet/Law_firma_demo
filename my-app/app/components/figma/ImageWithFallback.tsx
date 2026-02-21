// "use client";

// import Image, { ImageProps } from "next/image";
// import { useState } from "react";

// const ERROR_IMG_SRC =
//   "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

// type Props = ImageProps;

// export function ImageWithFallback(props: Props) {
//   const [didError, setDidError] = useState(false);

//   const { src, alt, fill, width, height, ...rest } = props;

//   if (didError) {
//     return (
//       <Image
//         src={ERROR_IMG_SRC}
//         alt="Error loading image"
//         width={88}
//         height={88}
//       />
//     );
//   }

// if (fill) {
//   return (
//     <Image
//       {...rest}
//       src={src}
//       alt={alt}
//       fill
//       onError={() => setDidError(true)}
//     />
//   );
// }

//   // 🔹 Если используется width/height
//   if (width && height) {
//     return (
//       <Image
//         {...rest}
//         src={src}
//         alt={alt}
//         width={width}
//         height={height}
//         onError={() => setDidError(true)}
//       />
//     );
//   }

//   // 🔴 Если забыли передать размеры — покажем fallback
//   console.error("ImageWithFallback requires either fill or width/height");
//   return null;
// }

"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

type Props = ImageProps;

export function ImageWithFallback(props: Props) {
  const [didError, setDidError] = useState(false);

  const { src, alt, fill, width, height, ...rest } = props;

  if (didError) {
    return (
      <Image
        src={ERROR_IMG_SRC}
        alt="Error loading image"
        width={88}
        height={88}
      />
    );
  }

  // ✅ fill-режим
  if (fill) {
    return (
      <Image
        {...rest}
        src={src}
        alt={alt}
        fill
        onError={() => setDidError(true)}
      />
    );
  }

  // ✅ fixed-режим
  if (width && height) {
    return (
      <Image
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onError={() => setDidError(true)}
      />
    );
  }

  // ✅ безопасный fallback без консоли (важно для продакшена)
  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      width={1200}
      height={800}
      onError={() => setDidError(true)}
    />
  );
}