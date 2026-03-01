import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

export const metadata: Metadata = {
  title: "Black Rose Tattoo & Gallery · Amsterdam Centrum",
  description:
    "Black Rose Tattoo And Gallery, tattoo studio in het hart van Amsterdam. Dirk van Hasseltssteeg 56, 1012 NE Amsterdam. 344 vijf-sterren reviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={`${cormorant.variable} ${inter.variable} font-[family-name:var(--font-inter)] bg-dark text-cream antialiased overflow-x-hidden`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
