import type { Metadata } from "next";
import { Inter, Lora, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://invest.365happy365.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "365invest - 경제와 금융의 모든 것",
    template: "%s | 365invest",
  },
  description: "경제, 금융, 투자에 관한 최신 정보와 분석을 제공하는 블로그",
  keywords: ["블로그", "경제", "금융", "투자", "주식", "부동산"],
  authors: [{ name: "365invest" }],
  creator: "365invest",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "365invest",
    title: "365invest - 경제와 금융의 모든 것",
    description: "경제, 금융, 투자에 관한 최신 정보와 분석을 제공하는 블로그",
  },
  twitter: {
    card: "summary_large_image",
    title: "365invest - 경제와 금융의 모든 것",
    description: "경제, 금융, 투자에 관한 최신 정보와 분석을 제공하는 블로그",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${lora.variable} ${firaCode.variable}`}>
      <body className="antialiased bg-cream-50 text-ink-900 font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
