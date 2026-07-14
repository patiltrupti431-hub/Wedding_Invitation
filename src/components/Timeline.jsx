import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Timeline({ schedule }) {
  const items = schedule || [];

  return (
    <section id="timeline" className="section-pad bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="The Day"
          title="Wedding Timeline"
          subtitle="A look at how our celebration unfolds — from the first rays to the final dance."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-primary/30 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {items.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  className="relative pl-12 sm:pl-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                >
                  {/* Dot */}
                  <span className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background sm:left-1/2" />

                  {/* Card */}
                  <div
                    className={`sm:w-1/2 ${left ? "sm:pr-10" : "sm:ml-auto sm:pl-10"}`}
                  >
                    <div className="card-base p-6 hover:-translate-y-1 hover:shadow-soft">
                      <span className="eyebrow">{item.time}</span>
                      <h3 className="heading-md mt-2 font-display">{item.title}</h3>
                      <p className="body-lg mt-2 text-muted">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
