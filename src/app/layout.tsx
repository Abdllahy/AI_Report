import { TempoInit } from "@/components/tempo-init";
import { Providers } from "@/app/providers";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Metadata is now imported from metadata.ts
export { metadata } from "./metadata";

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
          <ClientLayout />
          <div className="pt-16">
            {/* Add padding to account for fixed header */}
            {children}
          </div>
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
