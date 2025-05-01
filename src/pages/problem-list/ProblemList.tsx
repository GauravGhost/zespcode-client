import { useState, useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import QuestionCard from './QuestionCard';
import { ProblemListResponse } from '@/types';
import useGetApi from '@/hooks/useGetApi';
import { GET_ALL_PROBLEM_LIST } from '@/api';
import { ProblemListSkeleton, QuestionCardSkeleton } from '@/components/loader/problem-list-skeleton';
import LoadingDots from '@/components/loader/LoadingDots';

const ProblemList = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  const problemListsResponse = useGetApi<ProblemListResponse[]>(GET_ALL_PROBLEM_LIST());


  const fetchQuestions = async (pageNum: number) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // const newQuestions = Array.from({ length: 10 }, (_, i) => ({
    //   id: (pageNum - 1) * 10 + i + 1,
    //   title: `Question ${(pageNum - 1) * 10 + i + 1}`,
    //   difficulty: (["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)] as "Easy" | "Medium" | "Hard"),
    //   acceptance: `${Math.floor(Math.random() * 60 + 20)}%`,
    //   tags: ["Array", "String", "Dynamic Programming", "Math", "Tree"]
    //   .sort(() => 0.5 - Math.random())
    //   .slice(0, Math.floor(Math.random() * 3) + 1)
    // }));

    if (pageNum >= 5) setHasMore(false);
    // setQuestions(prev => [...prev, ...newQuestions]);
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

  if (problemListsResponse.loading) {
    return <ProblemListSkeleton />
  }
  return (
    <div className="container mx-auto max-w-4xl h-screen">
      <h1 className="text-2xl font-bold py-8">LeetCode Problems</h1>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="space-y-2 pr-4">

          {problemListsResponse?.data?.map((question, index) => (
            <QuestionCard key={question._id} question={question} isOdd={index % 2 !== 0} />
          ))}
          {loading && Array(3).fill(0).map((_, i) => (
            <QuestionCardSkeleton key={i} />
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
