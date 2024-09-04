"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        <SessionProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
