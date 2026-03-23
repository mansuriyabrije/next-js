import { content } from "@/lib/constants/content";

type AppStoreButtonsProps = {
  variant: "default" | "light" | "dark";
};

export default function AppStoreButtons({ variant }: AppStoreButtonsProps) {
  const resolvedVariant = variant === "dark" ? "default" : variant;

  const buttonClass =
    resolvedVariant === "default"
      ? "rounded-lg bg-black py-2 px-4"
      : "rounded-lg py-2 px-4 bg-white border border-accent-soft block";

  const appStoreSrc =
    resolvedVariant === "default"
      ? "/assets/images/logo/app-store-white.svg"
      : "/assets/images/logo/app-store.svg";

  const playStoreSrc =
    resolvedVariant === "default"
      ? "/assets/images/logo/play-store-white.svg"
      : "/assets/images/logo/play-store.svg";

  return (
    <div className="flex lg:gap-4 gap-2">
      {/* TODO: replace placeholder href with real App Store URL */}
      <a href="#" aria-label={content.appStores.appStoreAriaLabel} className={buttonClass}>
        <img src={appStoreSrc} alt={content.appStores.appStoreAlt} className="max-w-full" />
      </a>
      {/* TODO: replace placeholder href with real Google Play URL */}
      <a href="#" aria-label={content.appStores.playStoreAriaLabel} className={buttonClass}>
        <img src={playStoreSrc} alt={content.appStores.playStoreAlt} className="max-w-full" />
      </a>
    </div>
  );
}
