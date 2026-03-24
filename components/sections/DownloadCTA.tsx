import PrimaryButton from "@/components/ui/PrimaryButton";
import { DownloadCtaContent } from "@/lib/constants/content";

export default function DownloadCTA({ content }: { content: DownloadCtaContent }) {
  return (
    <div className="sm:w-[48%] w-full 2xl:pe-11">
      <h2 className="md:text-[40px] md:leading-12 text-3xl/snug text-white/90">
        {content.heading} <br />
        <span className="font-bold">{content.highlighted}</span>
      </h2>
      <PrimaryButton href="#" className="lg:mt-10 md:mt-6 mt-4">
        {content.buttonLabel}
      </PrimaryButton>
    </div>
  );
}
