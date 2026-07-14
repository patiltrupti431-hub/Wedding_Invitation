import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const chapters = [
  {
    year: "2019",
    title: "The First Hello",
    text: "A chance meeting at a friend's rooftop dinner in Mumbai. He spilled coffee; she offered a napkin and a laugh that would echo for years.",
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    year: "2021",
    title: "The First Trip",
    text: "A monsoon road trip to the Western Ghats — waterfalls, bad radio, and the quiet certainty that this was someone worth coming home to.",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    year: "2024",
    title: "The Proposal",
    text: "On a December balcony overlooking Lake Pichola, fairy lights and a ring he'd carried for three nervous days. She said yes before he finished asking.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function Story() {
  return (
    <section id="story" className="section-pad bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Our Journey"
          title="How It Began"
          subtitle="Every love story is a collection of small, ordinary moments that turn out to be extraordinary."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {chapters.map((c, i) => (
            <motion.article
              key={c.year}
              className="card-base group flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
            >
              <div className="img-zoom relative aspect-[4/3]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-soft">
                  {c.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-md font-display mb-3">{c.title}</h3>
                <p className="body-lg flex-1 text-muted">{c.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
