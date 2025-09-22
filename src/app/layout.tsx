import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import PageTitle from "@/components/layout/PageTitle";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Chuong Tran",
  description: "Chuong Tran's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Analytics */}
        <Analytics />

        {/* Mobile/Tablet Navigation - Top */}
        <div className="block xl:hidden">
          <Navigation />
        </div>

        {/* Desktop Page Title - Top Left */}
        <div className="hidden xl:block fixed top-6 left-6 z-50">
          <PageTitle />
        </div>

        {children}

        {/* Desktop Navigation - Bottom Right */}
        <div className="hidden xl:block">
          <Navigation />
        </div>
      </body>
    </html>
  );
}
