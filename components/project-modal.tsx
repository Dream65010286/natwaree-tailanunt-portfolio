'use client'

import { useEffect } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  ImageIcon,
  Link2,
  Maximize2,
  MoreHorizontal,
  Share2,
  Star,
  Tag,
  UserRound,
  X,
} from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="animate-content-in relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-border bg-card/95 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-1 text-muted-foreground">
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted"
              aria-label="Expand"
            >
              <Maximize2 className="size-4" />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="hidden items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-foreground sm:inline-flex">
              <Share2 className="size-3.5" />
              Share
            </span>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Copy link"
            >
              <Link2 className="size-4" />
            </button>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Favorite"
            >
              <Star className="size-4" />
            </button>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
              aria-label="More options"
            >
              <MoreHorizontal className="size-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto px-6 py-8 sm:px-10">
          <span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs text-muted-foreground">
            {project.category}
          </span>

          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h2>

          {/* Metadata properties */}
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <dt className="flex w-32 shrink-0 items-center gap-2 text-muted-foreground">
                <CalendarDays className="size-4" />
                Created
              </dt>
              <dd className="text-foreground">{project.date}</dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="flex w-32 shrink-0 items-center gap-2 text-muted-foreground">
                <UserRound className="size-4" />
                Role
              </dt>
              <dd className="text-foreground">{project.role}</dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="flex w-32 shrink-0 items-center gap-2 text-muted-foreground">
                <Tag className="size-4" />
                Tech Stack
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </dd>
            </div>
            {project.link ? (
              <div className="flex items-start gap-3">
                <dt className="flex w-32 shrink-0 items-center gap-2 text-muted-foreground">
                  <Link2 className="size-4" />
                  Links
                </dt>
                <dd>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 hover:opacity-80"
                  >
                    View demo
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>

          <hr className="my-8 border-border" />

          {/* Overview */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Overview
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-foreground">
            {project.overview}
          </p>

          {/* Media placeholder */}
          <div className="mt-8 flex aspect-video items-center justify-center rounded-xl border border-border bg-muted/50">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <ImageIcon className="size-6" aria-hidden="true" />
              <span className="text-xs">{project.placeholder} — Image / Video</span>
            </div>
          </div>

          {/* Key achievements */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Key Achievements
          </h3>
          <ul className="mt-4 space-y-2.5">
            {project.achievements.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-foreground">
                <span
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground"
                  aria-hidden="true"
                />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>

          {/* System architecture */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            System Architecture
          </h3>
          <ol className="mt-4 space-y-3">
            {project.architecture.map((item, i) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-xs font-medium text-foreground">
                  {i + 1}
                </span>
                <span className="text-pretty text-foreground">{item}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            {project.metric}
          </p>
        </div>
      </div>
    </div>
  )
}
