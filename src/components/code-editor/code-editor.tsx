import Editor, { OnMount } from '@monaco-editor/react';
import { useState } from 'react';
import { Language, Theme } from './types';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DEFAULT_CODE_BY_LANGUAGE, LANGUAGES, THEMES } from '@/lib/constant';

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
        <div className="flex flex-col gap-4 p-4 h-full">
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

            <div className="h-full overflow-auto">
                <Editor
                    height={"100%"}
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
                        scrollBeyondLastLine: true,
                        automaticLayout: true,
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditor;
