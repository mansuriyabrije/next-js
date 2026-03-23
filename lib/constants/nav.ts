export type NavItem = {
  label: string;
  href: string;
};

export type LanguageItem = {
  label: string;
  code: string;
  flag: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Connect", href: "/" },
];

export const languages: LanguageItem[] = [
  { label: "English", code: "en", flag: "/assets/images/icon/en-flag.svg" },
  { label: "France", code: "fr", flag: "/assets/images/icon/france-flag.svg" },
];
