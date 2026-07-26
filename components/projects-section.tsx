import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Selected work</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <span className="hidden text-sm text-muted-foreground sm:block">
            {projects.length} case studies
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#projects"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center border-b border-border bg-muted/50">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="size-6" aria-hidden="true" />
                  <span className="px-4 text-center text-xs">
                    {project.placeholder} Image Placeholder
                  </span>
                </div>
                <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/90 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4 text-foreground" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-3 text-pretty text-base font-medium leading-snug tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="mt-4 border-t border-border pt-3 text-xs font-medium text-foreground">
                  {project.metric}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
