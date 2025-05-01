import { ProblemListResponse } from "@/types";
import { Link } from "react-router"

const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
        case "Easy":
            return "text-easy";
        case "Medium":
            return "text-medium";
        default:
            return "text-hard";
    }
};

interface QuestionCardProps {
    question: ProblemListResponse;
    isOdd?: boolean;
}
const QuestionCard = ({ question, isOdd }: QuestionCardProps) => (
    <Link to={`/problems/${question.problemId}-${question.titleSlug}`} className="no-underline text-inherit">
        <div className={`rounded-lg  px-6 py-3.5 shadow-sm transition-all hover:shadow-md cursor-pointer ${isOdd ? null : 'bg-muted'}`}>
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm">{question.problemId}. {question.title}</h3>

                <div className="flex justify-between text-sm text-gray-500">
                    <span className={`rounded text-xs font-bold ${getDifficultyClass("Easy")}`}>
                        {"Easy"}
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

export default QuestionCard