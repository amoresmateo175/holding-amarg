import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMARG Holding – Structured Operations & IT-Driven Growth",
  description:
    "AMARG is a multi-division holding company focused on M&A, IT operations, and scaling SMBs through centralized management.",
  openGraph: {
    title: "AMARG Holding – Structured Operations & IT-Driven Growth",
    description:
      "Explore our subsidiaries, operational model, and technology-driven growth strategy.",
    url: "https://www.tu-dominio.com",
    siteName: "AMARG Holding",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMARG Holding Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AMARGHolding",
    title: "AMARG Holding – Structured Operations & IT-Driven Growth",
    description:
      "Explore our subsidiaries, operational model, and technology-driven growth strategy.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}