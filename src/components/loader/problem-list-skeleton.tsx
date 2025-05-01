import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import LoadingDots from "./LoadingDots"



export const QuestionCardSkeleton = () => (
  <div className="p-4 border rounded-md mb-3">
    <div className="flex justify-between">
      <Skeleton className="h-5 w-[200px]" />
      <Skeleton className="h-5 w-16" />
    </div>
    <div className="flex justify-between mt-2">
      <Skeleton className="h-4 w-24" />
      <div className="flex gap-1">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
    </div>
  </div>
)

export function ProblemListSkeleton() {
  return (
    <div className="container mx-auto max-w-3xl h-screen">
      <div className="py-8">
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="space-y-2 pr-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <QuestionCardSkeleton key={i} />
          ))}
          <div className="mt-4">
            <LoadingDots />
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
