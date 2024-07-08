import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Head from 'next/head'
 
export const metadata = {
  keywords: ['Next.js', ' React', ' JavaScript', ' SEO'],
  title: 'A New Title'
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <head>
      <Script strategy="beforeInteractive" defer src="https://example.com/script.js"/>
      </head>
      <html lang="en">
        <body className={inter.className}>{children}
          <p>Test</p>
        </body>
      </html>
    </>
  );
}
