import { Theme } from "@/components/code-editor/types";


export const FALLBACK_LANGUAGE: string = 'cpp'
export const FALLBACK_CODE:  string = '// Write your C++ code here\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}\n';

export const THEMES: Theme[] = [
    { id: 'vs-dark', name: 'Dark' },
    { id: 'light', name: 'Light' },
    { id: 'hc-black', name: 'High Contrast Dark' },
    { id: 'hc-light', name: 'High Contrast Light' },
];


export const problemStatementMenuData = [
    { id: 1, name: "Description", onclick: () => console.log("Description") },
    { id: 2, name: "Solutions", onclick: () => console.log("Solutions") },
    { id: 3, name: "Submissions", onclick: () => console.log("Submissions") }
]