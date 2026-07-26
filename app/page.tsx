import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { CertificatesSection } from '@/components/certificates-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
