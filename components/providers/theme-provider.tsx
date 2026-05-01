"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  /** Pass-through for next-themes CSP nonce */
  nonce?: string;
};

export function ThemeProvider({ children, nonce }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      enableColorScheme
      nonce={nonce}
    >
      {children}
    </NextThemesProvider>
  );
}
