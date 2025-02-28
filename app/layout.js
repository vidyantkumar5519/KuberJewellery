"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import Footer from "./footer/page";
import "./globals.css";
import Navbar from "./navbar/page";
import { metadata } from "./metadata";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export { metadata };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should happen once
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
