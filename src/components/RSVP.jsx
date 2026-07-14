import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function RSVP({ rsvp }) {
  const meta = rsvp || [];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Submission requires a backend or Google Apps Script webhook.
    // This demo captures the form locally and shows a confirmation.
    // To enable real submissions: deploy a Google Apps Script web app,
    // set VITE_RSVP_WEBHOOK_URL, and POST `form` to that URL here.
    setSubmitted(true);
  };

  const metaMap = Object.fromEntries(meta.map((m) => [m.name, m.value]));

  return (
    <section id="rsvp" className="section-pad bg-background">
      <div className="shell">
        <SectionHeading
          eyebrow="Be There"
          title="RSVP"
          subtitle="Let us know you're coming. Your presence is the best gift we could ask for."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="card-base flex h-full flex-col gap-6 p-7">
              <div>
                <h3 className="eyebrow">Deadline</h3>
                <p className="heading-md mt-2 font-display">
                  {metaMap["RSVP Deadline"] || "November 30, 2026"}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Contact</h3>
                <p className="mt-2 font-sans text-muted">
                  {metaMap["Contact"] || "rsvp@aaravmeera.love"}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Phone</h3>
                <p className="mt-2 font-sans text-muted">
                  {metaMap["Phone"] || "+91 98765 43210"}
                </p>
              </div>
              <div className="mt-auto flex items-start gap-2 rounded-xl bg-section p-4 text-sm text-muted">
                <FiInfo className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Submission is handled via a Google Apps Script webhook. This
                  demo shows the confirmation flow.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="card-base p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    className="flex h-full flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <FiCheckCircle className="text-5xl text-primary" />
                    <h3 className="heading-md mt-5 font-display">
                      Thank you, {form.name || "friend"}!
                    </h3>
                    <p className="body-lg mt-3 max-w-sm text-muted">
                      Your response has been noted. We can't wait to celebrate
                      with you.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline mt-7"
                    >
                      Edit Response
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="grid gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" required>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="rsvp-input"
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="rsvp-input"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Number of Guests">
                        <select
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          className="rsvp-input"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5+</option>
                        </select>
                      </Field>
                      <Field label="Will you attend?">
                        <select
                          name="attending"
                          value={form.attending}
                          onChange={handleChange}
                          className="rsvp-input"
                        >
                          <option value="yes">Joyfully accepts</option>
                          <option value="no">Regretfully declines</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="A note for the couple">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Send your love..."
                        className="rsvp-input resize-none"
                      />
                    </Field>

                    <button type="submit" className="btn-gold mt-2 w-full sm:w-auto">
                      Send RSVP
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .rsvp-input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          background: #fffdf9;
          padding: 0.75rem 1rem;
          font-family: "Jost", sans-serif;
          font-size: 0.95rem;
          color: #2c2c2c;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .rsvp-input:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }
        .rsvp-input::placeholder { color: #9a9a9a; }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
