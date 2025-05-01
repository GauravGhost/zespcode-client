import ProblemPageTab, { TabItem } from "@/components/app/problem-page-tab"
import CodeEditor from "@/components/code-editor/code-editor"
import MarkdownViewer from "@/components/markdown-viewer/markdown-viewer"
import { ProblemSkeleton } from "@/components/loader/problem-skeleton"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { sampleMarkdown } from "@/lib/constant"
import { useEffect, useState } from "react"


const Problem = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [markdownContent] = useState(sampleMarkdown);

    // Simulate loading for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    const problemTabs: TabItem[] = [{
        id: "Description",
        label: "Description",
        icon: "NotepadText",
        iconColor: "text-sky-500",
        content: <MarkdownViewer content={markdownContent} title={"Two Sum"} />,
    },
    {
        id: "Solution",
        label: "Solution",
        icon: "BookOpenCheck",
        iconColor: "text-yellow-500",
        content: "solutions"
    }]
    const codeEditorTab: TabItem[] = [{
        id: "Code", label: "Code", icon: "Code2", iconColor: "text-green-500", content: <CodeEditor />,
    }]

    const outputTab: TabItem[] = [
        { id: "test-case", label: "Test Case", icon: "Terminal", iconColor: "text-green-500", content: "test case" },
        { id: "test-result", label: "Test Result", icon: "CheckCircle", iconColor: "text-green-500", content: "test result" }
    ]
    return isLoading ? (
        <ProblemSkeleton />
    ) : (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border h-full w-full"
        >
            {/* Problem statement */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <div className="p-1 h-full">
                    <ProblemPageTab tabs={problemTabs} />
                </div>
            </ResizablePanel >

            <ResizableHandle withHandle className="p-[1.5px]" />

            {/* Code + Output */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <ResizablePanelGroup direction="vertical" className="h-full">

                    {/* Code Editor */}
                    <ResizablePanel defaultSize={75} className="overflow-auto h-full">
                        <div className="p-1 h-full">
                            <ProblemPageTab tabs={codeEditorTab} />
                        </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle className="p-[1.5px]" />

                    {/* Output Section */}
                    <ResizablePanel defaultSize={25} className="overflow-auto h-full">
                        <div className="p-1 h-full">
                            <ProblemPageTab tabs={outputTab} />
                        </div>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>

        </ResizablePanelGroup >
    )
}

export default Problem
