import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const nav = (
    <nav className="flex flex-col gap-4 p-6 md:p-0 md:flex-row md:items-center">
      {['Home','About','Skills','Projects','Services','Experience','Contact','Playground'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-medium text-gray-700/90 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          onClick={() => setOpen(false)}
        >
          {item}
        </a>
      ))}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-4 py-2 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
        onClick={() => setOpen(false)}
      >
        <Rocket size={16} /> Hire Me
      </a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-white">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 grid place-items-center text-white font-bold">M</div>
          <span className="hidden sm:inline">MSK</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {dark ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-sky-600" />}
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden md:block">{nav}</div>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur">
          {nav}
        </div>
      )}
    </header>
  );
}
