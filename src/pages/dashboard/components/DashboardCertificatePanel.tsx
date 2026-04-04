export function DashboardCertificatePanel() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold">Certificate Status</h2>
      <p className="mt-3 text-sm text-slate-600">Complete all lessons to generate your course certificate.</p>
      <button
        type="button"
        className="mt-5 rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-gold-dark hover:text-white"
      >
        Generate Certificate
      </button>
    </div>
  )
}
