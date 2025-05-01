import { Badge } from '../../components/ui/badge';
import { Icon } from '../../components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import MarkdownViewer from '@/components/markdown-viewer/markdown-viewer';
import { ProblemData } from '@/types';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

interface MarkdownViewerProps {
    problemData: ProblemData | null
}

const ProblemStatement = ({ problemData }: MarkdownViewerProps) => {
    const topics = useRef<HTMLDivElement | null>(null);
    const hints = useRef<HTMLDivElement | null>(null);
    return (
        <div
            className="h-[calc(100%-1.7rem)] overflow-auto p-4 pb-10">
            <div>
                <h1 className='text-2xl font-semibold mb-4'>{problemData?.title}</h1>
            </div>
            <div className='flex items-center justify-start mb-4 gap-2'>
                <Badge variant={'outline'} className={cn('rounded-full px-3 py-1 text-easy bg-muted', `text-${problemData?.difficulty.toLowerCase()}`)}>{problemData?.difficulty}</Badge>
                <Badge variant={'outline'} className='rounded-full px-3 py-1 cursor-pointer' onClick={() => { topics.current?.scrollIntoView({ behavior: 'smooth' }) }}><Icon name='TagIcon' /> Topics</Badge>
                <Badge variant={'outline'} className='rounded-full px-3 py-1 cursor-pointer' onClick={() => { hints.current?.scrollIntoView({ behavior: 'smooth' }) }}><Icon name='LightbulbIcon' /> Hint</Badge>
            </div>

            <MarkdownViewer content={problemData?.description ?? ""} />

            {/* Topic Section */}
            <div ref={topics} className='border-b last:border-b-0'>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-1`} className='border-b'>
                        <AccordionTrigger className='hover:no-underline cursor-pointer'>
                            <div className='flex gap-5 items-center '><Icon name='TagIcon' className='h-4 w-4' />{"Topics"}</div>
                        </AccordionTrigger>
                        <AccordionContent className='ml-10 gap-2 flex'>{problemData?.tags.map(item => <Badge className='rounded-full px-3 py-1' variant={'secondary'} key={item._id}>{item.name}</Badge>)}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Hint Section */}
            <div ref={hints}>
                <Accordion type="single" collapsible className="w-full">
                    {
                        problemData?.hints.map((item, index) => {
                            return (
                                <AccordionItem key={item} value={`item-${index}`} className='border-b'>
                                    <AccordionTrigger className='hover:no-underline cursor-pointer'><div className='flex gap-5 items-center'><Icon name='LightbulbIcon' className='h-4 w-4' />Hint {index + 1}</div></AccordionTrigger>
                                    <AccordionContent className='ml-10'>{item}</AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    );
};

export default ProblemStatement;
