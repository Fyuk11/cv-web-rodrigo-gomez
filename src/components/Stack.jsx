import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Stack() {
  return (
    <section id="stack" className="py-16 border-b border-border bg-grid-pattern">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <h2 className="font-display text-2xl font-bold text-text uppercase tracking-tight">
          Stack / Herramientas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-border divide-y md:divide-y-0 md:divide-x divide-border bg-surface/90 backdrop-blur-sm">
          {portfolioData.stack.map((group, idx) => (
            <div key={idx} className="p-6 space-y-3">
              <h3 className="font-display text-sm font-bold uppercase text-accent tracking-wider">
                {group.category}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {group.items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}