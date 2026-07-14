import { motion } from "framer-motion";
import { FiHeart, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

const quickLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Venue", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell py-16 sm:py-20">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="font-display text-4xl tracking-wide sm:text-5xl">
            Aarav <span className="text-primary">&</span> Meera
          </span>
          <p className="mt-4 max-w-md font-sans text-sm tracking-wide text-white/60">
            December 12–14, 2026 · Udaipur, Rajasthan
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm tracking-wide text-white/70 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { Icon: FiInstagram, href: "#" },
              { Icon: FiTwitter, href: "#" },
              { Icon: FiMail, href: "mailto:rsvp@aaravmeera.love" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-white/50">
            © 2026 Aarav & Meera. Made with love.
          </p>
          <p className="flex items-center gap-1.5 font-sans text-xs text-white/50">
            Crafted with <FiHeart className="text-accent" /> for our families & friends
          </p>
        </div>
      </div>
    </footer>
  );
}
