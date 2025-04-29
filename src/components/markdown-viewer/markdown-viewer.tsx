import { useEffect, useState } from 'react';
import { useTheme } from '../provider/theme-provider';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import rehypeRaw from 'rehype-raw';

interface MarkdownViewerProps {
  content: string;
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {

  const [markdownContent, setMarkdownContent] = useState(content);
  
  // Configure DOMPurify to allow HTML tags
  const sanitizedMarkdown = DOMPurify.sanitize(markdownContent, {
    USE_PROFILES: { html: true }
  });
  
  console.log(sanitizedMarkdown);
  
  useEffect(() => {
    setMarkdownContent(content);
  }, [content]);

  // Determine text color based on theme
  const isDarkTheme = useTheme().theme === 'dark'
  
  return (
    <div 
      className="h-full overflow-auto p-4"
      style={{ 
        color: isDarkTheme ? '#e0e0e0' : '#333333',
        backgroundColor: isDarkTheme ? '#1e1e1e' : '#ffffff'
      }}
    >
      <div className="markdown-content markdownViewer">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} >
          {sanitizedMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
