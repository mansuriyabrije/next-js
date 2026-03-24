"use client";

import { useEffect, useRef, useState } from "react";
import LanguageDropdown from "@/components/layout/LanguageDropdown";
import MobileMenu from "@/components/layout/MobileMenu";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { languages, navItems } from "@/lib/constants/nav";

const heartIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header({ 
  locale = "en", 
  messages 
}: { 
  locale?: string; 
  messages?: any 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    console.log(`[Header] Changing locale from ${selectedLanguage} to ${newLocale}`);
    setSelectedLanguage(newLocale);
    
    // Using a more robust cookie string
    document.cookie = `locale=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    
    console.log(`[Header] Cookie set. Current document.cookie: ${document.cookie}`);
    
    // Short timeout to ensure cookie persists before reload (optional, but sometimes helps)
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  useEffect(() => {
    setSelectedLanguage(locale);
  }, [locale]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!isMobileMenuOpen) return;
      const target = event.target as Node;
      const clickedInsideMenu = mobileMenuRef.current?.contains(target);
      const clickedMenuButton = menuButtonRef.current?.contains(target);
      if (!clickedInsideMenu && !clickedMenuButton) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Localized navigation items
  const localizedNavItems = navItems.map((item) => ({
    ...item,
    label: messages ? (messages[item.label.toLowerCase()] || item.label) : item.label,
  }));

  return (
    <>
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-dark z-[55]"
          aria-hidden="true"
        />
      )}

      <div ref={mobileMenuRef}>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={localizedNavItems}
        />
      </div>

      <header className="absolute top-0 w-full z-50">
        <div className="container max-w-7xl md:px-5 px-4 mx-auto">
          <div className="flex justify-between gap-5 items-center border-b border-neutral-100/35 md:py-4 py-3">
            <div className="flex xl:gap-6 gap-3 items-center">
              <a href="/" aria-label="Go to homepage" className="md:max-w-24 max-w-16 block">
                <img src="/assets/images/logo/site-logo.svg" alt="Ready to Date" />
              </a>

              <ul className="hidden lg:flex xl:gap-6 gap-3 text-white font-medium">
                {localizedNavItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-label={`Go to ${item.label}`}
                      className="group flex items-center gap-1.5 transition-all duration-300 hover:text-accent"
                    >
                      <span className="opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                        {heartIcon}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex xl:gap-6 gap-2.5 items-center">
              <LanguageDropdown
                items={languages}
                value={selectedLanguage}
                onChange={handleLanguageChange}
              />

              <PrimaryButton href="#" className="">
                {messages?.inviteFriends || "Invite Friends"}
              </PrimaryButton>

              <a
                href="#"
                aria-label="Watch app video"
                className="lg:py-2 py-1.5 px-3 inline-flex gap-2 items-center justify-center text-white lg:min-h-[51px] min-h-12 rounded-full border border-white/30 bg-white/25 cursor-pointer"
              >
                <img src="/assets/images/icon/play-icon.svg" alt="" className="w-7" />
                {messages?.appVideo || "App Video"}
              </a>

              <button
                id="menuOpenBtn"
                ref={menuButtonRef}
                onClick={() => setIsMobileMenuOpen(true)}
                className="bg-white md:w-10 w-9 aspect-square rounded-lg justify-center items-center cursor-pointer hidden max-lg:flex"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                type="button"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A0075">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#4A0075"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
