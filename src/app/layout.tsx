"use client";

import "./globals.css";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.className} text-white bg-[#030303] overflow-x-hidden`}
      >
        {/* Premium background atmosphere */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]" />

        {/* Page transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
