export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' }
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className={`${sizes[size]} border-2 border-brand-tealLight border-t-brand-teal rounded-full animate-spin`}
        role="status"
        aria-label="Yükleniyor"
      />
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-video bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  )
}

export function AuthorCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 text-center animate-pulse flex-shrink-0 w-56">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
    </div>
  )
}
