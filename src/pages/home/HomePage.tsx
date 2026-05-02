import { useHomeCourseSearch } from '../../context/HomeCourseSearchContext'
import { featuredHoverDetails, homeStatsStrip, learningTracks, newArrivalHoverDetails } from '../../const/homePageData'
import { AvailableCoursesSection } from './components/AvailableCoursesSection'
import { BuiltForLearnersSection } from './components/BuiltForLearnersSection'
import { GrowYourCareerSection } from './components/GrowYourCareerSection'
import { HeroSection } from './components/HeroSection'
import { HomeBand } from './components/HomeBand'
import { LearningTracksSection } from './components/LearningTracksSection'
import { NewArrivalsSection } from './components/NewArrivalsSection'
import { RevealOnScroll } from './components/RevealOnScroll'
import { StatsStrip } from './components/StatsStrip'
import { WhyFmnxtSection } from './components/WhyFmnxtSection'
import { WhyLearningWithUsSection } from './components/WhyLearningWithUsSection'
import { useHomeFilteredCourses } from './hooks/useHomeFilteredCourses'

export function HomePage() {
  const { query } = useHomeCourseSearch()
  const { filteredNewArrivals, filteredFeatured, searchIsActive } = useHomeFilteredCourses(query)

  return (
    <div className="relative z-10 font-hero pb-16 md:pb-20">
      <HeroSection />
      <RevealOnScroll delayMs={40} variant="slideUp">
        <StatsStrip stats={homeStatsStrip} />
      </RevealOnScroll>

      {/* Full-bleed muted band + patterned surface */}
      <HomeBand variant="muted" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 home-dot-grid-subtle opacity-[0.55]" aria-hidden />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gold/6 blur-3xl" aria-hidden />
        <div className="relative z-10">
          <RevealOnScroll delayMs={80} variant="fade">
            <div className="home-accent-top home-surface-elevated relative overflow-hidden rounded-2xl border border-neutral-200/95 bg-white p-5 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
              <div className="space-y-8">
                <NewArrivalsSection
                  courses={filteredNewArrivals}
                  hoverDetails={newArrivalHoverDetails}
                  searchActive={searchIsActive}
                  tabAccent="academy"
                />
                <LearningTracksSection tracks={learningTracks} surface="muted" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </HomeBand>

      <div className="mx-auto mt-14 max-w-[1200px] space-y-14 px-4 sm:mt-16 sm:space-y-16 sm:px-6 md:mt-20 md:space-y-20 md:px-8 lg:px-10">
        <RevealOnScroll delayMs={100} variant="tilt">
          <AvailableCoursesSection
            courses={filteredFeatured}
            hoverDetails={featuredHoverDetails}
            searchActive={searchIsActive}
            tabAccent="academy"
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={120} variant="slideUp">
          <BuiltForLearnersSection />
        </RevealOnScroll>
      </div>

      <HomeBand variant="wash" className="relative mt-14 overflow-hidden sm:mt-16 md:mt-20">
        <div className="pointer-events-none absolute inset-0 home-dot-grid opacity-30" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-brand-gold/6 blur-3xl" aria-hidden />
        <div className="relative z-10">
          <RevealOnScroll delayMs={140} variant="slideLeft">
            <WhyLearningWithUsSection />
          </RevealOnScroll>
        </div>
      </HomeBand>

      <div className="mx-auto mt-14 max-w-[1200px] space-y-14 px-4 sm:mt-16 sm:space-y-16 sm:px-6 md:mt-20 md:space-y-20 md:px-8 lg:px-10">
        <RevealOnScroll delayMs={160} variant="tilt">
          <GrowYourCareerSection />
        </RevealOnScroll>
        <RevealOnScroll delayMs={180} variant="fade">
          <WhyFmnxtSection />
        </RevealOnScroll>
      </div>
    </div>
  )
}
