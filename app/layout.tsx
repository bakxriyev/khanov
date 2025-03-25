import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEKZOD | KHANOV",
  description: "BEKZOD | KHANOV SOTUV MENEJERI",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
      <link rel="icon" type="image/png" href="/khanov.png" />
    </html>
  );
}
