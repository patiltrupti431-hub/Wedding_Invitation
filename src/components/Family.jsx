import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Family({ family }) {
  const members = family || [];
  const groomSide = members.filter((m) => m.relation === "groom");
  const brideSide = members.filter((m) => m.relation === "bride");

  const renderGroup = (list, title) => (
    <div className="flex flex-col">
      <h3 className="heading-md mb-8 text-center font-display text-accent">{title}</h3>
      <div className="grid grid-cols-2 gap-6 sm:gap-8">
        {list.map((m, i) => (
          <motion.article
            key={m.name}
            className="group flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
          >
            <div className="img-zoom relative h-28 w-28 overflow-hidden rounded-full shadow-card sm:h-36 sm:w-36">
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/25 transition group-hover:ring-primary/60" />
            </div>
            <h4 className="mt-4 font-display text-lg text-ink sm:text-xl">{m.name}</h4>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-muted sm:text-sm">
              {m.role}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="family" className="section-pad bg-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Our People"
          title="The Family"
          subtitle="The ones who raised us, cheered for us, and made us who we are."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {renderGroup(groomSide, "The Groom's Side")}
          {renderGroup(brideSide, "The Bride's Side")}
        </div>
      </div>
    </section>
  );
}
