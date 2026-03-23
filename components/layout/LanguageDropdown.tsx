"use client";

import { useEffect, useRef, useState } from "react";

type LanguageItem = {
  label: string;
  code: string;
  flag: string;
};

type LanguageDropdownProps = {
  items: LanguageItem[];
  value: string;
  onChange: (code: string) => void;
};

export default function LanguageDropdown({ items, value, onChange }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentItem = items.find((item) => item.code === value) ?? items[0];

  return (
    <div ref={ref} className="dropdown relative">
      <button
        className="dropdown-btn flex gap-2 items-center font-medium text-white cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        type="button"
      >
        <img src={currentItem.flag} alt="" className="w-6" />
        {currentItem.label}
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="dropdown-menu bg-white border border-accent-soft rounded-2xl md:p-4 p-2 shadow-[0px_16px_30px_0px_var(--color-primary-muted)] w-32 absolute top-9 inset-s-0 z-10"
        >
          {items.map((item) => (
            <button
              key={item.code}
              role="option"
              aria-selected={item.code === value}
              type="button"
              onClick={() => {
                onChange(item.code);
                setIsOpen(false);
              }}
              className="w-full flex gap-2.5 items-center text-primary-dark cursor-pointer text-sm/normal capitalize border-b border-accent-100 last:border-b-0 py-3 last:pb-0 first:pt-0"
            >
              <img src={item.flag} alt="" className="w-6" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
