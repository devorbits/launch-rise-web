import "./globals.css";
import { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Material Icons (for Stitch card icons) */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${spaceGrotesk.className} text-white bg-[#030303] overflow-x-hidden`}
      >
        {/* 🔥 GLOBAL GRID + TORCH BACKGROUND */}
        <div className="fixed inset-0 z-[-2] grid-pattern" />
        <div className="fixed inset-0 z-[-2] torch-glow pointer-events-none" />

        {/* Premium glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]" />

        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="pt-28 relative z-10">{children}</div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
