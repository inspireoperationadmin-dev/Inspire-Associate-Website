import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { toast } from "@/hooks/use-toast";

// EmailJS (Client side library)
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // bots fill hidden fields; real visitors never see it

    const firstName = formData.firstName.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!firstName || !email || !message) {
      toast({
        variant: "destructive",
        title: "Missing fields",
        description: "Please fill first name, email, and message.",
      });
      return;
    }

    setLoading(true);

    // EmailJS Dashboard-ல் இருந்து பெற்ற விபரங்களை .env-ல் இருந்து அழைத்தல்
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${firstName} ${formData.lastName}`.trim(),
          from_email: email,
          message: message,
          to_name: "Inspire Admin",
        },
        PUBLIC_KEY
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully! 🙏",
      });

      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";
  const label = "mb-1.5 block text-sm font-medium text-card-foreground";

  const details = [
    { icon: Mail, label: "Email", value: "hr@inspire-associate.com", href: "mailto:hr@inspire-associate.com" },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "+94 77 309 1764", href: "https://wa.me/94773091764" },
    { icon: LinkedInIcon, label: "LinkedIn", value: "Inspire Associates", href: "https://www.linkedin.com/company/inspire-associates/" },
    { icon: MapPin, label: "Location", value: "Kopay, Jaffna, Sri Lanka" },
  ];

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-sky-400">
            <span className="h-px w-8 bg-sky-400/60" aria-hidden="true" />
            Contact
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Let&apos;s build something great together
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Have a project in mind? Tell us about it and we will get back to you.
          </p>
          <ul className="mt-9 space-y-5">
            {details.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sky-400">
                  <item.icon size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="wrap-break-word font-medium text-white hover:text-sky-300 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5 rounded-2xl bg-card p-6 text-card-foreground shadow-2xl sm:p-9"
          >
            <h3 className="text-xl font-bold">Send us a message</h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-firstName" className={label}>First name</label>
                <input id="contact-firstName" name="firstName" type="text" required autoComplete="given-name"
                  value={formData.firstName} onChange={handleChange} className={field} />
              </div>
              <div>
                <label htmlFor="contact-lastName" className={label}>Last name</label>
                <input id="contact-lastName" name="lastName" type="text" autoComplete="family-name"
                  value={formData.lastName} onChange={handleChange} className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className={label}>Email</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email"
                value={formData.email} onChange={handleChange} className={field} />
            </div>
            <div>
              <label htmlFor="contact-message" className={label}>Message</label>
              <textarea id="contact-message" name="message" rows={5} required
                value={formData.message} onChange={handleChange} className={`${field} resize-y`} />
            </div>

            {/* Honeypot: hidden from people, visible to bots */}
            <div className="absolute -left-2499.75 h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>

            <Button type="submit" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
