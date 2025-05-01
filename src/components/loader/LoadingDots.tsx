const LoadingDots = () => (
    <div className="flex justify-center items-center gap-2 py-4">
        {[0, 0.2, 0.4].map((delay, i) => (
            <div key={i} className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
        ))}
    </div>
)

export default LoadingDots