export interface Question {
    id: number;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    acceptance: string;
    tags: string[];
}
const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
        case "Easy":
            return "bg-green-100 text-green-800";
        case "Medium":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-red-100 text-red-800";
    }
};
const QuestionCard = ({ question }: { question: Question }) => (
    <div className="p-4 border rounded-md mb-3 hover:bg-hover cursor-pointer">
        <div className="flex justify-between">
            <h3 className="font-medium">{question.title}</h3>
            <span className={`px-2 py-1 rounded text-xs ${getDifficultyClass(question.difficulty)}`}>
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

export default QuestionCard