import { Language, Theme } from "@/components/code-editor/types";


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

export const problemStatementMenuData = [
    { id: 1, name: "Description", onclick: () => console.log("Description") },
    { id: 2, name: "Solutions", onclick: () => console.log("Solutions") },
    { id: 3, name: "Submissions", onclick: () => console.log("Submissions") }
]