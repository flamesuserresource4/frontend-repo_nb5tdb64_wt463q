import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Star } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    // For demo purposes only
    alert("Thank you. Our team will get in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-[#0B1220] sm:text-4xl"
        >
          Get in Touch with Our Team
        </motion.h2>

        {/* Testimonials row */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            {
              quote: "Professional, precise, and discreet. Highly recommended.",
              name: "CEO, Retail Group",
            },
            {
              quote: "Their tax strategy saved us significant costs.",
              name: "Founder, Services Co.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center gap-1 text-amber-400" aria-hidden>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-slate-700">“{t.quote}”</p>
              <p className="mt-1 text-sm text-slate-500">{t.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-amber-400 focus:ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-amber-400 focus:ring"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-amber-400 focus:ring"
                  placeholder="+62 ..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-amber-400 focus:ring"
                  placeholder="Tell us about your legal or tax needs"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-[#0B1220] px-5 py-3 font-medium text-white transition hover:bg-[#111a2e]"
            >
              Submit
            </button>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a href="mailto:contact@lyp.co.id" className="inline-flex items-center gap-2 hover:text-[#0B1220]">
                <Mail className="h-4 w-4" /> contact@lyp.co.id
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +62 (0) 812-3456-7890
              </span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#0B1220]"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <div className="h-[420px] w-full">
              <iframe
                title="LYP Office Location"
                src="https://www.google.com/maps?q=Jakarta&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-4 text-slate-700">
              <MapPin className="h-5 w-5 text-[#0B1220]" /> Jl. Jend. Sudirman, Jakarta, Indonesia
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
