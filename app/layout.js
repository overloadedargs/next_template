import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
 
export const metadata = {
  keywords: ['Next.js', ' React', ' JavaScript', ' SEO'],
  title: 'A New Title'
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // for including themes with alternates in browser view page/style selector
  return (
    <>
      <html lang="en">
        <head>
          <link rel="alternate stylesheet" title="Global" href="/styles/global_theme.css" />
          <link rel="alternate stylesheet" title="Higher Contrast" href="/styles/global_theme_contrast.css" type="text/css"/>
          <link rel="alternate stylesheet" title="CSS Extra" href="/styles/global_theme_extra.css" type="text/css"/>
          <Script strategy="beforeInteractive" defer src="https://example.com/script.js"/>
        </head>
        <body className={inter.className}>{children}
          <p>Test</p>
        </body>
      </html>
    </>
  );
}
