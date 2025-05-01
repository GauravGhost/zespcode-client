import { Skeleton } from "@/components/ui/skeleton";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export function ProblemSkeleton() {
    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-4rem)]">
            {/* Problem Statement Section */}
            <ResizablePanel defaultSize={50}>
                <div className="h-full p-4 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </ResizablePanel>

            <ResizableHandle />

            {/* Code Editor and Output Section */}
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    {/* Code Editor Section */}
                    <ResizablePanel defaultSize={75}>
                        <div className="h-full p-4 space-y-4">
                            <div className="flex items-center space-x-4 mb-4">
                                <Skeleton className="h-8 w-24" />
                                <Skeleton className="h-8 w-24" />
                            </div>
                            <Skeleton className="h-[calc(100%-4rem)] w-full" />
                        </div>
                    </ResizablePanel>

                    <ResizableHandle />

                    {/* Output Section */}
                    <ResizablePanel defaultSize={25}>
                        <div className="h-full p-4 space-y-4">
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-32 w-full" />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
