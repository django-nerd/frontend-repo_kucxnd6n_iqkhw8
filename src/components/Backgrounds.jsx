import { useEffect, useState } from 'react'

// Lightweight 2D animated backgrounds designed for performance
// Each background respects prefers-reduced-motion and avoids heavy DOM work

function useMotionOkay() {
  const [ok, setOk] = useState(true)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setOk(!mql.matches)
    handler()
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])
  return ok
}

export function GradientWaves() {
  const motion = useMotionOkay()
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes drift { 0%{ transform: translateY(0px) } 50%{ transform: translateY(20px) } 100%{ transform: translateY(0px) } }
      `}</style>
      <div
        className="absolute -top-1/3 -left-1/3 h-[120vmax] w-[120vmax] rounded-full opacity-[0.35] dark:opacity-40"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, rgba(56,189,248,0.6), rgba(147,51,234,0.6), rgba(56,189,248,0.6))',
          filter: 'blur(60px)',
          animation: motion ? 'spin-slow 60s linear infinite' : 'none',
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] h-[70vmin] w-[70vmin] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.6), transparent 60%)',
          filter: 'blur(40px)',
          animation: motion ? 'drift 14s ease-in-out infinite' : 'none',
          animationDelay: '1s',
        }}
      />
    </div>
  )
}

export function DotsParallax() {
  const motion = useMotionOkay()
  const anim = motion ? 'translateY(0) scale(1)' : 'none'
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <style>{`
        @keyframes floatY { 0%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } 100%{ transform: translateY(0) } }
      `}</style>
      <svg className="absolute inset-0 h-full w-full" role="img" aria-label="soft dotted background">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" className="text-black/5 dark:text-white/10" />
      </svg>
      <div
        className="absolute left-10 top-10 h-32 w-32 rounded-full bg-sky-400/20"
        style={{ filter: 'blur(24px)', animation: motion ? 'floatY 10s ease-in-out infinite' : 'none' }}
      />
      <div
        className="absolute right-12 bottom-12 h-40 w-40 rounded-full bg-fuchsia-400/20"
        style={{ filter: 'blur(28px)', animation: motion ? 'floatY 12s ease-in-out infinite' : 'none', animationDelay: '1s' }}
      />
    </div>
  )
}

export function LinesFlow() {
  const motion = useMotionOkay()
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes slideBg { from { background-position: 0 0, 0 0 } to { background-position: 200% 0, -200% 0 } }
      `}</style>
      <div
        className="absolute inset-0 opacity-60 dark:opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(99,102,241,0.15) 0px, rgba(99,102,241,0.15) 1px, transparent 1px, transparent 12px),
            repeating-linear-gradient(0deg, rgba(14,165,233,0.12) 0px, rgba(14,165,233,0.12) 1px, transparent 1px, transparent 12px)
          `,
          backgroundSize: '200% 100%, 200% 100%',
          animation: motion ? 'slideBg 40s linear infinite' : 'none',
        }}
      />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 20%, rgba(14,165,233,0.12), transparent 45%), radial-gradient(ellipse at 80% 70%, rgba(147,51,234,0.12), transparent 45%)'
      }} />
    </div>
  )
}

export function GridGlow() {
  const motion = useMotionOkay()
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`@keyframes pulseGlow { 0%,100%{ opacity: .25 } 50%{ opacity: .5 } }`}</style>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at 10% 80%, rgba(236,72,153,0.12), transparent 35%), radial-gradient(circle at 90% 30%, rgba(16,185,129,0.12), transparent 35%)'
      }} />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          animation: motion ? 'pulseGlow 6s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  )
}

export default function BackgroundSlot({ type = 'gradient' }) {
  if (type === 'dots') return <DotsParallax />
  if (type === 'lines') return <LinesFlow />
  if (type === 'grid') return <GridGlow />
  return <GradientWaves />
}
