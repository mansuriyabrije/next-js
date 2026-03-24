"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import type { NavItem } from "@/lib/constants/nav";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <div
      className={`mobile-menu flex flex-col transition-transform duration-300 fixed top-0 bottom-0 right-0 h-dvh bg-white z-[60] justify-between w-80 max-w-[calc(11/12*100%)] px-4 pb-4 pt-10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      aria-hidden={!isOpen}
    >
      <button
        onClick={onClose}
        className="inline-flex justify-center items-center absolute top-4 right-4"
        aria-label="Close menu"
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#0F1729"
          />
        </svg>
      </button>

      <ul className="flex flex-col h-full overflow-y-auto gap-3 font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={onClose}
              aria-label={`Go to ${item.label}`}
              className="group flex justify-start items-center gap-1.5 transition-all duration-300 hover:text-accent w-full text-primary"
            >
              <span className="w-6 scale-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-1">
        {/* TODO: replace placeholder href with real Invite Friends destination */}
        <PrimaryButton href="#">Invite Friends</PrimaryButton>
        {/* TODO: replace placeholder href with real app video URL */}
        <a
          href="#"
          aria-label="Watch app video"
          className="py-1.5 px-3 flex gap-2 items-center justify-center min-h-11 rounded-full border border-black/30 bg-overlay-primary cursor-pointer text-primary"
        >
          <img src="/assets/images/icon/play-icon.svg" alt="" className="w-6" />
          App Video
        </a>
      </div>
    </div>
  );
}
