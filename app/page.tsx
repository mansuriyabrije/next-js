import { cookies } from "next/headers";
import { getMessages } from "@/lib/i18n";
import { content as staticContent } from "@/lib/constants/content";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import TrustSection from "@/components/sections/TrustSection";
import LoveCompassSection from "@/components/sections/LoveCompassSection";
import RegisterSection from "@/components/sections/RegisterSection";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale");
  const locale = localeCookie?.value || "en";
  
  console.log(`[Page] Render Locale: ${locale}`);
  
  const translations = getMessages(locale);
  
  const common = translations?.common || {};
  const site = translations?.site || {};

  // Final fallback to static content if translations are incomplete
  const heroContent = site.hero || staticContent.hero;
  const featuresContent = (site.features || staticContent.features) as any[];
  const trustContent = site.trust || staticContent.trust;
  const loveCompassContent = site.loveCompass || staticContent.loveCompass;
  const downloadCtaContent = site.downloadCta || staticContent.downloadCta;
  const footerContent = site.footer || staticContent.footer;

  return (
    <>
      <Header locale={locale} messages={common} />
      <main className="gredient-div grow">
        <HeroSection content={heroContent} />
        <FeatureCards content={featuresContent} />
        <TrustSection content={trustContent} />
        <LoveCompassSection content={loveCompassContent} />
        <RegisterSection content={downloadCtaContent} registerMessages={common.register} />
        <Footer content={footerContent} subscribeMessages={common.subscribe} />
      </main>
    </>
  );
}