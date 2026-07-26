import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jae-Hyuk Chang | Full-stack Developer",
  description:
    "Portfolio for Jae-Hyuk Chang, a UVA Computer Science student building AI-powered web platforms with cloud-ready engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
