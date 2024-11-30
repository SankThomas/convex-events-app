"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const links = [
  {
    title: "All Events",
    href: "/",
  },
  {
    title: "Create Event",
    href: "/create-event",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 mx-auto mt-6 w-full max-w-4xl -translate-x-1/2 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold">
          <Home className="size-5 opacity-75 transition hover:opacity-100" />
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link) => (
              <li key={link.title}>
                <Button
                  asChild
                  variant={`${link.href === pathname ? "default" : "secondary"}`}
                  size="sm"
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
