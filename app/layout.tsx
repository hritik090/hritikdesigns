import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mesagni = localFont({
  src: "../public/fonts/mesagni.ttf",
  variable: "--font-mesagni",
});

export const metadata: Metadata = {
  title: "Hritik sharma Coming soon",
  description: "Coming soon page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mesagni.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
