import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Rose Tattoo & Gallery — Amsterdam",
  description:
    "Intimate tattoo studio and art gallery in Amsterdam Centrum. Blackwork, fine line, traditional & neo-traditional tattoos by 10+ resident artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#080808" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#080808] text-[#F5F0E8] antialiased font-[family-name:var(--font-inter)]`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
