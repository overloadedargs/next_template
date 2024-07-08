import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
 
export const metadata = {
  keywords: ['Next.js', ' React', ' JavaScript', ' SEO'],
  title: 'A New Title'
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <Script strategy="beforeInteractive" defer src="https://example.com/script.js"/>
        </head>
        <body className={inter.className}>{children}
          <p>Test</p>
        </body>
      </html>
    </>
  );
}
