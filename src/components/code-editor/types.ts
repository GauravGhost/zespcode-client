import { EditorProps as MonacoEditorProps, OnMount, OnChange, BeforeMount } from '@monaco-editor/react';

export interface Language {
    id: string;
    name: string;
}

export interface Theme {
    id: string;
    name: string;
}

export interface EditorProps extends Omit<MonacoEditorProps, 'language' | 'theme'> {
    language?: Language;
    theme?: Theme;
}

export type { OnMount, OnChange, BeforeMount };
