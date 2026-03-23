import Image from "next/image";
import { content } from "@/lib/constants/content";

export default function LoveCompassSection() {
  return (
    <section>
      <div className="container max-w-7xl md:px-5 px-4 mx-auto relative">
        <Image
          src="/assets/images/meet-love-compass-bg-shape-one.png"
          alt=""
          aria-hidden="true"
          width={128}
          height={128}
          className="max-w-32 absolute top-0 -left-3.5 z-0"
        />
        <Image
          src="/assets/images/meet-love-compass-bg-shape-two.png"
          alt=""
          aria-hidden="true"
          width={80}
          height={80}
          className="max-w-20 absolute bottom-0 left-60 z-0"
        />

        <div className="grid xs:grid-cols-2 grid-cols-1 items-center gap-5 relative z-10">
          <div className="xl:pe-36">
            <h2 className="md:text-5xl/snug text-4xl/tight font-medium text-primary max-w-2xl mx-auto lg:mb-4 mb-3">
              {content.loveCompass.heading}
            </h2>
            <p>{content.loveCompass.body}</p>
          </div>
          <div>
            <Image
              src="/assets/images/meet-love-compass-img.png"
              alt="Love Compass feature preview"
              width={600}
              height={600}
              loading="lazy"
              className="max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
