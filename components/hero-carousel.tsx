const slides = [
  { src: '/carousel/bus-dashboard.png', label: 'Shuttle ETA Dashboard', tag: 'IoT · ML' },
  { src: '/carousel/esp32-telemetry.png', label: 'ESP32 Telemetry', tag: 'Embedded' },
  { src: '/carousel/product-app.png', label: 'Retail Product Design', tag: 'Product' },
  { src: '/carousel/data-analytics.png', label: 'Analytics Dashboard', tag: 'Data' },
]

function Card({ src, label, tag }: { src: string; label: string; tag: string }) {
  return (
    <figure className="relative w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-72">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src || '/placeholder.svg'}
          alt={label}
          className="size-full object-cover"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="truncate text-sm font-medium text-foreground">{label}</span>
        <span className="shrink-0 rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[11px] text-muted-foreground">
          {tag}
        </span>
      </figcaption>
    </figure>
  )
}

export function HeroCarousel() {
  // Duplicate the slides so the marquee can loop seamlessly.
  const loop = [...slides, ...slides]

  return (
    <div
      className="marquee-group relative mt-16 overflow-hidden"
      aria-label="Selected project previews"
    >
      <div className="flex w-max animate-marquee gap-5">
        {loop.map((slide, i) => (
          <Card key={`${slide.label}-${i}`} {...slide} />
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
