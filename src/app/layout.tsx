import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import { company } from "@/lib/data/company";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.charelizng.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} Nominees Consolidated Services Limited`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "CharEliz",
    "CharEliz Nominees",
    "construction Nigeria",
    "procurement Nigeria",
    "real estate Lagos",
    "supply chain management",
    "consultancy services Nigeria",
  ],
  openGraph: {
    title: `${company.shortName} Nominees Consolidated Services Limited`,
    description: company.description,
    url: siteUrl,
    siteName: company.shortName,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} Nominees Consolidated Services Limited`,
    description: company.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-surface-white text-text-primary antialiased">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
