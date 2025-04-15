import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import MainSidebar from "@/components/main-sidebar";
import { ResizablePanelGroup } from "@/components/ui/resizable";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joakim Edvardsen - VSCode",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark scrollable`}
      >
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex" style={{ height: "calc(100vh - 33px)" }}>
            <MainSidebar />
            <ResizablePanelGroup direction="horizontal">
              {children}
            </ResizablePanelGroup>
          </div>
        </div>
      </body>
    </html>
  );
}
