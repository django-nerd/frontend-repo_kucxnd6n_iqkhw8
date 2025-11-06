import { motion } from 'framer-motion';
import { Github, ExternalLink, Circle } from 'lucide-react';

const projects = [
  {
    title: 'Leo — Personal AI Assistant',
    image: 'https://ik.imagekit.io/e08wbj78c/leo%20ai.png?updatedAt=1753704439802',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui', 'Supabase', 'OpenRouter'],
    status: 'live',
    live: 'https://leo-ai-assist.vercel.app/',
    github: 'https://github.com/SaiKarthik547/Leo-AI-Assist',
  },
  {
    title: 'PharmaTrack India',
    image: '/pharmatrack.webp',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui', 'qrcode'],
    status: 'prototype',
    live: null,
    github: 'https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain',
  },
  {
    title: 'Fiery Flappy Bird',
    image: '/flappy.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'live',
    live: null,
    github: 'https://github.com/SaiKarthik547/Fiery-Flappy-Bird',
  },
  {
    title: 'Multimodal Sentiment Analysis',
    image: '/multimodal.webp',
    stack: ['Python', 'Deep Learning', 'CV/NLP', 'Audio'],
    status: 'research',
    live: null,
    github: 'https://github.com/SaiKarthik547/Multimodal-sentimental-analysis',
  },
  {
    title: 'Task Manager',
    image: '/taskmanager.webp',
    stack: ['Concept', 'UI'],
    status: 'archived',
    live: null,
    github: 'https://github.com/SaiKarthik547/Task-Manager',
  },
];

const statusStyles = {
  live: 'text-emerald-500',
  prototype: 'text-amber-500',
  research: 'text-sky-500',
  archived: 'text-gray-400',
  'coming-soon': 'text-purple-500',
};

export default function ProjectsGrid() {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      aria-label="Projects"
    >
      {projects.map((p, idx) => (
        <motion.li
          key={p.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur hover:shadow-xl hover:shadow-black/10 transition-shadow"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={p.image}
              alt={`${p.title} cover`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading={idx < 2 ? 'eager' : 'lazy'}
            />
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
              <Circle size={10} className={statusStyles[p.status]} />
              <span className="capitalize">{p.status.replace('-', ' ')}</span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
              <div className="flex gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-sky-600 text-white px-2 py-1 text-xs hover:bg-sky-500"
                    aria-label={`Open ${p.title} live`}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-2 py-1 text-xs hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  aria-label={`Open ${p.title} on GitHub`}
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/10 px-2 py-0.5 text-[10px] text-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
