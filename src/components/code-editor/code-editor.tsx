import Editor, { OnMount } from '@monaco-editor/react';
import { useEffect, useState, useCallback } from 'react';
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
import { ProblemData, SubmissionPayload } from '@/types';
import submissionPayload from '@/lib/store/submission';

interface CodeEditorProps {
    problemData: ProblemData | null
}

const CodeEditor = ({ problemData }: CodeEditorProps) => {
    const [theme, setTheme] = useState<Theme>(THEMES[0]);

    // Get submission state and actions from the store
    const submission = submissionPayload(state => state.submission);
    const setSubmission = submissionPayload(state => state.setSubmission);
    const getSubmission = submissionPayload(state => state.getSubmission);

    // Create submission update helper that doesn't depend on submission state
    const updateSubmission = useCallback((updates: { code?: string; language?: string }) => {
        if (!problemData) return;
        
        // Get current submission state at the time of update
        const currentSubmission = getSubmission();
        
        // Create new submission object
        const newSubmission: SubmissionPayload = {
            code: updates.code ?? currentSubmission?.code ?? "",
            language: updates.language ?? currentSubmission?.language ?? FALLBACK_LANGUAGE,
            problemId: problemData._id,
            userId: currentSubmission?.userId ?? ""
        };
        
        setSubmission(newSubmission);
    }, [problemData, getSubmission, setSubmission]); // No dependency on submission

    const handleEditorChange = useCallback((value: string | undefined) => {
        if (value !== undefined) {
            updateSubmission({ code: value });
        }
    }, [updateSubmission]);

    const handleLanguageChange = useCallback((newLang: string) => {
        if (!problemData) return;
        
        const stub = problemData.codeStubs.find(
            (stub) => stub.languageSlug === newLang
        );
        
        const newCode = stub?.userSnippet ?? FALLBACK_CODE;
        updateSubmission({ code: newCode, language: newLang });
    }, [problemData, updateSubmission]);

    const handleEditorDidMount = (editor: Parameters<OnMount>[0]) => {
        editor.focus();
    };

    // Initialize submission when problem data changes
    useEffect(() => {
        if (problemData?.codeStubs && problemData.codeStubs.length > 0) {
            updateSubmission({
                code: problemData.codeStubs[0].userSnippet,
                language: problemData.codeStubs[0].languageSlug
            });
        }
    }, [problemData, updateSubmission]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 py-1 px-2">
                <Select 
                    value={submission?.language ?? FALLBACK_LANGUAGE} 
                    onValueChange={handleLanguageChange}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={submission?.language ?? FALLBACK_LANGUAGE} />
                    </SelectTrigger>
                    <SelectContent>
                        {problemData?.codeStubs.map((lang) => (
                            <SelectItem
                                key={lang.languageSlug}
                                value={lang.languageSlug}
                            >
                                {lang.language}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select 
                    value={theme.id} 
                    onValueChange={(value) => setTheme(THEMES.find(t => t.id === value)!)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={theme.name} />
                    </SelectTrigger>
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
                    height="100%"
                    language={submission?.language ?? FALLBACK_LANGUAGE}
                    theme={theme.id}
                    value={submission?.code ?? ""}
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
