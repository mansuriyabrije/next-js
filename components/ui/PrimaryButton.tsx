"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  const rootClassName = `primary-btn btn-primary-shell ${className}`.trim();

  const content = (
    <>
      <span className="border-span absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[calc(100%+7px)] w-[calc(100%+4px)] lg:h-[calc(100%+7px)] h-[calc(100%+4px)]" />
      <span className="btn-primary-inner">
        {children}
        <img
          src="/assets/images/icon/button-icon.svg"
          alt=""
          className="absolute w-14 -inset-e-3 top-2"
        />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rootClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={rootClassName} onClick={onClick}>
      {content}
    </button>
  );
}
