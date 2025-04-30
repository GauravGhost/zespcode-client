import Editor, { OnMount } from '@monaco-editor/react';
import { useState } from 'react';
import { Language, Theme } from './types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DEFAULT_CODE_BY_LANGUAGE, LANGUAGES, THEMES } from '@/lib/constant';
import { Separator } from '../ui/separator';

const CodeEditor = () => {
    const [language, setLanguage] = useState<Language>(LANGUAGES[0]);
    const [theme, setTheme] = useState<Theme>(THEMES[0]);
    const [code, setCode] = useState(DEFAULT_CODE_BY_LANGUAGE[language.id]);

    function handleEditorChange(value: string | undefined) {
        if (value !== undefined) {
            setCode(value);
        }
    }

    function handleLanguageChange(newLang: Language) {
        setLanguage(newLang);
        setCode(DEFAULT_CODE_BY_LANGUAGE[newLang.id]);
    }

    function handleEditorDidMount(editor: Parameters<OnMount>[0]) {
        editor.focus();
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 py-1 px-2">
                <Select value={language.id} onValueChange={(value) => handleLanguageChange(LANGUAGES.find(lang => lang.id === value)!)}>
                    <SelectTrigger>
                        <SelectValue placeholder={language.name} />
                    </SelectTrigger >
                    <SelectContent>
                        {LANGUAGES.map((lang) => (
                            <SelectItem
                                key={lang.id}
                                value={lang.id}
                            >
                                {lang.name}
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
                    language={language.id}
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
