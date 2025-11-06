import { motion } from 'framer-motion';
import { Globe, Gamepad2, Smartphone, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Responsive, modern frameworks, SEO, performance.',
    theme: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    desc: '2D/3D, interactive gameplay, cross-platform.',
    theme: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Mobile/desktop, user-centric, scalable.',
    theme: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Research, wireframing, prototyping, visual design.',
    theme: 'from-rose-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    desc: 'Rapid dev, concept validation, interactive mockups.',
    theme: 'from-amber-500 to-pink-500',
  },
];

export default function Services() {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.07 } },
      }}
    >
      {services.map((s) => (
        <motion.li
          key={s.title}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur p-5 hover:shadow-xl hover:shadow-black/10 transition-all"
        >
          <div className={`mb-4 h-10 w-10 rounded-xl bg-gradient-to-br ${s.theme} grid place-items-center text-white`}>
            <s.icon size={20} />
          </div>
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
