import { TrustContent } from "@/lib/constants/content";

export default function TrustSection({ content }: { content: TrustContent }) {
  return (
    <section className="lg:py-20 md:py-14 py-10">
      <div className="container max-w-7xl md:px-5 px-4 mx-auto">
        <h2 className="md:text-5xl/snug text-4xl/tight font-medium text-primary text-center max-w-2xl mx-auto lg:mb-4 mb-3">
          {content.heading}
        </h2>
        <p className="lg:text-xl/snug md:text-lg/snug text-base/snug max-w-[860px] mx-auto text-center">
          <span className="text-primary font-bold">{content.brandName}</span>{" "}
          {content.body}
        </p>
      </div>
    </section>
  );
}
