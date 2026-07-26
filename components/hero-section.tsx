import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { HeroCarousel } from '@/components/hero-carousel'
import { metrics } from '@/lib/portfolio-data'

const actions = [
  { label: 'Download Resume', href: '#', icon: Download, primary: true },
  { label: 'GitHub', href: 'https://github.com/Dream65010286', icon: GithubIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { label: 'Contact Me', href: '#contact', icon: Mail },
]

export function HeroSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
        <span
          className="inline-block size-1.5 rounded-full bg-foreground"
          aria-hidden="true"
        />
        KMITL Dual Degree · Graduating April 2026
      </div>

      <h1 className="mt-8 max-w-4xl text-balance font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        Hi — I&apos;m Natwaree. Building scalable Cloud, Backend & IoT solutions.
      </h1>

      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        Dual-degree graduate from KMITL in IoT &amp; Information Systems and
        Industrial Physics. Experienced in software engineering, cloud
        architecture, and product management at CP AXTRA and Toyota Tsusho Nexty
        Electronics.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <a
              key={action.label}
              href={action.href}
              className={
                action.primary
                  ? 'inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90'
                  : 'inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted'
              }
            >
              <Icon className="size-4" />
              {action.label}
            </a>
          )
        })}
      </div>

      <HeroCarousel />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.value} className="bg-card p-6">
            <div className="flex items-center gap-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {metric.value}
              <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
