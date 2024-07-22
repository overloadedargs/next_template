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
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" id="pagestyle" title="preferred" href="./styles/global_theme_contrast.css" type="text/css"/>

          <Script strategy="beforeInteractive" defer src="https://example.com/script.js"/>
        </head>
        <body className={inter.className}>{children}
          <footer>
            <div className="githubLinkWrapper">
              <a href="https://www.github.com/overloadedargs/next_template"><div className="githubLink">Next Template</div></a>
            </div>
          </footer>
          <StylesheetSelector />
        </body>
      </html>
    </>
  );
}
