"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 text-base font-medium sm:flex-row mb-6">
      <Link
        className={`flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors md:w-[158px] ${
          pathname === "/"
            ? "bg-foreground text-black"
            : "border border-solid border-white/[.145] text-white hover:border-transparent hover:bg-[#1a1a1a]"
        }`}
        href="/"
      >
        Static page
      </Link>
      <Link
        className={`flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors md:w-[158px] ${
          pathname === "/dynamic"
            ? "bg-foreground text-black"
            : "border border-solid border-white/[.145] text-white hover:border-transparent hover:bg-[#1a1a1a]"
        }`}
        href="/dynamic"
      >
        Dynamic page
      </Link>
    </nav>
  );
}

