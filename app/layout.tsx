import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Social Cybersecurity Awareness | Framework Implementasi Keamanan Siber Sosial",
  description:
    "Platform komprehensif untuk implementasi kesadaran keamanan siber sosial dengan framework DAMA-DMBOK, NIST CSF, dan standar ISO/IEC 27001/27005",
  generator: "Social Cybersecurity Research",
  keywords:
    "cybersecurity, social media security, phishing, cyberbullying, e-wallet security, e-commerce security, NIST, ISO 27001, DAMA-DMBOK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
