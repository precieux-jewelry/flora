import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NewsletterModal } from "@/components/newsletter/newsletter-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flora-beta-two.vercel.app"),
  title: "The social app for runners, fits, and shoe reviews",
  description:
    "Flora is the social app for runners — share your fits, review your shoes, and find race-day fuel that actually works.",
  openGraph: {
    title: "The social app for runners, fits, and shoe reviews",
    description:
      "Flora is the social app for runners — share your fits, review your shoes, and find race-day fuel that actually works.",
    siteName: "Flora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The social app for runners, fits, and shoe reviews",
    description:
      "Flora is the social app for runners — share your fits, review your shoes, and find race-day fuel that actually works.",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <NewsletterModal />
      </body>
    </html>
  );
}
