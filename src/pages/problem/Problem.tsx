import ProblemPageTab, { TabItem } from "@/components/app/problem-page-tab"
import CodeEditor from "@/components/code-editor/code-editor"
import MarkdownViewer from "@/components/markdown-viewer/markdown-viewer"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { sampleMarkdown } from "@/lib/constant"
import { useState } from "react"


const Problem = () => {
    const [markdownContent] = useState(sampleMarkdown);
    const problemTabs: TabItem[] = [{
        id: "Description",
        label: "Description",
        icon: "NotepadText",
        content: <MarkdownViewer content={markdownContent} title={"Two Sum"} />,
    },
    {
        id: "Solution",
        label: "Solution",
        icon: "BookOpenCheck",
        content: "solutions"
    }]
    const codeEditorTab: TabItem[] = [{
        id: "Code", label: "Code", icon: "Code2", content: <CodeEditor />,
    }]

    const outputTab: TabItem[] = [
        { id: "test-case", label: "Test Case", icon: "Terminal", content: "test case" },
        { id: "test-result", label: "Test Result", icon: "CheckCircle", content: "test result" }
    ]
    return (
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
