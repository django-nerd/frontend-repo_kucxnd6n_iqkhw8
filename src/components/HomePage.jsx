import BackgroundSlot from './Backgrounds'
import ProjectsGrid from './ProjectsGrid'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-64px)]">
      <BackgroundSlot type="gradient" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Munta Sai Karthik
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Creative Web & Game Developer focused on performant, accessible experiences with smooth 2D motion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2 text-sm font-medium">
              View Projects
            </a>
            <a href="/contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white px-5 py-2 text-sm font-medium shadow-lg shadow-purple-500/20">
              Hire Me
            </a>
          </div>
        </motion.div>

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Featured Projects</h2>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  )
}
