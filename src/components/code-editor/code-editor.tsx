import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'csharp', name: 'C#' },
];

const THEMES = [
    { id: 'vs-dark', name: 'Dark' },
    { id: 'light', name: 'Light' },
    { id: 'hc-black', name: 'High Contrast Dark' },
    { id: 'hc-light', name: 'High Contrast Light' },
];

const DEFAULT_CODE_BY_LANGUAGE = {
    javascript: '// Write your JavaScript code here\n\nfunction example() {\n  console.log("Hello World!");\n}\n',
    typescript: '// Write your TypeScript code here\n\nfunction example(): void {\n  console.log("Hello World!");\n}\n',
    python: '# Write your Python code here\n\ndef example():\n    print("Hello World!")\n',
    java: '// Write your Java code here\n\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}\n',
    cpp: '// Write your C++ code here\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World!" << std::endl;\n    return 0;\n}\n',
    csharp: '// Write your C# code here\n\npublic class Solution {\n    public static void Main(string[] args) {\n        System.Console.WriteLine("Hello World!");\n    }\n}\n',
};

const CodeEditor = () => {
    const [language, setLanguage] = useState(LANGUAGES[0]);
    const [theme, setTheme] = useState(THEMES[0]);
    const [code, setCode] = useState(DEFAULT_CODE_BY_LANGUAGE[language.id as keyof typeof DEFAULT_CODE_BY_LANGUAGE]);

    function handleEditorChange(value: string | undefined) {
        if (value !== undefined) {
            setCode(value);
        }
    }

    function handleLanguageChange(newLang: typeof LANGUAGES[0]) {
        setLanguage(newLang);
        setCode(DEFAULT_CODE_BY_LANGUAGE[newLang.id as keyof typeof DEFAULT_CODE_BY_LANGUAGE]);
    }

    function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
        editor.focus();
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{language.name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {LANGUAGES.map((lang) => (
                            <DropdownMenuItem
                                key={lang.id}
                                onClick={() => handleLanguageChange(lang)}
                            >
                                {lang.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{theme.name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {THEMES.map((t) => (
                            <DropdownMenuItem
                                key={t.id}
                                onClick={() => setTheme(t)}
                            >
                                {t.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Editor
                height="80vh"
                language={language.id}
                theme={theme.id}
                value={code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </div>
    );
}

export default CodeEditor;
