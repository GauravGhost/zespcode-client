import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SubmissionSocketResponse } from "@/lib/socket/socketClient";

interface TestResultProps {
  submissionResponse: SubmissionSocketResponse | null;
  testCaseInput?: string;
}

const TestResult = ({ submissionResponse, testCaseInput }: TestResultProps) => {
  const [activeTab, setActiveTab] = useState<string>("case-1");

  if (!submissionResponse) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>You must run your code first</p>
      </div>
    );
  }

  const { response } = submissionResponse;
  const isSuccess = response.status === "success";
  const statusColor = isSuccess ? "text-green-500" : "text-red-500";
  const statusIcon = isSuccess ? "CheckCircle" : "XCircle";

  const testCases = [
    {
      id: "case-1",
      input: testCaseInput || "n = 5",
      expected: "Expected output would go here",
      output: response.output,
      status: response.status
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-2 flex items-center">
        <div className="flex items-center">
          <Icon name={statusIcon} className={`w-5 h-5 ${statusColor} mr-2`} />
          <span className={`font-medium ${statusColor}`}>
            {isSuccess ? "Accepted" : "Error"}
          </span>
        </div>
      </div>

      <Separator />

      {!isSuccess ? (
        <div className="p-4 overflow-auto h-full">
          <h3 className="text-sm font-medium mb-2">Error:</h3>
          <pre className="bg-muted p-3 rounded-md text-sm whitespace-pre-wrap overflow-auto">
            {response.output}
          </pre>
        </div>
      ) : (
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="h-full flex flex-col"
        >
          <div className="flex items-center px-2 py-1">
            <TabsList className="h-8">
              {testCases.map((testCase, index) => (
                <TabsTrigger 
                  key={testCase.id} 
                  value={testCase.id}
                  className="text-xs px-2 py-1 flex items-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Case {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <Separator />
          
          <div className="flex-1 overflow-hidden">
            {testCases.map((testCase) => (
              <TabsContent 
                key={testCase.id} 
                value={testCase.id}
                className="h-full p-0 m-0"
              >
                <ScrollArea className="h-full">
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="text-xs text-muted-foreground mb-1">Input:</h3>
                      <pre className="bg-muted p-2 rounded-md text-sm whitespace-pre-wrap">
                        {testCase.input}
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-xs text-muted-foreground mb-1">Expected Output:</h3>
                      <pre className="bg-muted p-2 rounded-md text-sm whitespace-pre-wrap">
                        {testCase.expected}
                      </pre>
                    </div>
                    
                    <div>
                      <h3 className="text-xs text-muted-foreground mb-1">Your Output:</h3>
                      <pre className="bg-muted p-2 rounded-md text-sm whitespace-pre-wrap">
                        {testCase.output}
                      </pre>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default TestResult;
