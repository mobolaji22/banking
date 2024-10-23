import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from 'next/font/google';
import "./globals.css";

const inter = Inter({subsets:['latin'], variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--font-ibm-plex-serif',
  weight: ['400', '700'],
  // style: 'normal',
  // display:'swap',
  // fallback: {
  //   style: 'normal',
  //   weight: 400,
  //   display: 'fallback',
  // },
  // formats: ['woff2','woff'],
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
    // type: "image/svg",
    // href: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
