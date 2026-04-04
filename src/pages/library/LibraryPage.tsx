import { LibraryAssetList } from './components/LibraryAssetList'
import { libraryAssetEntries } from './data/libraryPageData'

export function LibraryPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">FM Library</h1>
        <p className="mt-2 text-slate-600">Download templates and resources designed for real FM workflows.</p>
      </div>

      <LibraryAssetList assets={libraryAssetEntries} />
    </section>
  )
}
