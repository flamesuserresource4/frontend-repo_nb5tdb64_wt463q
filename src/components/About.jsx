import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-semibold text-[#0B1220] sm:text-4xl">
              About LYP
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              LYP (lyp.co.id) is a trusted law and tax consulting firm serving
              businesses and individuals across Indonesia. We combine legal precision
              with strategic tax insight—delivering solutions grounded in accuracy,
              confidentiality, and unwavering reliability.
            </p>
            <p className="mt-4 text-slate-600">
              Our consultants bring years of experience supporting corporate
              transactions, compliance, and dispute resolution with a commitment to
              professionalism and client success.
            </p>

            {/* Testimonials embedded for trust */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  quote:
                    "LYP guided our restructuring with clarity—seamless from start to finish.",
                  author: "CFO, Manufacturing Group",
                },
                {
                  quote:
                    "Responsive, discreet, and effective. True partners in compliance.",
                  author: "Head of Legal, Tech Startup",
                },
              ].map((t, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-slate-700">“{t.quote}”</p>
                  <footer className="mt-3 text-sm font-medium text-slate-500">{t.author}</footer>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c6?q=80&w=2070&auto=format&fit=crop"
                alt="Professional legal and tax consulting team at work"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
