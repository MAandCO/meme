import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ma & Co Accountants | Your Trusted Partner in Tax, Compliance & Growth",
    template: "%s | Ma & Co Accountants"
  },
  description:
    "Expert UK accountants helping professionals and small businesses save tax, stay compliant, and scale with confidence.",
  metadataBase: new URL("https://www.maandcoaccountants.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ma & Co Accountants",
    description:
      "Expert UK accountants helping professionals and small businesses save tax, stay compliant, and scale with confidence.",
    url: "https://www.maandcoaccountants.com",
    siteName: "Ma & Co Accountants",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ma & Co Accountants",
    description:
      "Expert UK accountants helping professionals and small businesses save tax, stay compliant, and scale with confidence."
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-p-20">
      <body>
        <NavBar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
