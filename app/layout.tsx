import { cn } from "@/utils/classnames";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { DotsBG } from "@/content/DotsBG";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Vito Secona",
  description: "Vito Secona's portfolio website.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          font.className,
          "bg-gray-100 scroll-smooth overflow-x-hidden"
        )}
      >
        <DotsBG />
        {children}
      </body>
    </html>
  );
}
