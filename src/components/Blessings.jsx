import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

const ease = [0.22, 1, 0.36, 1];

export default function Blessings({ blessings }) {
  const items = blessings || [];

  return (
    <section id="blessings" className="section-pad bg-section">
      <div className="shell">
        <SectionHeading
          eyebrow="With Love"
          title="Blessings & Wishes"
          subtitle="Words from the people who've walked beside us — family and friends who mean the world."
        />

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {items.map((b) => (
              <SwiperSlide key={b.name} className="h-auto">
                <figure className="card-base flex h-full flex-col items-center p-8 text-center">
                  <div className="img-zoom h-20 w-20 overflow-hidden rounded-full shadow-card">
                    <img
                      src={b.photo}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="mt-5 font-display text-4xl leading-none text-primary">
                    &ldquo;
                  </span>
                  <blockquote className="body-lg mt-2 flex-1 text-muted">
                    {b.message}
                  </blockquote>
                  <figcaption className="mt-5 font-display text-lg text-ink">
                    {b.name}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
