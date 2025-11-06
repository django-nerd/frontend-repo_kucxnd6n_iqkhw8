import BackgroundSlot from './Backgrounds'
import ContactSection from './ContactSection'

export default function ContactPage() {
  return (
    <section className="relative min-h-[calc(100vh-64px)]">
      <BackgroundSlot type="dots" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Let’s collaborate on something impactful.</p>
        </header>
        <ContactSection />
      </div>
    </section>
  )
}
