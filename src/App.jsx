import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'

export default function App() {
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    document.documentElement.style.scrollBehavior = mql.matches ? 'auto' : 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c10] dark:text-gray-100 antialiased">
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 px-3 py-2 rounded bg-sky-600 text-white">Skip to content</a>

      <Header />

      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="mx-auto max-w-6xl px-4 py-24">
              <h1 className="text-3xl font-bold">Page not found</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">The page you’re looking for doesn’t exist.</p>
              <Link to="/" className="mt-6 inline-block rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-sm">Back home</Link>
            </div>
          } />
        </Routes>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>&copy; {new Date().getFullYear()} MSK — Creative Web & Game Developer</p>
            <nav className="flex gap-4">
              <a href="/projects" className="hover:text-sky-600 dark:hover:text-sky-400">Projects</a>
              <a href="/services" className="hover:text-sky-600 dark:hover:text-sky-400">Services</a>
              <a href="/contact" className="hover:text-sky-600 dark:hover:text-sky-400">Contact</a>
            </nav>
          </div>
        </div>
      </footer>

      <a
        href="/contact"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-4 py-2 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
        aria-label="Hire Me"
      >
        Hire Me
      </a>
    </div>
  )
}
