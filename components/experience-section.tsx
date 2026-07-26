import { timeline } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm text-muted-foreground">Journey</p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
          Experience &amp; Education
        </h2>

        <ol className="mt-10 border-l border-border">
          {timeline.map((item) => (
            <li key={item.org} className="relative pl-8 pb-10 last:pb-0">
              <span
                className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-background bg-foreground"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-base font-medium tracking-tight text-foreground">
                  {item.org}
                </h3>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                {item.role}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
