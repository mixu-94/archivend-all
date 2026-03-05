"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS, type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

function NavItem({
  link,
  isActive,
  className,
  onClick,
}: {
  link: NavLink;
  isActive: boolean;
  className: string;
  onClick?: () => void;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target={link.target ?? "_blank"}
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-brand-primary backdrop-blur-sm transition-shadow duration-200", scrolled && "shadow-md shadow-black/20")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-white tracking-wide">
              ARCHIVEND
            </span>
            <span className="text-[10px] text-brand-accent font-medium tracking-[0.15em] uppercase">
              GmbH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = !link.external && pathname === link.href;
            return (
              <NavItem
                key={link.href}
                link={link}
                isActive={isActive}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-accent bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              />
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.contact.phoneClean}`}
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            <span className="hidden lg:block">{COMPANY.contact.phone}</span>
          </a>
          <Button asChild size="sm" className="bg-brand-accent hover:bg-brand-accent-light text-brand-accent-foreground font-semibold">
            <Link href="/kontakt">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-primary border-brand-primary-light w-72">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-1 mt-8">
              {NAV_LINKS.map((link) => {
                const isActive = !link.external && pathname === link.href;
                return (
                  <NavItem
                    key={link.href}
                    link={link}
                    isActive={isActive}
                    className={cn(
                      "px-4 py-3 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "text-brand-accent bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setMobileOpen(false)}
                  />
                );
              })}
              <div className="mt-4 pt-4 border-t border-white/20">
                <a
                  href={`tel:${COMPANY.contact.phoneClean}`}
                  className="flex items-center gap-2 px-4 py-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-accent" />
                  <span className="text-sm">{COMPANY.contact.phone}</span>
                </a>
                <Button asChild className="w-full mt-2 bg-brand-accent hover:bg-brand-accent-light text-brand-accent-foreground font-semibold">
                  <Link href="/kontakt" onClick={() => setMobileOpen(false)}>
                    Jetzt Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
