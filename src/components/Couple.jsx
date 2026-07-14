import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FiHeart } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];

export default function Couple({ couple }) {
  const partners = couple || [];

  return (
    <section id="couple" className="section-pad bg-section">
      <div className="shell">
        <SectionHeading
          eyebrow="The Couple"
          title="Meet the Two of Us"
          subtitle="The people whose story you're here to celebrate — and the families that raised them."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {partners.map((p, i) => (
            <motion.article
              key={p.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease, delay: i * 0.15 }}
            >
              <div className="img-zoom relative h-72 w-72 overflow-hidden rounded-full shadow-soft sm:h-80 sm:w-80">
                <img
                  src={p.photo}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/30" />
              </div>

              <span className="mt-8 eyebrow">{p.role}</span>
              <h3 className="heading-md mt-2 font-display">{p.name}</h3>
              <p className="mt-2 font-sans text-sm tracking-wide text-accent">
                {p.parents}
              </p>
              <p className="body-lg mt-5 max-w-md text-muted">{p.bio}</p>

              <div className="mt-6 flex items-center gap-2 text-primary">
                <span className="h-px w-10 bg-primary/40" />
                <FiHeart className="text-sm" />
                <span className="h-px w-10 bg-primary/40" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
