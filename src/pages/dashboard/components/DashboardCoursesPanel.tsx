type ProgressRow = { title: string; progress: number }

type DashboardCoursesPanelProps = {
  courses: readonly ProgressRow[]
}

export function DashboardCoursesPanel({ courses }: DashboardCoursesPanelProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold">My Courses</h2>
      <div className="mt-4 space-y-4">
        {courses.map((course) => (
          <div key={course.title}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span>{course.title}</span>
              <span className="font-semibold">{course.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-brand-gold" style={{ width: `${course.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
