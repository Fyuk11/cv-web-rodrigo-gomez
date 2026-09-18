import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contacto" className="py-16 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-surface border border-border border-l-4 border-l-accent rounded-[6px] p-8 sm:p-12 space-y-8"
      >
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            CONTACTO
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text">
            ¿Hablamos?
          </h3>
          <p className="text-text-muted text-base leading-relaxed max-w-xl">
            ¿Tenés un proyecto o una vacante en mente? Escribime, respondo rápido.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-semibold">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 border border-border bg-bg hover:border-accent hover:text-accent transition-colors px-4 py-3 rounded-[4px] text-text"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-bg hover:border-accent hover:text-accent transition-colors px-4 py-3 rounded-[4px] text-text"
          >
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>WhatsApp</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-bg hover:border-accent hover:text-accent transition-colors px-4 py-3 rounded-[4px] text-text"
          >
            <LinkedinIcon className="w-4 h-4 text-accent" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="pt-2 border-t border-border">
        <a
  href={personalInfo.cvPdfPath}
  download="CV_Rodrigo_Gomez.pdf"
  className="inline-flex items-center gap-2 bg-text text-bg px-6 py-3.5 text-sm font-semibold rounded-[4px] hover:bg-accent hover:text-white transition-colors"
>
  <FileText className="w-4 h-4" />
  <span>Descargar CV (PDF)</span>
</a>
        </div>
      </motion.div>
    </section>
  );
}