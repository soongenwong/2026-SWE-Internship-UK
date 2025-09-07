import Link from "next/link";

export default function LeetCodePatterns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 mb-4 font-medium"
          >
            ← Back to Internships
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            LeetCode 
            <span className="block text-green-600 dark:text-green-400">Patterns</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master the essential patterns tested by FAANG, trading firms, and top tech companies. 
            Focus your preparation on what actually gets asked in interviews.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15</div>
            <div className="text-gray-600 dark:text-gray-300">Essential Patterns</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">80%</div>
            <div className="text-gray-600 dark:text-gray-300">Interview Coverage</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">200</div>
            <div className="text-gray-600 dark:text-gray-300">Practice Problems</div>
          </div>
        </div>

        {/* Essential Patterns Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">🎯 Essential Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Two Pointers */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">👆</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Two Pointers</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Use two pointers to traverse arrays or strings efficiently
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded text-blue-800 dark:text-blue-200">
                  Two Sum II, 3Sum, Container With Most Water
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Google, Meta, Apple
                </div>
              </div>
            </div>

            {/* Sliding Window */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🪟</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sliding Window</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Maintain a window of elements for subarray problems
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded text-green-800 dark:text-green-200">
                  Longest Substring, Min Window Substring
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Amazon, Microsoft, Uber
                </div>
              </div>
            </div>

            {/* Binary Search */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Binary Search</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Efficiently search sorted arrays or search spaces
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded text-purple-800 dark:text-purple-200">
                  Search in Rotated Array, Find Peak Element
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Google, Bloomberg, Jane Street
                </div>
              </div>
            </div>

            {/* DFS/BFS */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🌳</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">DFS/BFS</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Tree and graph traversal algorithms
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded text-red-800 dark:text-red-200">
                  Binary Tree Paths, Number of Islands
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Meta, LinkedIn, Airbnb
                </div>
              </div>
            </div>

            {/* Dynamic Programming */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">🧩</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dynamic Programming</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Break problems into overlapping subproblems
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded text-yellow-800 dark:text-yellow-200">
                  Climbing Stairs, Coin Change, LIS
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Google, Citadel, Two Sigma
                </div>
              </div>
            </div>

            {/* Backtracking */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">↩️</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backtracking</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                Explore all possibilities with constraint satisfaction
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded text-indigo-800 dark:text-indigo-200">
                  Permutations, Subsets, N-Queens
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>Companies:</strong> Apple, Netflix, Palantir
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Company-Specific Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">🏢 Company Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* FAANG */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                🚀 FAANG Companies
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Top Patterns</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                    <li>• Array/String manipulation (Two Pointers, Sliding Window)</li>
                    <li>• Tree traversal (DFS/BFS, Binary Tree problems)</li>
                    <li>• Dynamic Programming (1D/2D DP, memoization)</li>
                    <li>• Graph algorithms (BFS for shortest path)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    <strong>Interview Style:</strong> Focus on clean code, edge cases, and optimization discussions
                  </p>
                </div>
              </div>
            </div>

            {/* Trading Firms */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                💹 Trading Firms
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Patterns</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                    <li>• Binary Search (price optimization, search problems)</li>
                    <li>• Greedy algorithms (scheduling, interval problems)</li>
                    <li>• Math/Statistics (probability, combinatorics)</li>
                    <li>• Data structures (heaps, stacks, queues)</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="text-xs text-green-800 dark:text-green-200">
                    <strong>Interview Style:</strong> Emphasis on mathematical thinking and optimal time/space complexity
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Preparation Strategy */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                📚 Preparation Strategy
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Study Plan */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    📅 8-Week Study Plan
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Weeks 1-2: Arrays & Strings</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Two Pointers, Sliding Window (30 problems)</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Weeks 3-4: Trees & Graphs</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">DFS/BFS, Binary Trees (25 problems)</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Weeks 5-6: Dynamic Programming</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">1D/2D DP, memoization (20 problems)</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 dark:text-red-200">Weeks 7-8: Mock Interviews</h4>
                      <p className="text-sm text-red-700 dark:text-red-300">Mixed problems, time pressure (15 problems/week)</p>
                    </div>
                  </div>
                </div>

                {/* Online Assessment Tips */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    💻 Online Assessment Tips
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Before the Test</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Test your environment (camera, mic, internet)</li>
                        <li>• Practice on the actual platform (HackerRank, Codility)</li>
                        <li>• Review common patterns in your target language</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">During the Test</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Read ALL problems first, start with easiest</li>
                        <li>• Write clean, well-commented code</li>
                        <li>• Test with edge cases before submitting</li>
                        <li>• Manage time: don&apos;t get stuck on one problem</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">🛠️ Essential Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg">Practice Platforms</h3>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                <li>• <strong>LeetCode:</strong> Pattern-based practice</li>
                <li>• <strong>NeetCode:</strong> Curated problem lists</li>
                <li>• <strong>AlgoExpert:</strong> Video explanations</li>
                <li>• <strong>Pramp:</strong> Mock interviews</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">Study Materials</h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                <li>• <strong>Grokking Coding Patterns:</strong> Pattern mastery</li>
                <li>• <strong>CTCI:</strong> Interview fundamentals</li>
                <li>• <strong>Blind 75:</strong> Essential problems</li>
                <li>• <strong>Company tagged problems:</strong> Target practice</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">Time Management</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• <strong>Easy problems:</strong> 10-15 minutes</li>
                <li>• <strong>Medium problems:</strong> 20-30 minutes</li>
                <li>• <strong>Hard problems:</strong> 35-45 minutes</li>
                <li>• <strong>Mock interviews:</strong> 2-3 per week</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">💪 Ready to Crush Your Coding Interviews?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Master these patterns and you&apos;ll be prepared for 80% of coding interview questions!
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/application-tips" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 Application Tips
              </Link>
              <Link 
                href="/resources" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📚 Interview Resources
              </Link>
            </div>
          </div>
          
          <p className="mb-4">
            🎯 Practice smart, not hard
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/" className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium">
              Back to Internships
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/application-tips" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
              Application Tips
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Interview Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span>Made with ❤️ for future engineers</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
