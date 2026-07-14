import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Story", href: "#story" },
  { label: "Couple", href: "#couple" },
  { label: "Events", href: "#events" },
  { label: "Countdown", href: "#countdown" },
  { label: "Gallery", href: "#gallery" },
  { label: "Family", href: "#family" },
  { label: "Venue", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[80] transition-all duration-500"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-background/85 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="shell flex items-center justify-between py-4">
          <a
            href="#hero"
            className={`font-display text-2xl tracking-wide transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            A<span className="text-primary">&</span>M
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-ink" : "text-white/90"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#rsvp"
            className={`hidden btn-gold lg:inline-flex ${
              scrolled ? "" : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            RSVP
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden text-2xl transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="mx-4 mb-4 rounded-card bg-white/95 p-6 shadow-soft backdrop-blur-md">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-sans text-sm font-medium tracking-wide text-ink transition-colors hover:bg-section hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#rsvp"
                    onClick={() => setOpen(false)}
                    className="btn-gold w-full"
                  >
                    RSVP Now
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
