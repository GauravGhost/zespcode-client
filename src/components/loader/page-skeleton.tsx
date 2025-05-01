import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface PageSkeletonProps {
  className?: string
  header?: boolean
  sidebar?: boolean
  mainContent?: boolean
  numberOfCards?: number
}

export function PageSkeleton({
  className,
  header = true,
  sidebar = true,
  mainContent = true,
  numberOfCards = 3,
}: PageSkeletonProps) {
  return (
    <div className={cn("w-full h-full min-h-screen", className)}>
      {/* Header Skeleton */}
      {header && (
        <div className="w-full border-b">
          <div className="flex items-center justify-between p-4">
            <Skeleton className="h-8 w-[150px]" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-[100px]" />
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Sidebar Skeleton */}
        {sidebar && (
          <div className="w-[250px] border-r p-4">
            <Skeleton className="h-10 w-full mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        )}

        {/* Main Content Skeleton */}
        {mainContent && (
          <div className="flex-1 p-6">
            {/* Page Title */}
            <Skeleton className="h-10 w-[200px] mb-8" />

            {/* Content Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: numberOfCards }).map((_, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
