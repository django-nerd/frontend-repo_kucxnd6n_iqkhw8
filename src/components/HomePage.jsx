import Hero3D from './Hero3D'
import ProjectsGrid from './ProjectsGrid'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-64px)]">
      {/* 3D hero section using Spline (interactive) */}
      <Hero3D />

      {/* Intro copy + quick links below hero */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Blending 3D and 2D animations for premium interactive web experiences
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Explore a collection of projects, services, and contact options. Each page features a unique, optimized animation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2 text-sm font-medium">
              See Projects
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white px-5 py-2 text-sm font-medium shadow-lg shadow-purple-500/20">
              Services
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-full bg-gray-900/90 text-white dark:bg-white/90 dark:text-gray-900 px-5 py-2 text-sm font-medium backdrop-blur">
              Contact
            </Link>
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Featured Projects</h3>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  )
}
