import CodeEditor from "@/components/code-editor/code-editor"
import MarkdownViewer from "@/components/markdown-viewer/markdown-viewer"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState } from "react"

// Sample markdown content for demonstration
const sampleMarkdown = `# Two Sum

## Problem Statement

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example 1:

\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

## Example 2:

\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\`

## Example 3:

\`\`\`
Input: nums = [3,3], target = 6
Output: [0,1]
\`\`\`

## Constraints:

- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

## Follow-up:
Can you come up with an algorithm that is less than O(n²) time complexity?
`;

const Problem = () => {
    const [markdownContent] = useState(sampleMarkdown);
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border h-full w-full"
        >
            {/* Problem statement */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <div className="p-4 h-full">
                    <h2 className="text-xl font-bold mb-4">Problem Description</h2>
                    <MarkdownViewer content={markdownContent} />
                </div>
            </ResizablePanel>

            <ResizableHandle />

            {/* Code + Output */}
            <ResizablePanel defaultSize={50} className="overflow-auto">
                <ResizablePanelGroup direction="vertical" className="h-full">

                    {/* Code Editor */}
                    <ResizablePanel defaultSize={75} className="overflow-auto h-full">
                        <CodeEditor />
                    </ResizablePanel>

                    <ResizableHandle />

                    {/* Output Section */}
                    <ResizablePanel defaultSize={25} className="overflow-auto">
                        <div className="flex items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </ResizablePanel>

        </ResizablePanelGroup>
    )
}

export default Problem
