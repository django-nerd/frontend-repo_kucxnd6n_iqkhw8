import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something great</h2>
      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
        Email: <a className="text-sky-600 dark:text-sky-400 underline" href="mailto:saikarthik5421@gmail.com">saikarthik5421@gmail.com</a> · Phone: <a className="text-sky-600 dark:text-sky-400 underline" href="tel:+919618301254">+91 96183 01254</a>
      </p>

      {!sent ? (
        <form
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">Name</label>
            <input
              id="name"
              required
              className="rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              required
              className="rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tell me about your project…"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-5 py-2 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
            >
              <Send size={16} /> Send
            </button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300"
          role="status"
          aria-live="polite"
        >
          Thanks! Your message has been received. I’ll get back to you shortly.
        </motion.div>
      )}

      <div className="mt-6 flex gap-4 text-sm">
        <a href="https://linkedin.com/in/sai-karthik-m5321/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline">
          LinkedIn
        </a>
        <a href="https://github.com/SaiKarthik547" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
