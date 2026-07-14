import { motion } from "framer-motion";
import { FiSun, FiMusic, FiHeart, FiMapPin, FiClock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const iconMap = {
  sun: FiSun,
  music: FiMusic,
  heart: FiHeart,
};

export default function Events({ events }) {
  const list = events || [];

  return (
    <section id="events" className="section-pad bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="The Celebration"
          title="Wedding Events"
          subtitle="Three days of ceremony, music and joy. We'd love you at every one."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => {
            const Icon = iconMap[e.icon] || FiHeart;
            return (
              <motion.article
                key={e.title}
                className="card-base group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-soft"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              >
                <div className="img-zoom relative aspect-[16/11]">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                    <h3 className="heading-md font-display">{e.title}</h3>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                      <Icon className="text-lg" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <FiClock className="text-primary" /> {e.date} · {e.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin className="text-primary" /> {e.location}
                    </span>
                  </div>
                  <p className="body-lg mt-4 flex-1 text-muted">{e.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
