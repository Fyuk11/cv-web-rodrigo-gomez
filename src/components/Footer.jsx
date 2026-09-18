import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-[3px] border-line bg-surface py-10 transition-colors duration-300">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
          
          {/* Identidad de Footer */}
          <div className="space-y-1">
            <span className="font-display font-bold text-base text-text tracking-tight uppercase">
              RODRIGO GÓMEZ
            </span>
            <p className="text-xs text-text-muted font-mono">
              Front-End Developer (AI-Assisted) · Buenos Aires, Argentina
            </p>
          </div>

          {/* Estado del sistema & Scroll Top */}
          <div className="flex items-center gap-6 font-mono text-xs">
         

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 border border-border bg-bg hover:border-accent hover:text-accent text-text px-3 py-1.5 rounded-[4px] transition-colors"
              title="Volver arriba"
            >
              <span>ARRIBA</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright y Créditos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-text-muted">
          <p>© {new Date().getFullYear()} Rodrigo Gómez. Todos los derechos reservados.</p>
          <p>
            Construido con <span className="text-text font-semibold">React</span>, <span className="text-text font-semibold">Tailwind CSS</span> &amp; <span className="text-accent font-semibold">Cursor AI</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}