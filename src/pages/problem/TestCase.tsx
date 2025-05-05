import { useState, useEffect } from "react";
import { ProblemData } from "@/types";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/ui/icon";

interface TestCaseTabProps {
  problemData: ProblemData | null;
}

const TestCase = ({ problemData }: TestCaseTabProps) => {
  const [activeTab, setActiveTab] = useState<string>("case-1");
  const [customInput, setCustomInput] = useState<string>("");
  const [customInputPreview, setCustomInputPreview] = useState<string>("");

  useEffect(() => {
    if (problemData?.testCases && problemData.testCases.length > 0) {
      setActiveTab("case-1");
    }
  }, [problemData]);

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomInput(e.target.value);
    
    try {
      const lines = e.target.value.split("\n");
      let preview = "";
      
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.includes("=")) {
          const [variable, value] = trimmedLine.split("=").map(part => part.trim());
          preview += `${variable} = ${value}\n`;
        } else if (trimmedLine) {
          preview += `${trimmedLine}\n`;
        }
      }
      
      setCustomInputPreview(preview);
    } catch (error) {
      console.error("Error parsing custom input:", error);
      setCustomInputPreview(e.target.value);
    }
  };

  const handleRunTestCase = () => {
    console.log("Running test case:", activeTab === "custom" ? customInput : problemData?.testCases[parseInt(activeTab.split("-")[1]) - 1]?.input);
  };

  if (!problemData) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading test cases...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="h-full flex flex-col"
      >
        <div className="flex items-center px-2 py-1">
          <TabsList className="h-8">
            {problemData.testCases.map((testCase, index) => (
              <TabsTrigger 
                key={`case-${index + 1}`} 
                value={`case-${index + 1}`}
                className="text-xs px-2 py-1"
              >
                Case {index + 1}
              </TabsTrigger>
            ))}
            <TabsTrigger 
              value="custom" 
              className="text-xs px-2 py-1"
            >
              Custom
            </TabsTrigger>
          </TabsList>
          
          <div className="ml-auto">
            <Button 
              size="sm" 
              onClick={handleRunTestCase}
              className="h-8 gap-1"
            >
              <Icon name="Play" className="w-4 h-4" />
              Run
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex-1 overflow-hidden">
          {/* Test case content */}
          {problemData.testCases.map((testCase, index) => (
            <TabsContent 
              key={`case-${index + 1}`} 
              value={`case-${index + 1}`}
              className="h-full p-0 m-0"
            >
              <ScrollArea className="h-full p-2">
                <p className="text-xs text-muted-foreground mb-1">Input:</p>
                <pre className="text-sm whitespace-pre-wrap bg-muted p-2 rounded-lg">{testCase.input}</pre>
              </ScrollArea>
            </TabsContent>
          ))}
          
          {/* Custom test case input */}
          <TabsContent 
            value="custom" 
            className="h-full p-0 m-0 flex flex-col"
          >
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 p-2 border-r">
                <p className="text-xs text-muted-foreground mb-1">Input:</p>
                <textarea
                  value={customInput}
                  onChange={handleCustomInputChange}
                  placeholder="Enter your test case here (e.g. n = 5)"
                  className="w-full h-[calc(100%-20px)] p-2 bg-background border rounded-md text-sm font-mono resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div className="flex-1 p-2">
                <p className="text-xs text-muted-foreground mb-1">Preview:</p>
                <ScrollArea className="h-[calc(100%-20px)]">
                  <pre className="text-sm whitespace-pre-wrap p-2 font-mono">
                    {customInputPreview || "Preview will appear here"}
                  </pre>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TestCase;
