import { LoveCompassContent } from "@/lib/constants/content";

export default function LoveCompassSection({ content }: { content: LoveCompassContent }) {
  return (
    <section>
      <div className="container max-w-7xl md:px-5 px-4 mx-auto relative">
        <img
          src="/assets/images/meet-love-compass-bg-shape-one.png"
          alt=""
          className="max-w-32 absolute top-0 -left-3.5 z-0"
        />
        <img
          src="/assets/images/meet-love-compass-bg-shape-two.png"
          alt=""
          className="max-w-20 absolute bottom-0 left-60 z-0"
        />

        <div className="grid xs:grid-cols-2 grid-cols-1 items-center gap-5 relative z-10">
          <div className="xl:pe-36">
            <h2 className="md:text-5xl/snug text-4xl/tight font-medium text-primary max-w-2xl mx-auto lg:mb-4 mb-3">
              {content.heading}
            </h2>
            <p>{content.body}</p>
          </div>
          <div>
            <img
              src="/assets/images/meet-love-compass-img.png"
              alt=""
              className="max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
