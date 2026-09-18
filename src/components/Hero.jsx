import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section className="border-b-[3px] border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Columna Izquierda: Texto y Estructura */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 py-10 lg:py-16 pr-0 lg:pr-12 flex flex-col justify-between space-y-8 lg:border-r-[3px] lg:border-line"
        >
          {/* Detalle Suave #1: Badge forma píldora */}
          <div className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 text-xs font-medium rounded-full self-start">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-text">Disponible para nuevos proyectos</span>
          </div>

          {/* Nombre con Apellido en Accent (Space Grotesk 700) */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-text leading-[0.95]">
              HOLA SOY<br />
              RODRIGO<br />
              <span className="text-accent">GÓMEZ</span>
            </h1>

            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-[50ch] font-normal pt-2">
              <strong className="text-text font-semibold">Front-End Developer (AI-Assisted).</strong> De la idea al deploy, rápido — combinando código prolijo con herramientas de inteligencia artificial.
            </p>
          </div>

          {/* Detalle Suave #4: Botones CTA segmentados (radio 4px en extremos externos) */}
          <div className="flex items-center">
            <a
              href="#proyectos"
              className="bg-text text-bg px-6 py-3.5 text-sm font-semibold rounded-l-[4px] hover:opacity-90 transition-opacity"
            >
              Ver proyectos
            </a>
            <a
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-line text-text px-6 py-3 text-sm font-semibold rounded-r-[4px] hover:bg-surface transition-colors -ml-[2px]"
            >
              Hablemos
            </a>
          </div>

          {/* Detalle Suave #2: 3 Tarjetas de Stats con radio 10px */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="border border-border bg-surface p-4 rounded-[10px] text-center space-y-1">
              <span className="block font-display text-xl sm:text-2xl font-medium text-text">+15K</span>
              <span className="block text-[11px] text-text-muted">seguidores</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-[10px] text-center space-y-1">
              <span className="block font-display text-xl sm:text-2xl font-medium text-text">5-7 días</span>
              <span className="block text-[11px] text-text-muted">de entrega</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-[10px] text-center space-y-1">
              <span className="block font-display text-xl sm:text-2xl font-medium text-text">100%</span>
              <span className="block text-[11px] text-text-muted">SEO integrado</span>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Foto Duotono y Fondo Accent */}
        {/* Detalle Suave #3: Radio de 72px SOLO en la esquina inferior izquierda con efecto Hover Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 bg-accent min-h-[380px] lg:min-h-full relative overflow-hidden flex items-end justify-center rounded-bl-[72px] group cursor-pointer"
        >
          <img
            src="/profile.png"
            alt="Rodrigo Gómez"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            className="w-full h-full object-cover grayscale contrast-150 mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500 ease-out"
          />

          {/* Placeholder cuando no está cargada la foto */}
          <div className="hidden w-full h-full p-8 flex-col justify-between font-display text-white">
            <span className="text-sm font-medium tracking-widest uppercase opacity-80">RODRIGO GÓMEZ</span>
            <div className="space-y-2">
              <p className="text-2xl font-bold">Foto a sangre con duotono azul</p>
              <p className="text-xs font-sans opacity-80">Guardá tu imagen como <code className="bg-white/20 px-1">profile.png</code> en <code className="bg-white/20 px-1">/public</code>.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}