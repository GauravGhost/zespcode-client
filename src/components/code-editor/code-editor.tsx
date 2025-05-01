import Editor, { OnMount } from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { Theme } from './types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FALLBACK_CODE, FALLBACK_LANGUAGE, THEMES } from '@/lib/constant';
import { Separator } from '../ui/separator';
import { ProblemData } from '@/types';

interface CodeEditorProps {
    problemData: ProblemData | null
}

const CodeEditor = ({ problemData }: CodeEditorProps) => {
    const [language, setLanguage] = useState<string>(FALLBACK_LANGUAGE);
    const [theme, setTheme] = useState<Theme>(THEMES[0]);
    const [code, setCode] = useState("");

    function handleEditorChange(value: string | undefined) {
        if (value !== undefined) {
            setCode(value);
        }
    }

    function handleLanguageChange(newLang: string) {
        setLanguage(newLang);
        setCode(problemData?.codeStubs.find((stub) => stub.languageSlug === newLang)?.userSnippet ?? FALLBACK_CODE);
    }

    function handleEditorDidMount(editor: Parameters<OnMount>[0]) {
        editor.focus();
    }

    useEffect(() => {
        if (problemData) {
            setCode(problemData.codeStubs[0].userSnippet);
            setLanguage(problemData.codeStubs[0].languageSlug);
        }
    }, [problemData])

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 py-1 px-2">
                <Select value={language} onValueChange={(value) => handleLanguageChange(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder={language} />
                    </SelectTrigger >
                    <SelectContent>
                        {problemData?.codeStubs.map((lang) => (
                            <SelectItem
                                key={lang.languageSlug}
                                value={lang.languageSlug}
                            >
                                {lang.language}
                            </SelectItem >
                        ))}
                    </SelectContent>
                </Select>

                <Select value={theme.id} onValueChange={(value) => setTheme(THEMES.find(t => t.id === value)!)}>
                    <SelectTrigger>
                        <SelectValue placeholder={theme.name} />
                    </SelectTrigger >
                    <SelectContent>
                        {THEMES.map((t) => (
                            <SelectItem
                                key={t.id}
                                value={t.id}
                            >
                                {t.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Separator />
            <div className="h-full overflow-auto">
                <Editor
                    height={"100%"}
                    language={language}
                    theme={theme.id}
                    value={code}
                    onChange={handleEditorChange}
                    onMount={handleEditorDidMount}
                    options={{
                        padding: { top: 8 },
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        roundedSelection: false,
                        scrollBeyondLastLine: true,
                        automaticLayout: true,
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditor;
