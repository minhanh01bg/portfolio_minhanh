import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";


const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Minh Anh | AI Engineer Portfolio",
  description:
    "AI Engineer building LLM apps, automations, and data products.",
  openGraph: {
    title: "Minh Anh | AI Engineer Portfolio",
    description:
      "AI Engineer building LLM apps, automations, and data products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Anh | AI Engineer Portfolio",
    description:
      "AI Engineer building LLM apps, automations, and data products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
