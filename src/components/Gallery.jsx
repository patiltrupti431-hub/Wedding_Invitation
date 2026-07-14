import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ease = [0.22, 1, 0.36, 1];

export default function Gallery({ gallery }) {
  const images = gallery || [];

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Moments"
          title="Our Gallery"
          subtitle="A few frames from the chapters that brought us here — and a glimpse of what's to come."
        />

        {/* Featured slider */}
        <motion.div
          className="mt-14 overflow-hidden rounded-card shadow-soft"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="h-[42vh] min-h-[320px] w-full sm:h-[52vh]"
          >
            {images.map((g) => (
              <SwiperSlide key={g.image}>
                <div className="relative h-full w-full">
                  <img
                    src={g.image}
                    alt={g.caption}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute bottom-6 left-6 font-display text-xl text-white sm:text-2xl">
                    {g.caption}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Mosaic grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((g, i) => (
            <motion.figure
              key={g.image + i}
              className="img-zoom group relative aspect-square overflow-hidden rounded-card shadow-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.08 }}
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-sm text-white sm:text-base">
                  {g.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
