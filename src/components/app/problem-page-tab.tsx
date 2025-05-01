import { ReactNode } from "react"
import { Icon } from "../ui/icon"
import { Separator } from "../ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import * as LucideIcons from "lucide-react"

export type TabItem = {
    id: string
    label: string
    icon?: keyof typeof LucideIcons
    iconColor?: string
    content: ReactNode | string
}

type ProblemPageTabProps = {
    tabs: TabItem[]
    defaultTab?: string
    className?: string
}

const ProblemPageTab = ({
    tabs,
    defaultTab,
    className = "h-full"
}: ProblemPageTabProps) => {
    const activeDefaultTab = defaultTab && tabs.some(tab => tab.id === defaultTab)
        ? defaultTab
        : tabs[0]?.id

    return (
        <Tabs defaultValue={activeDefaultTab} className={className}>
            <div className="items-center flex bg-muted rounded-t-lg">
                <ScrollArea className="w-full">
                    <TabsList className="h-10 gap-1 inline-flex">
                        {tabs.map((tab, index) => (
                            <>
                                <TabsTrigger
                                    key={`tab-${tab.id}`}
                                    className="cursor-pointer border-none hover:bg-hover rounded-sm"
                                    value={tab.id}
                                >
                                    {tab.icon && <Icon color={tab.iconColor} name={tab.icon} className="mr-1" />} {tab.label}
                                </TabsTrigger>
                                {index < tabs.length - 1 && (
                                    <Separator
                                        key={`separator-${tab.id}`}
                                        orientation="vertical"
                                        className="data-[orientation=vertical]:h-4"
                                    />
                                )}
                            </>
                        ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" className="h-1.5" />
                </ScrollArea>
            </div>

            {tabs.map(tab => (
                <TabsContent
                    key={`content-${tab.id}`}
                    value={tab.id}
                    className="h-full"
                >
                    <div className="bg-secondary-background h-full overflow-auto">
                        {tab.content}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default ProblemPageTab
