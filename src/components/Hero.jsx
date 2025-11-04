import { motion } from "framer-motion";
import { Calendar, Info, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25"
        aria-hidden
      />

      {/* Soft gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1220]/60 via-[#0B1220]/40 to-[#0B1220]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Trusted Legal & Tax Advisory
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Legal & Tax Excellence for Your Business
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Advotax delivers expert legal and tax consulting services with precision,
            professionalism, and integrity. Empowering enterprises and individuals
            with clarity and confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-medium text-[#0B1220] shadow-lg shadow-amber-400/30 transition hover:translate-y-[-1px] hover:bg-amber-300"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Info className="h-5 w-5" />
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
