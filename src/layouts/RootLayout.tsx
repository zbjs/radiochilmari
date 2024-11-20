import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/ui/Navbar';


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
      <body className={inter.className}>
        <Navbar />
        <div className="flex-grow container mx-auto px-4 pt-20">
        {children}
        </div>
       
      </body>
    </html>
  );
}