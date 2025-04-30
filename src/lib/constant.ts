import { Language, Theme } from "@/components/code-editor/types";

export const sampleMarkdown = `# Two Sum

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

export const LANGUAGES: Language[] = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'csharp', name: 'C#' },
];

export const THEMES: Theme[] = [
    { id: 'vs-dark', name: 'Dark' },
    { id: 'light', name: 'Light' },
    { id: 'hc-black', name: 'High Contrast Dark' },
    { id: 'hc-light', name: 'High Contrast Light' },
];

export const DEFAULT_CODE_BY_LANGUAGE: Record<Language['id'], string> = {
    javascript: '// Write your JavaScript code here\n\nfunction example() {\n  console.log("Hello World!");\n}\n',
    typescript: '// Write your TypeScript code here\n\nfunction example(): void {\n  console.log("Hello World!");\n}\n',
    python: '# Write your Python code here\n\ndef example():\n    print("Hello World!")\n',
    java: '// Write your Java code here\n\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}\n',
    cpp: '// Write your C++ code here\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}\n',
    csharp: '// Write your C# code here\n\npublic class Solution {\n    public static void Main(string[] args) {\n        System.Console.WriteLine("Hello World!");\n    }\n}\n',
};

export const hintContent = [
    { id: 1, type: "hint", title: "Hint 1", content: "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations." },
    { id: 2, type: "hint", title: "Hint 2", content: "So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?" },
    { id: 3, type: "hint", title: "Hint 3", content: "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?" }
]
export const topics = [
    {id: 1, name: "Array"},
    {id: 2, name: "Hash Table"},
]

export const problemStatementMenuData = [
    { id: 1, name: "Description", onclick: () => console.log("Description") },
    { id: 2, name: "Solutions", onclick: () => console.log("Solutions") },
    { id: 3, name: "Submissions", onclick: () => console.log("Submissions") }
]