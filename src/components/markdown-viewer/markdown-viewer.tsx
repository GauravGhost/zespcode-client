import { useEffect, useState } from 'react';
import { Theme } from '../code-editor/types';
import ReactMarkdown from 'react-markdown';
import './markdown-viewer.css';

interface MarkdownViewerProps {
  content: string;
  theme?: Theme;
}

const DEFAULT_THEME: Theme = { id: 'vs-dark', name: 'Dark' };

const MarkdownViewer = ({ content, theme = DEFAULT_THEME }: MarkdownViewerProps) => {
  const [markdownContent, setMarkdownContent] = useState(content);

  useEffect(() => {
    setMarkdownContent(content);
  }, [content]);

  // Determine text color based on theme
  const isDarkTheme = theme.id.includes('dark');
  
  return (
    <div 
      className="h-full overflow-auto p-4"
      style={{ 
        color: isDarkTheme ? '#e0e0e0' : '#333333',
        backgroundColor: isDarkTheme ? '#1e1e1e' : '#ffffff'
      }}
    >
      <div className="markdown-content">
        <ReactMarkdown>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
