import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-wide">ARCHIVEND</span>
              <span className="text-brand-accent font-bold text-2xl"> GmbH</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {COMPANY.description}
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY.contact.phoneClean}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-accent shrink-0" />
                {COMPANY.contact.phone}
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-brand-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-accent shrink-0" />
                {COMPANY.contact.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.street}<br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Unternehmen
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} {COMPANY.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-white/50">
            {COMPANY.address.street}, {COMPANY.address.zip} {COMPANY.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
