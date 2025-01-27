import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";
import {config} from "./config"
import Navbar from "@/components/navbar";

const bricolageFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn("min-h-screen antialiased font-sans", manrope.variable, bricolageFont.variable)}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
