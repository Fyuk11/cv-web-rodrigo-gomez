import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}