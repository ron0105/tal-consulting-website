import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { ThemeProvider } from "@/components/shared/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "TAL Consulting — We help businesses run better and grow smoothly.",
    template: "%s | TAL Consulting",
  },
  description:
    "We help running businesses improve operations, get more consistent customers, and bring clarity to how the business works. We also help founders test and validate ideas before investing time and money.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
