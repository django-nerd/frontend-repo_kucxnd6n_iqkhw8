import { useEffect } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import Services from './components/Services';
import ContactSection from './components/ContactSection';

export default function App() {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    document.documentElement.style.scrollBehavior = mql.matches ? 'auto' : 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c10] dark:text-gray-100 antialiased">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 px-3 py-2 rounded bg-sky-600 text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="home">
        <Hero3D />

        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              A selection of work showcasing MSK’s creative engineering across web and games.
            </p>
          </div>
          <ProjectsGrid />
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Services
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
              From concept to launch — high-performance apps, games, and interfaces.
            </p>
          </div>
          <Services />
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <ContactSection />
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>&copy; {new Date().getFullYear()} MSK — Creative Web & Game Developer</p>
            <nav className="flex gap-4">
              <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400">About</a>
              <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400">Skills</a>
              <a href="#playground" className="hover:text-sky-600 dark:hover:text-sky-400">Playground</a>
            </nav>
          </div>
        </div>
      </footer>

      <a
        href="#contact"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-4 py-2 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
        aria-label="Hire Me"
      >
        Hire Me
      </a>
    </div>
  );
}
