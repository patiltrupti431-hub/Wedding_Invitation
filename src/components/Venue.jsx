import { motion } from "framer-motion";
import { FiMapPin, FiNavigation } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Venue({ venue }) {
  const v = venue?.[0];
  if (!v) return null;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    v.mapQuery || v.address
  )}&output=embed`;

  return (
    <section id="venue" className="section-pad bg-section">
      <div className="shell">
        <SectionHeading
          eyebrow="The Place"
          title="Venue & Stay"
          subtitle="Where it all happens — and where you can rest your head after the celebration."
        />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            className="card-base flex flex-col overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="img-zoom aspect-[16/10]">
              <img
                src={v.image}
                alt={v.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="heading-md font-display">{v.name}</h3>
              <p className="mt-3 flex items-start gap-2 font-sans text-sm text-muted">
                <FiMapPin className="mt-0.5 shrink-0 text-primary" />
                {v.address}
              </p>
              <p className="body-lg mt-4 flex-1 text-muted">{v.description}</p>

              {v.accommodations?.length > 0 && (
                <div className="mt-6">
                  <h4 className="eyebrow mb-3">Recommended Stays</h4>
                  <ul className="flex flex-col gap-2">
                    {v.accommodations.map((a) => (
                      <li
                        key={a.hotel}
                        className="flex items-center justify-between rounded-xl bg-background px-4 py-3 text-sm"
                      >
                        <span className="font-medium text-ink">{a.hotel}</span>
                        <span className="text-muted">{a.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  v.mapQuery || v.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline mt-7 self-start"
              >
                <FiNavigation /> Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="card-base overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <iframe
              title="Venue map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
