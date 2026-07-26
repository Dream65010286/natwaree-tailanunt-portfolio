import { Award } from 'lucide-react'
import { certificates } from '@/lib/portfolio-data'

export function CertificatesSection() {
  return (
    <section id="certificates" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm text-muted-foreground">Recognition</p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
          Certifications &amp; Highlights
        </h2>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {certificates.map((cert) => (
            <li key={cert} className="flex items-center gap-3 bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <Award className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm text-foreground">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
