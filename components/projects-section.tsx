'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown, ImageIcon } from 'lucide-react'
import {
  categoryFilters,
  projects,
  type CategoryGroup,
  type Project,
} from '@/lib/portfolio-data'
import { ProjectModal } from '@/components/project-modal'

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | CategoryGroup>('all')

  const visibleProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.group === filter)),
    [filter],
  )

  return (
    <section id="projects" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Selected work</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
              Featured Projects
            </h2>
          </div>

          <div className="relative">
            <label htmlFor="project-filter" className="sr-only">
              Filter projects by category
            </label>
            <select
              id="project-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | CategoryGroup)}
              className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-card py-2.5 pl-4 pr-10 text-sm text-foreground transition-colors hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring sm:w-auto"
            >
              {categoryFilters.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActive(project)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
              aria-label={`Open details for ${project.title}`}
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
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
