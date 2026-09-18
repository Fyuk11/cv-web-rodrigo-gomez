import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <h2 className="font-display text-2xl font-bold text-text uppercase tracking-tight">
          Experiencia
        </h2>

        <div className="relative pl-6 space-y-10 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[3px] before:bg-line">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-display text-base font-bold text-text">
                  {exp.role} <span className="text-text-muted font-normal">— {exp.company}</span>
                </h3>
                <span className="text-xs text-text-muted font-medium">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5 pt-1">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-sm text-text-muted leading-relaxed">
                    - {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}