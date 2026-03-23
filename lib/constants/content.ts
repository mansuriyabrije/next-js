export type HeroContent = {
  title: string;
  subtitle: string;
  subtitleBold: string;
};

export type FeatureItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type TrustContent = {
  heading: string;
  brandName: string;
  body: string;
};

export type LoveCompassContent = {
  heading: string;
  body: string;
};

export type FooterContent = {
  copyright: string;
};

export type DownloadCtaContent = {
  heading: string;
  highlighted: string;
  buttonLabel: string;
};

export type AppStoreContent = {
  appStoreAriaLabel: string;
  appStoreAlt: string;
  playStoreAriaLabel: string;
  playStoreAlt: string;
};

export type SiteContent = {
  hero: HeroContent;
  features: FeatureItem[];
  trust: TrustContent;
  loveCompass: LoveCompassContent;
  footer: FooterContent;
  downloadCta: DownloadCtaContent;
  appStores: AppStoreContent;
};

export const content: SiteContent = {
  hero: {
    title: "Real People\nReal Safety, Real Love",
    subtitle: "Skip the guessing. Instantly connect with people who like you.",
    subtitleBold: "Download Ready to Date today.",
  },
  features: [
    {
      id: "real-proximity",
      icon: "/assets/images/icon/location-icon.svg",
      title: "Real Proximity",
      description: "Find out who likes you",
    },
    {
      id: "real-safety",
      icon: "/assets/images/icon/real-safety-icon.svg",
      title: "Real Safety",
      description: "Trusted space with verified profiles.",
    },
    {
      id: "real-connections",
      icon: "/assets/images/icon/real-connections-icon.svg",
      title: "Real Connections",
      description: "No swiping, just real connections.",
    },
  ],
  trust: {
    heading: "Dating with Trust, Clarity, and Confidence",
    brandName: "Ready to Date",
    body: "shifts dating back to what it was meant to be. Real people, real moments, and real connection. No endless swipes just meaningful opportunities to meet singles in person, anytime and anywhere.",
  },
  loveCompass: {
    heading: "Meet Love Compass",
    body: "Real connections happen in real moments. Love Compass helps you find them.",
  },
  footer: {
    copyright: "© Ready to date 2025 . All right reserved.",
  },
  downloadCta: {
    heading: "Bring Dating Back to Real Life.",
    highlighted: "Download Ready to Date Today.",
    buttonLabel: "Download Now",
  },
  appStores: {
    appStoreAriaLabel: "Download on the App Store",
    appStoreAlt: "Download on the App Store",
    playStoreAriaLabel: "Get it on Google Play",
    playStoreAlt: "Get it on Google Play",
  },
};
