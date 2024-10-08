import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "DAOi",
  description:
    "DAOi is the first decentralized autonomous organization (DAO) dedicated to the development of the Internet Computer ecosystem.",
  alternates: {
    canonical: "/"
  },

  openGraph: {
    url: "/",
    title: "DAOi",
    description:
      "DAOi is the first decentralized autonomous organization (DAO) dedicated to the development of the Internet Computer ecosystem.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DAOi",
    description:
      "DAOi is the first decentralized autonomous organization (DAO) dedicated to the development of the Internet Computer ecosystem."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
