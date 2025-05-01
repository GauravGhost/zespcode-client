import { Badge } from '../../components/ui/badge';
import { Icon } from '../../components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { hintContent, topics } from '@/lib/constant';
import MarkdownViewer from '@/components/markdown-viewer/markdown-viewer';
import { ProblemData } from '@/types';

interface MarkdownViewerProps {
    problemData: ProblemData | null
}

const ProblemStatement = ({ problemData }: MarkdownViewerProps) => {
    return (
        <div
            className="h-[calc(100%-1.7rem)] overflow-auto p-4 pb-10">
            <div>
                <h1 className='text-2xl font-semibold mb-4'>{problemData?.title}</h1>
            </div>
            <div className='flex items-center justify-start mb-4 gap-2'>
                <Badge variant={'outline'} className='rounded-full px-3 py-1 text-easy bg-muted'>{problemData?.difficulty}</Badge>
                <Badge variant={'outline'} className='rounded-full px-3 py-1'><Icon name='TagIcon' /> Topics</Badge>
                <Badge variant={'outline'} className='rounded-full px-3 py-1'><Icon name='LightbulbIcon' /> Hint</Badge>
            </div>

            <MarkdownViewer content={problemData?.description ?? ""} />

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

export default ProblemStatement;
