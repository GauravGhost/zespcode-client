import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import rehypeRaw from 'rehype-raw';
import { Badge } from '../ui/badge';
import { Icon } from '../ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { hintContent, topics } from '@/lib/constant';

interface MarkdownViewerProps {
  content: string;
  title: string;
}

const MarkdownViewer = ({ content, title }: MarkdownViewerProps) => {

  const [markdownContent, setMarkdownContent] = useState(content);

  // Configure DOMPurify to allow HTML tags
  const sanitizedMarkdown = DOMPurify.sanitize(markdownContent, {
    USE_PROFILES: { html: true }
  });

  console.log(sanitizedMarkdown);

  useEffect(() => {
    setMarkdownContent(content);
  }, [content]);

  return (
    <div
      className="h-[calc(100%-1.7rem)] overflow-auto p-4 pb-10">
      <div>
        <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
      </div>
      <div className='flex items-center justify-start mb-4 gap-2'>
        <Badge variant={'outline'} className='rounded-full px-3 py-1 text-easy bg-muted'>Easy</Badge>
        <Badge variant={'outline'} className='rounded-full px-3 py-1'><Icon name='TagIcon' /> Topics</Badge>
        <Badge variant={'outline'} className='rounded-full px-3 py-1'><Icon name='LightbulbIcon' /> Hint</Badge>
      </div>
      <div className="markdown-content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} >
          {sanitizedMarkdown}
        </ReactMarkdown>
      </div>
      {/* Topic Section */}
      <div className='border-b last:border-b-0'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`item-1`} className='border-b'>
            <AccordionTrigger className='hover:no-underline cursor-pointer'>
              <div className='flex gap-5 items-center '><Icon name='TagIcon' className='h-4 w-4' />{"Topics"}</div>
            </AccordionTrigger>
            <AccordionContent className='ml-10 gap-2 flex'>{topics.map(item => <Badge className='rounded-full px-3 py-1' variant={'secondary'} key={item.id}>{item.name}</Badge>)}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Hint Section */}
      <div>
        <Accordion type="single" collapsible className="w-full">
          {
            hintContent.map((item) => {
              return (
                <AccordionItem key={item.id} value={`item-${item.id}`} className='border-b'>
                  <AccordionTrigger className='hover:no-underline cursor-pointer'><div className='flex gap-5 items-center'><Icon name='LightbulbIcon' className='h-4 w-4' />{item.title}</div></AccordionTrigger>
                  <AccordionContent className='ml-10'>{item.content}</AccordionContent>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  );
};

export default MarkdownViewer;
