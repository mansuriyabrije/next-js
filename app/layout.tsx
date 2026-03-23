import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ready to Date — Real People, Real Safety, Real Love",
  description:
    "Skip the guessing. Instantly connect with people who like you. Download Ready to Date today.",
  openGraph: {
    title: "Ready to Date — Real People, Real Safety, Real Love",
    description:
      "Skip the guessing. Instantly connect with people who like you. Download Ready to Date today.",
    url: "https://readytodate.ca",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready to Date — Real People, Real Safety, Real Love",
    description:
      "Skip the guessing. Instantly connect with people who like you. Download Ready to Date today.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: add Lufga .woff2 files to public/fonts/ before production.
  const htmlClassName = "min-h-full";
  const htmlStyle = { fontFamily: "system-ui, sans-serif" };

  return (
    <html lang="en" className={htmlClassName} style={htmlStyle}>
      <body>
        {children}
        <Script id="asset-checker" strategy="afterInteractive">{`
          (function () {
            const requiredAssets = [
              "/assets/images/logo/site-logo.svg",
              "/assets/images/logo/footer-logo.svg",
              "/assets/images/logo/app-store.svg",
              "/assets/images/logo/app-store-white.svg",
              "/assets/images/logo/play-store.svg",
              "/assets/images/logo/play-store-white.svg",
              "/assets/images/icon/button-icon.svg",
              "/assets/images/icon/play-icon.svg",
              "/assets/images/icon/en-flag.svg",
              "/assets/images/icon/france-flag.svg",
              "/assets/images/banner-img.png",
              "/assets/images/meet-love-compass-img.png",
              "/assets/images/meet-love-compass-bg-shape-one.png",
              "/assets/images/meet-love-compass-bg-shape-two.png",
              "/fonts/Lufga.woff2"
            ];
            requiredAssets.forEach(function (assetPath) {
              fetch(assetPath, { method: "HEAD" })
                .then(function (res) {
                  if (!res.ok) {
                    console.warn("[Asset Missing]", assetPath);
                  }
                })
                .catch(function () {
                  console.warn("[Asset Missing]", assetPath);
                });
            });
          })();
        `}</Script>
      </body>
    </html>
  );
}