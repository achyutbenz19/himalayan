import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Himalayan Resturant",
    template: "%s - Authentic Indian & Nepali Flavors ",
  },
  description:
    "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
  metadataBase: new URL("https://himalayan-resturant.vercel.app/"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo1.png",
        href: "/logo1.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} lg:m-8 m-4 bg-[#1e0506]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
