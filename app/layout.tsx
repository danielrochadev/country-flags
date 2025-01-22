import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Country Flags",
  description: "App feito em NextJS que exibe bandeiras e informações de países através do uso e consumo de uma API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
