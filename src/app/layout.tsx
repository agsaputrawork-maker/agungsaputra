import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOLDZONFIRE | Admin Console",
  description: "Exclusive Trading Engine & Client Management Dashboard by GOLDZONFIRE.",
  icons: {
    icon: "https://s6.imgcdn.dev/Y8iVa0.png",
    apple: "https://s6.imgcdn.dev/Y8iVa0.png",
  },
  openGraph: {
    title: "GOLDZONFIRE Engine",
    description: "Premium Auto-Copy Trading Ecosystem.",
    images: ["https://s6.imgcdn.dev/Y8iVa0.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-gray-200">{children}</body>
    </html>
  );
}
