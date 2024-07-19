import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import StylesheetSelector from "./stylesheet_selector";
 
export const metadata = {
  keywords: ['Next.js', ' React', ' JavaScript', ' SEO'],
  title: 'Vercel Templates App'
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // pagestyle id link is css for js selector"
  // for including themes with alternates in browser view page/style selector
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" id="pagestyle" title="preferred" href="./styles/global_theme.css" type="text/css"/>

          <Script strategy="beforeInteractive" defer src="https://example.com/script.js"/>
        </head>
        <body className={inter.className}>{children}
          <StylesheetSelector />
        </body>
      </html>
    </>
  );
}
