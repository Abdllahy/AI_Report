import { TempoInit } from "@/components/tempo-init";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Providers } from "@/app/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Impact Analysis Dashboard",
  description:
    "A comprehensive analysis of AI adoption, revenue impact, and consumer trust metrics across different countries and industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <Providers>
          <div className="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
          </div>
          {children}
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
