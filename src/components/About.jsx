import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h2 className="font-display text-2xl font-bold text-text uppercase tracking-tight">
          Sobre mí
        </h2>

        <p className="text-text text-lg leading-relaxed max-w-[60ch]">
          {portfolioData.about.text}
        </p>
      </motion.div>
    </section>
  );
}