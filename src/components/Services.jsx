import { motion } from "framer-motion";
import { Scale, Receipt, Briefcase, FileCheck2, Gavel, ShieldCheck, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Legal Consultation",
    desc: "Strategic legal advisory for corporate matters, transactions, and governance.",
    Icon: Scale,
  },
  {
    title: "Tax Advisory",
    desc: "End-to-end tax planning, risk assessment, and regulatory guidance.",
    Icon: Receipt,
  },
  {
    title: "Business Compliance",
    desc: "Comprehensive compliance programs aligned with Indonesian regulations.",
    Icon: Briefcase,
  },
  {
    title: "Contract & Document Review",
    desc: "Clear, thorough drafting and review to safeguard your interests.",
    Icon: FileCheck2,
  },
  {
    title: "Litigation Support",
    desc: "Evidence preparation, strategy, and representation coordination.",
    Icon: Gavel,
  },
];

const features = [
  { title: "Experienced Professionals", desc: "Seasoned consultants with cross-industry expertise." },
  { title: "Tailored Legal & Tax Solutions", desc: "Advice aligned to your business goals and risk profile." },
  { title: "Confidential & Reliable", desc: "Strict protocols to protect your data and matters." },
  { title: "Proven Track Record", desc: "Measured outcomes and long-term client partnerships." },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0B1220] py-20 text-white lg:py-24">
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Our Services
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-semibold"
          >
            Why Choose Us
          </motion.h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">{f.title}</span>
                </div>
                <p className="mt-2 text-sm text-white/80">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
