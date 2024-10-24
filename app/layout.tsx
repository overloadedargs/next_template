import { Ubuntu, Urbanist, Raleway } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import StylesheetSelector from "./stylesheet_selector";
import Header from './header';

export const metadata = {
  keywords: ['Next.js', ' React', ' JavaScript', ' SEO'],
  title: 'Vercel Templates App'
}

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"], variable: "--font-ubuntu"});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "600"],
  variable: "--font-raleway",
});
const sono = Urbanist({ weight: "400", subsets: ["latin"], variable: "--font-urbanist"});

export default function RootLayout({ children }) {
  // pagestyle id link is css for js selector"
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" id="pagestyle" title="preferred" href="./styles/global_theme_contrast.css" type="text/css" />

          <Script strategy="beforeInteractive" defer src="https://example.com/script.js" />
        </head>
        <body className={`${raleway.variable} ${sono.variable} ${ubuntu.variable} ${ubuntu.className}`}>
          <Header />
          {children}
          <StylesheetSelector />
          <footer>
            <div className="githubLinkWrapper">
              <a href="https://www.github.com/overloadedargs/next_template"><div className="githubLink">Next Template</div></a>
            </div>
            <div className="footerLink">
              <a href="https://overloadedargs.github.io">overloadedargs.github.io</a>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
