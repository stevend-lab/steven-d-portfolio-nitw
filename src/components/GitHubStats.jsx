export default function GitHubStats() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 my-6">
            {/* Stats box */}
            <div className="flex-1 bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
                <img
                    src="/data.png"
                    alt="GitHub Contributions"
                    className="w-full h-auto rounded"
                />
            </div>

            {/* Language usage box */}
            <div className="flex-1 bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
                <img
                    src="/lines.png"
                    alt="Most Used Languages"
                    className="w-full h-auto rounded"
                />
            </div>
        </div>
    );
}