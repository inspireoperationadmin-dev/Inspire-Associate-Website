import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LiquidGlassButton } from "@/components/ui/LiquidGlass";
import { GlowCard } from "@/components/ui/spotlight-card";
import ShaderBackground from "@/components/ui/shader-background";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// EmailJS (Client side library)
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden flex items-center justify-center py-24 bg-[#020617]">
      {!isMobile && <ShaderBackground />}
      <div className="absolute inset-0 bg-[#020617]/85 md:bg-[#020617]/70 pointer-events-none z-1" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Copy Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let's build something{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Have a project in mind? We'd love to hear about it.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: "✉", label: "Email", value: "hr@inspire-associate.com" },
              { icon: "📍", label: "Location", value: "Kopay, Jaffna, Sri Lanka" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard className="p-8 backdrop-blur-md bg-[#0f172a]/80 border border-blue-500/20 shadow-xl rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-xs uppercase">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/60 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-xs uppercase">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/60 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-xs uppercase">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/60 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-xs uppercase">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500/60 outline-none resize-none"
                />
              </div>
              <LiquidGlassButton
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-linear-to-r from-blue-600/70 to-cyan-500/70 text-white font-bold"
              >
                {loading ? "Sending..." : "Send Message →"}
              </LiquidGlassButton>
            </form>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}