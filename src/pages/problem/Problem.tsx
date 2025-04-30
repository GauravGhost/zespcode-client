import CodeEditor from "@/components/code-editor/code-editor"
import MarkdownViewer from "@/components/markdown-viewer/markdown-viewer"
import { Icon } from "@/components/ui/icon"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { sampleMarkdown } from "@/lib/constant"
import { useState } from "react"


const Problem = () => {
    const [markdownContent] = useState(sampleMarkdown);
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border h-full w-full"
        >
            {/* Problem statement */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <div className="p-4 h-full rounded-lg">
                    <Tabs defaultValue="Description" className="h-full">
                        <div className="items-center flex bg-muted rounded-t-lg">
                            <TabsList className="h-10 gap-1">
                                <TabsTrigger className="cursor-pointer border-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm" value="Description"><Icon name="NotepadText" /> Description</TabsTrigger>
                                <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
                                <TabsTrigger className="cursor-pointer border-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm" value="Solution"><Icon name="BookOpenCheck" /> Solution</TabsTrigger>
                                <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
                                <TabsTrigger className="cursor-pointer border-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm" value="Solution"><Icon name="BookOpenCheck" /> Solution</TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="Description" className="h-full"><MarkdownViewer content={markdownContent} /></TabsContent>
                        <TabsContent value="Solution" className="h-full">Solution</TabsContent>
                    </Tabs>
                </div>
            </ResizablePanel >

            <ResizableHandle withHandle className="p-[1.5px]" />

            {/* Code + Output */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <ResizablePanelGroup direction="vertical" className="h-full">

                    {/* Code Editor */}
                    <ResizablePanel defaultSize={75} className="overflow-auto h-full">
                        <CodeEditor />
                    </ResizablePanel>

                    <ResizableHandle withHandle className="p-[1.5px]" />

                    {/* Output Section */}
                    <ResizablePanel defaultSize={25} className="overflow-auto h-full">
                        <div className="h-full overflow-auto p-6">
                            <span className="font-semibold">Output</span>
                        </div>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>

        </ResizablePanelGroup >
    )
}

export default Problem
