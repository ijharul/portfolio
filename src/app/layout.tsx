import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import AIAssistant from "@/components/AIAssistant";




const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ijharul Haque | Full Stack Developer & AI Enthusiast",
    template: "%s | Ijharul Haque"
  },
  description: "Portfolio of Ijharul Haque, a B.Tech CSE student at TMSL specializing in MERN stack and AI. SIH 2025 Finalist.",
  keywords: ["Ijharul Haque", "Techno Main Salt Lake", "TMSL", "Full Stack Developer", "AI Enthusiast", "MERN Stack", "SIH 2025"],
  authors: [{ name: "Ijharul Haque" }],
  creator: "Ijharul Haque",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://campus-nexus-ten.vercel.app", // Using one of their live links as base
    title: "Ijharul Haque | Full Stack Developer",
    description: "Building the future of web with MERN and AI.",
    siteName: "Ijharul Haque Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ijharul Haque | Full Stack Developer",
    description: "B.Tech CSE Student @ TMSL | MERN Stack | AI Enthusiast",
    creator: "@ijharul",
  },
  robots: {
    index: true,
    follow: true,
  }
};



import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/30`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >



          <ScrollProgress />
          <Spotlight />
          <AIAssistant />
          <CustomCursor />
          <LoadingScreen />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

