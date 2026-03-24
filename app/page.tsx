import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import TrustSection from "@/components/sections/TrustSection";
import LoveCompassSection from "@/components/sections/LoveCompassSection";
import RegisterSection from "@/components/sections/RegisterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="gredient-div grow">
        <HeroSection />
        <FeatureCards />
        <TrustSection />
        <LoveCompassSection />
        <RegisterSection />
        <Footer />
      </main>
    </>
  );
}