import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Stack', href: '#stack' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b-[3px] border-line transition-colors duration-300">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo Monospaced Estructural */}
        <a href="#" className="font-display font-bold text-lg tracking-tight uppercase hover:text-accent transition-colors">
          RODRIGO.GÓMEZ
        </a>

        {/* Links Nav con separador vertical fino y hover azul */}
        <nav className="hidden md:flex items-center text-xs font-medium h-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`h-full flex items-center px-4 text-text hover:text-accent hover:bg-accent/5 transition-all duration-200 relative group ${
                idx !== navLinks.length - 1 ? 'border-r border-border' : ''
              }`}
            >
              <span>{link.name}</span>
              {/* Línea indicador azul en el hover */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}

          <div className="flex items-center gap-3 pl-4 border-l border-border ml-2">
            <ThemeToggle />
            <a
              href={portfolioData.personalInfo.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-line bg-text text-bg px-3 py-1.5 hover:bg-accent hover:text-white transition-colors font-bold rounded-[4px]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV PDF</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border border-line bg-surface text-text hover:text-accent"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-6 text-sm space-y-3 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-text hover:text-accent transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line bg-text text-bg px-4 py-2 font-bold rounded-[4px] mt-2 hover:bg-accent hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Descargar CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}