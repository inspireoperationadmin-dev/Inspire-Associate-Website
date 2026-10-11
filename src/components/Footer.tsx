// src/components/Footer.tsx

import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/brand-icons";

// 1. Data Management: தேவையற்ற லிங்குகளைக் குறைத்து அத்தியாவசியமானவற்றை மட்டும் வைத்துள்ளேன்.
const FOOTER_LINKS = [
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Our Work", href: "#projects" },
      { label: "Technology", href: "#technology" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/inspire-associates/",
    label: "LinkedIn",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/share/1GS4oMRvKf/",
    label: "Facebook",
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/94773091764",
    label: "WhatsApp",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-section">
      <div className="container-x py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Inspire Associates logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg bg-logo-tile p-1 object-contain"
              />
              <span className="text-base font-semibold text-foreground">Inspire Associates</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Growth | Innovation | Trust. Software development, design, and business support from Jaffna, Sri Lanka.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-brand"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-sm font-semibold text-foreground">{group.title}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-block py-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inspire Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
