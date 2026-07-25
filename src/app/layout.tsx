import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { chatbotConfig } from "@/lib/chatbot-data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jagkalyantarakgurukul.com"),
  title: "JagKalyan Tarak Gurukul | Where Ancient Wisdom Meets Future Innovation",
  description:
    "An integrated campus for holistic education, wellness, research, and eco-living in Dodamarg, North Goa, a joint initiative of JagKalyan Holistic Mission and Saiccha Developers.",
  openGraph: {
    title: "JagKalyan Tarak Gurukul | Where Ancient Wisdom Meets Future Innovation",
    description:
      "An integrated campus for holistic education, wellness, research, and eco-living in Dodamarg, North Goa, a joint initiative of JagKalyan Holistic Mission and Saiccha Developers.",
    url: "/",
    siteName: "JagKalyan Tarak Gurukul",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JagKalyan Tarak Gurukul | Where Ancient Wisdom Meets Future Innovation",
    description:
      "An integrated campus for holistic education, wellness, research, and eco-living in Dodamarg, North Goa, a joint initiative of JagKalyan Holistic Mission and Saiccha Developers.",
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
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot config={chatbotConfig} />
      </body>
    </html>
  );
}
