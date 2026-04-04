import { DashboardCertificatePanel } from './components/DashboardCertificatePanel'
import { DashboardCoursesPanel } from './components/DashboardCoursesPanel'
import { DashboardMilestoneCard } from './components/DashboardMilestoneCard'
import { DashboardPageHeader } from './components/DashboardPageHeader'
import { dashboardLearnerProgress } from './data/dashboardPageData'

export function DashboardPage() {
  return (
    <section className="space-y-6">
      <DashboardPageHeader />

      <div className="grid gap-4 md:grid-cols-2">
        <DashboardCoursesPanel courses={dashboardLearnerProgress} />
        <DashboardCertificatePanel />
      </div>

      <DashboardMilestoneCard />
    </section>
  )
}
