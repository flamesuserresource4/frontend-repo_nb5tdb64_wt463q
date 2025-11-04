import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300">
              <Scale className="h-5 w-5" />
            </span>
            <div className="text-sm leading-tight">
              <div className="font-semibold">LYP</div>
              <div className="text-white/70">Advotax Consulting</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-lg bg-amber-400 px-4 py-2 font-medium text-[#0B1220] hover:bg-amber-300">Book</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-sm text-slate-600 sm:text-left"
            >
              © {new Date().getFullYear()} LYP Advotax. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex items-center gap-4 text-sm text-slate-600"
            >
              <a href="https://lyp.co.id" target="_blank" rel="noreferrer" className="hover:text-[#0B1220]">lyp.co.id</a>
              <span>•</span>
              <a href="mailto:contact@lyp.co.id" className="hover:text-[#0B1220]">Email</a>
              <span>•</span>
              <a href="#contact" className="hover:text-[#0B1220]">Contact</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
