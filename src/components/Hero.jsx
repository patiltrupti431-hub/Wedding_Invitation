import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ couple }) {
  const groom = couple?.[0]?.name?.split(" ")[0] || "Aarav";
  const bride = couple?.[1]?.name?.split(" ")[0] || "Meera";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(44,44,44,0.55)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.5em] text-white/80 sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9, ease }}
        >
          We're getting married
        </motion.p>

        <motion.div
          className="my-6 flex items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 1, ease }}
        >
          <span className="h-px w-10 bg-primary/70 sm:w-16" />
          <span className="font-display text-xl text-primary sm:text-2xl">14 · 12 · 26</span>
          <span className="h-px w-10 bg-primary/70 sm:w-16" />
        </motion.div>

        <motion.h1
          className="heading-xl font-display text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1, ease }}
        >
          {groom}
          <span className="mx-3 text-primary sm:mx-5">&</span>
          {bride}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl body-lg text-white/85"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9, ease }}
        >
          Two souls, one journey. Join us as we begin forever beneath the
          lakeside skies of Udaipur.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.9, ease }}
        >
          <a href="#rsvp" className="btn-gold">RSVP Now</a>
          <a
            href="#story"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#story"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <FiChevronDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
