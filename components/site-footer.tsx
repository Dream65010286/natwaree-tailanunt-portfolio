import { Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const contactItems = [
  { icon: Mail, label: 'dream.m1740@gmail.com', href: 'mailto:dream.m1740@gmail.com' },
  { icon: Phone, label: '082-796-3555', href: 'tel:0827963555' },
  { icon: MapPin, label: 'Bangkok, Thailand', href: undefined },
]

const socialLinks = [
  { icon: GithubIcon, label: 'github.com/Dream65010286', href: 'https://github.com/Dream65010286' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Let&apos;s build something together.
        </h2>

        <div className="mt-10 flex flex-col justify-between gap-10 border-t border-border pt-10 md:flex-row">
          <ul className="flex flex-col gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <span className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </span>
              )
              return (
                <li key={item.label}>
                  {item.href ? <a href={item.href}>{content}</a> : content}
                </li>
              )
            })}
          </ul>

          <ul className="flex flex-col gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Natwaree Tailanunt. Built with Next.js.
        </p>
      </div>
    </footer>
  )
}
