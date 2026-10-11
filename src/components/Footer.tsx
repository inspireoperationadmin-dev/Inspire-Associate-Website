// src/components/Footer.tsx

import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/brand-icons";

const FOOTER_LINKS = [
  {
    title: "Services",
    items: [
      { label: "Web & Mobile Apps", href: "#services" },
      { label: "UI/UX & Branding", href: "#services" },
      { label: "Social Media & Content", href: "#services" },
      { label: "Business Support", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "Technology", href: "#technology" },
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
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-x py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center justify-between gap-4 md:block">
              <a href="#top" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Inspire Associates logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-lg bg-white p-1 object-contain"
                />
                <span className="text-base font-semibold">Inspire Associates</span>
              </a>
              <div className="flex items-center gap-2 md:mt-5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-sky-400/50 hover:text-sky-400"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Software, design, and business support from Jaffna, Sri Lanka.
              <span className="hidden md:inline"> Growth | Innovation | Trust.</span>
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-sm font-semibold md:mb-3">{group.title}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-block py-1 text-sm text-white/65 transition-colors hover:text-sky-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 md:mt-10">
          <p className="text-xs text-white/55 sm:text-sm">
            © {new Date().getFullYear()} Inspire Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
