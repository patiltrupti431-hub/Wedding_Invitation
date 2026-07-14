import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

function getRemaining(target) {
  const now = Date.now();
  const diff = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown({ countdown }) {
  const target = useMemo(() => {
    const row = countdown?.[0];
    return row?.target || "2026-12-14T17:00:00";
  }, [countdown]);

  const [time, setTime] = useState(() => getRemaining(target));

  useEffect(() => {
    setTime(getRemaining(target));
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section id="countdown" className="section-pad bg-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Counting Down"
          title="The Big Day"
          subtitle="Every second brings us closer to forever. Here's where we stand."
        />

        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          {units.map((u, i) => (
            <motion.div
              key={u.key}
              className="card-base flex flex-col items-center justify-center py-8 sm:py-10"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <span className="heading-xl font-display text-primary">
                {String(time[u.key]).padStart(2, "0")}
              </span>
              <span className="mt-2 font-sans text-xs uppercase tracking-[0.28em] text-muted sm:text-sm">
                {u.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-center font-display text-xl italic text-accent sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          "And so the adventure begins."
        </motion.p>
      </div>
    </section>
  );
}
