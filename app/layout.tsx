import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ArchitectSignature } from "@/components/layout/architect-signature";
import { SiteFooter } from "@/components/command-center/site-footer";
import { GlobalCommandPalette } from "@/components/command-palette/global-command-palette";
import { GlobalHeader } from "@/components/layout/global-header";
import { TacticalParallaxBg } from "@/components/layout/tactical-parallax-bg";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aegis Defense | Counter-UAS & Airspace Security",
  description:
    "Detection, mitigation, and command infrastructure for contested airspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-zinc-950 text-zinc-100">
        <ThemeProvider>
          <TacticalParallaxBg />
          <div className="relative z-[1] flex min-h-dvh flex-col">
            <GlobalHeader />
            <main className="flex min-w-0 flex-1 flex-col overflow-x-clip px-4 md:px-8">
              {children}
            </main>
            <SiteFooter />
            <ArchitectSignature />
            <GlobalCommandPalette />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
