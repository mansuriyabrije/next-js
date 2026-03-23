import Image from "next/image";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import { content } from "@/lib/constants/content";

export default function HeroSection() {
  const titleLines = content.hero.title.split("\n");

  return (
    <section className="banner-sec pt-60 relative">
      <div className="container max-w-7xl md:px-5 px-4 mx-auto">
        <div className="flex">
          <div className="w-full md:w-[52%] pt-[70px]">
            <h1 className="md:text-6xl/tight text-5xl/tight font-bold text-white mb-3">
              {titleLines[0]}
              <br />
              {titleLines[1]}
            </h1>
            <p className="lg:text-xl/snug md:text-lg/snug text-base/snug text-white">
              {content.hero.subtitle} <span className="font-bold">{content.hero.subtitleBold}</span>
            </p>
            <div className="lg:mt-10 md:mt-6 mt-4">
              <AppStoreButtons variant="dark" />
            </div>
          </div>

          <div className="hidden md:block md:w-[48%] self-end">
            <Image
              src="/assets/images/banner-img.png"
              alt="Ready to Date app preview"
              width={600}
              height={700}
              priority
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
