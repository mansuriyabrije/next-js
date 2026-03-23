import { content } from "@/lib/constants/content";

export default function FeatureCards() {
  return (
    <section className="md:pb-5">
      <div className="container max-w-7xl md:px-5 px-4 mx-auto">
        <div className="flex sm:flex-row flex-col justify-between items-start lg:gap-5 gap-2.5">
          {content.features.map((feature) => (
            <div key={feature.id} className="xl:w-[350px] w-full">
              <div className="card-glass">
                <img src={feature.icon} alt="" className="lg:w-24 w-14 lg:mb-2.5 mb-1 mx-auto" />
                <h5 className="md:text-xl/snug text-lg/snug font-medium text-primary lg:mb-2 mb-1">
                  {feature.title}
                </h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
