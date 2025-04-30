import { useState, useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: string;
  tags: string[];
}

const QuestionCard = ({ question }: { question: Question }) => (
  <div className="p-4 border rounded-md mb-3 hover:bg-slate-50 cursor-pointer">
    <div className="flex justify-between">
      <h3 className="font-medium">{question.title}</h3>
      <span className={`px-2 py-1 rounded text-xs ${
        question.difficulty === "Easy" ? "bg-green-100 text-green-800" :
        question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
        "bg-red-100 text-red-800"
      }`}>
        {question.difficulty}
      </span>
    </div>
    <div className="flex justify-between mt-2 text-sm text-gray-500">
      <div>Acceptance: {question.acceptance}</div>
      <div className="flex gap-1">
        {question.tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-800 px-2 rounded text-xs py-1">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const LoadingDots = () => (
  <div className="flex justify-center items-center gap-2 py-4">
    {[0, 0.2, 0.4].map((delay, i) => (
      <div key={i} className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
    ))}
  </div>
);

const ProblemList = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const fetchQuestions = async (pageNum: number) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newQuestions = Array.from({ length: 10 }, (_, i) => ({
      id: (pageNum - 1) * 10 + i + 1,
      title: `Question ${(pageNum - 1) * 10 + i + 1}`,
      difficulty: (["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)] as "Easy" | "Medium" | "Hard"),
      acceptance: `${Math.floor(Math.random() * 60 + 20)}%`,
      tags: ["Array", "String", "Dynamic Programming", "Math", "Tree"]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 1)
    }));
    
    if (pageNum >= 5) setHasMore(false);
    setQuestions(prev => [...prev, ...newQuestions]);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestions(page);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(p => p + 1);
        }
      },
      { threshold: 0.1, root: null, rootMargin: "20px" }
    );
    
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  useEffect(() => {
    if (page > 1) fetchQuestions(page);
  }, [page]);

  return (
    <div className="container mx-auto max-w-3xl h-screen">
      <h1 className="text-2xl font-bold py-8">LeetCode Problems</h1>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="space-y-2 pr-4">
          {questions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))}
          {loading && Array(3).fill(0).map((_, i) => (
            <div key={i} className="p-4 border rounded-md mb-3" />
          ))}
          <div ref={loaderRef} className="mt-4">
            {hasMore ? (
              <LoadingDots />
            ) : (
              <div className="text-center py-4 text-gray-500">No more questions to load</div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProblemList;
