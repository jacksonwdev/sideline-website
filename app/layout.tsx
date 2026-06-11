import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LegalFooter } from "./components/LegalFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sidelinesocials.com"),
  title: "Sideline",
  description: "Sports communities, creators, and competition in one place.",
  applicationName: "Sideline",
  openGraph: {
    title: "Sideline",
    description: "Sports communities, creators, and competition in one place.",
    url: "/",
    siteName: "Sideline",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sidelinesocials.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sideline - More than sports. It's your Sideline.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sideline",
    description: "Sports communities, creators, and competition in one place.",
    images: ["https://sidelinesocials.com/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
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
      <body className="flex min-h-full flex-col">
        <div className="flex-1">{children}</div>
        <LegalFooter />
      </body>
    </html>
  );
}
