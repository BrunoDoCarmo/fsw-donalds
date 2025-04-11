import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popping = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW Donalds",
  description: "Bora terminar esse projeto lindo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${popping.className} antialiased`}>{children}</body>
    </html>
  );
}
