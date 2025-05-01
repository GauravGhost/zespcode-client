import ProblemPageTab, { TabItem } from "@/components/app/problem-page-tab"
import CodeEditor from "@/components/code-editor/code-editor"
import { ProblemSkeleton } from "@/components/loader/problem-skeleton"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useParams } from "react-router"
import { ProblemData } from "@/types"
import useGetApi from "@/hooks/useGetApi"
import { GET_PROBLEM_BY_TITLE_SLUG } from "@/api"
import ProblemStatement from "./ProblemStatement"


const Problem = () => {
    const { id } = useParams();
    const problemDetailResponse = useGetApi<ProblemData>(GET_PROBLEM_BY_TITLE_SLUG(id));
    const problemDetail = problemDetailResponse.data

    const problemTabs: TabItem[] = [{
        id: "Description",
        label: "Description",
        icon: "NotepadText",
        iconColor: "text-sky-500",
        content: <ProblemStatement problemData={problemDetail} />,
    },
    {
        id: "Solution",
        label: "Solution",
        icon: "BookOpenCheck",
        iconColor: "text-yellow-500",
        content: <div className="flex justify-center items-center h-full"><h1>No Solution yet</h1></div>
    }]
    const codeEditorTab: TabItem[] = [{
        id: "Code", label: "Code", icon: "Code2", iconColor: "text-green-500", content: <CodeEditor problemData={problemDetail} />,
    }]

    const outputTab: TabItem[] = [
        { id: "test-case", label: "Test Case", icon: "Terminal", iconColor: "text-green-500", content: <div className="flex justify-center items-center h-full"><h1>No test case yet</h1></div> },
        { id: "test-result", label: "Test Result", icon: "CheckCircle", iconColor: "text-green-500", content: <div className="flex justify-center items-center h-full"><h1>You must run your code first</h1></div> }
    ]

    if (problemDetailResponse.loading) {
        return <ProblemSkeleton />
    }

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg h-full w-full p-2 gap-1"
        >
            {/* Problem statement */}
            <ResizablePanel defaultSize={50} className="overflow-auto rounded-b-lg">
                <div className="h-full">
                    <ProblemPageTab tabs={problemTabs} />
                </div>
            </ResizablePanel >

            <ResizableHandle withHandle className="bg-transparent" />

            {/* Code + Output */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <ResizablePanelGroup direction="vertical" className="h-full rounded-b-lg gap-1">

                    {/* Code Editor */}
                    <ResizablePanel defaultSize={75} className="overflow-auto h-full">
                        <div className="h-full">
                            <ProblemPageTab tabs={codeEditorTab} />
                        </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle className="bg-transparent" />

                    {/* Output Section */}
                    <ResizablePanel defaultSize={25} className="overflow-auto h-full">
                        <div className="h-full">
                            <ProblemPageTab tabs={outputTab} />
                        </div>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>

        </ResizablePanelGroup >
    )
}

export default Problem
