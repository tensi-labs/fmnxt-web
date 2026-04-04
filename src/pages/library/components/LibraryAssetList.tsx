type LibraryAsset = { name: string; type: string }

type LibraryAssetListProps = {
  assets: readonly LibraryAsset[]
}

export function LibraryAssetList({ assets }: LibraryAssetListProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <ul className="divide-y divide-slate-200">
        {assets.map((asset) => (
          <li key={asset.name} className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium text-slate-900">{asset.name}</p>
              <p className="text-sm text-slate-500">{asset.type}</p>
            </div>
            <button
              type="button"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
