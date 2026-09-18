import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-text uppercase tracking-tight">
            Proyectos Destacados
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((proj) => (
            <a
              key={proj.id}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-accent bg-surface rounded-[6px] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Contenedor de Imagen con Efecto Hover */}
                <div className="h-48 bg-bg border-b border-border overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover object-top grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Fallback de imagen no encontrada */}
                  <div className="hidden w-full h-full items-center justify-center font-mono text-xs text-text-muted p-4 text-center bg-bg/50">
                    &gt; // {proj.id}_hero.png
                  </div>
                  
                  {/* Overlay discreto en el hover */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-base text-text group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between font-mono text-xs text-text-muted group-hover:text-text transition-colors">
                <span>{proj.url.replace('https://', '').replace('/', '')}</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}