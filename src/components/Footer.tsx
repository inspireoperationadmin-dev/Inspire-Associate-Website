// src/components/layout/Footer.tsx

import { Link } from "wouter";
import { Facebook, MessageCircle, ArrowUpRight } from "lucide-react";

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
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/share/1GS4oMRvKf/",
    label: "Facebook" 
  },
  { 
    icon: MessageCircle, 
    href: "https://wa.me/94773091764", // உங்கள் WhatsApp லிங்க்
    label: "WhatsApp" 
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#020617] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Cyan gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Inspire Associate logo" className="h-8 w-8 object-contain" />
              <span className="font-bold tracking-tighter text-white text-xl">
                INSPIRE <span className="text-cyan-400">ASSOCIATE</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Building digital excellence through modern software solutions.
            </p>
            
            {/* Minimal Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-12">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-white/50 text-xs tracking-wide">
            © {new Date().getFullYear()} INSPIRE ASSOCIATE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}