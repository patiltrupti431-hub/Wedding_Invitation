import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      className={`flex flex-col ${alignment} gap-4`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <div className="flex items-center gap-3">
        {align === "center" && <span className="h-px w-8 bg-primary/50" />}
        <h2 className="heading-lg font-display">{title}</h2>
        {align === "center" && <span className="h-px w-8 bg-primary/50" />}
      </div>
      {subtitle && (
        <p className={`body-lg max-w-2xl text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <span className="mt-1 text-primary">
        <FiHeart className="text-sm" />
      </span>
    </motion.div>
  );
}
