import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/ui/Navbar';
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to the radiochilmari",
  description: "radiochilmari",
  icons: { icon: "/public/apple-touch-icon.png" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="radiochilmari" />
      <meta name="author" content="radiochilmari" />
      <meta name="keywords" content="radiochilmari kurigramfmradio, fmradio, radiochilmari, radiochilmari kurigramfmradio" key="keywords" />
      <body className={inter.className}>
        <Navbar />
        <div className="flex-grow container mx-auto px-4 pt-20 font-bengali">
        {children}
        </div>
        <Footer />
       
      </body>
    </html>
  );
}