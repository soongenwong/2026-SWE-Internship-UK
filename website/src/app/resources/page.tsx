import Link from "next/link";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 font-medium"
          >
            ← Back to Internships
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Internship 
            <span className="block text-blue-600 dark:text-blue-400">Resources</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your comprehensive guide to landing that dream software engineering internship. 
            From CV optimization to offer negotiation, we&apos;ve got you covered.
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a href="#cv-optimization" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">CV Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300">Make your CV stand out to recruiters</p>
          </a>
          <a href="#online-assessment" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Online Assessment</h3>
            <p className="text-gray-600 dark:text-gray-300">Ace coding tests and assessments</p>
          </a>
          <a href="#hirevue" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">HireVue</h3>
            <p className="text-gray-600 dark:text-gray-300">Master video interviews</p>
          </a>
          <a href="#technical-interview" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technical Interview</h3>
            <p className="text-gray-600 dark:text-gray-300">Prepare for coding interviews</p>
          </a>
          <a href="#getting-offer" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Getting the Offer</h3>
            <p className="text-gray-600 dark:text-gray-300">Seal the deal and negotiate</p>
          </a>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Your Success Journey</h3>
              <p className="text-blue-100">Follow our guide step by step</p>
            </div>
          </div>
        </div>

        {/* CV Optimization Section */}
        <section id="cv-optimization" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-blue-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                📝 CV Optimization
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">✅ CV Essentials</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Keep it to 1-2 pages:</strong> Recruiters spend 6 seconds scanning CVs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Technical Skills:</strong> List programming languages, frameworks, tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Projects Section:</strong> 3-4 relevant projects with GitHub links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Quantify Impact:</strong> &quot;Improved performance by 40%&quot; vs &quot;Optimized code&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>ATS-Friendly:</strong> Use standard fonts, avoid graphics/tables</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Tech CV Template</h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-sm">
                    <div className="font-mono text-gray-800 dark:text-gray-200">
                      <div className="mb-2"><strong>Your Name</strong></div>
                      <div className="mb-4">Email • LinkedIn • GitHub • Phone</div>
                      
                      <div className="mb-2"><strong>EDUCATION</strong></div>
                      <div className="mb-4 ml-2">University • Degree • GPA • Expected Graduation</div>
                      
                      <div className="mb-2"><strong>TECHNICAL SKILLS</strong></div>
                      <div className="mb-4 ml-2">Languages: Python, Java, JavaScript<br/>Frameworks: React, Node.js, Django</div>
                      
                      <div className="mb-2"><strong>PROJECTS</strong></div>
                      <div className="ml-2">Project Name | Tech Stack | GitHub<br/>• Brief description with impact</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Pro Tip</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Tailor your CV for each application. Use keywords from the job description and highlight relevant projects. 
                  For FAANG companies, emphasize algorithms, data structures, and system design projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Online Assessment Section */}
        <section id="online-assessment" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-green-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                💻 Online Assessment
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📚 Preparation</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Practice on LeetCode, HackerRank</li>
                    <li>• Focus on Easy-Medium problems</li>
                    <li>• Time yourself (typically 60-90 mins)</li>
                    <li>• Practice debugging code</li>
                    <li>• Review basic CS concepts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⚡ Common Topics</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Arrays and Strings</li>
                    <li>• Hash Tables</li>
                    <li>• Basic Recursion</li>
                    <li>• Sorting Algorithms</li>
                    <li>• Simple Dynamic Programming</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Test Day Tips</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Read questions carefully</li>
                    <li>• Start with brute force solution</li>
                    <li>• Test with edge cases</li>
                    <li>• Comment your code</li>
                    <li>• Don&apos;t panic if stuck</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🛠️ Recommended Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" 
                     className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-yellow-800 dark:text-yellow-200">LeetCode</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">Coding problems</div>
                  </a>
                  <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer"
                     className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-green-800 dark:text-green-200">HackerRank</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Practice tests</div>
                  </a>
                  <a href="https://codewars.com" target="_blank" rel="noopener noreferrer"
                     className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-red-800 dark:text-red-200">Codewars</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Kata challenges</div>
                  </a>
                  <a href="https://codesignal.com" target="_blank" rel="noopener noreferrer"
                     className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-purple-800 dark:text-purple-200">CodeSignal</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Assessment prep</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HireVue Section */}
        <section id="hirevue" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-purple-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                🎥 HireVue Interview
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎬 Setup Tips</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Lighting:</strong> Face a window or use good lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Camera:</strong> Eye level, stable position</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Background:</strong> Clean, professional, minimal distractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Audio:</strong> Test microphone, quiet environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Dress Code:</strong> Business casual, avoid patterns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">💬 Common Questions</h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <strong>&quot;Tell me about yourself&quot;</strong>
                      <p className="text-sm mt-1">Elevator pitch: Background, relevant experience, why this role</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <strong>&quot;Why this company?&quot;</strong>
                      <p className="text-sm mt-1">Research company values, recent news, specific reasons</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <strong>&quot;Describe a challenge you faced&quot;</strong>
                      <p className="text-sm mt-1">Use STAR method: Situation, Task, Action, Result</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 STAR Method Template</h4>
                <div className="text-purple-800 dark:text-purple-200 space-y-2">
                  <div><strong>Situation:</strong> Set the context for your story</div>
                  <div><strong>Task:</strong> Describe what you needed to accomplish</div>
                  <div><strong>Action:</strong> Explain the specific steps you took</div>
                  <div><strong>Result:</strong> Share the outcomes and what you learned</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Interview Section */}
        <section id="technical-interview" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-red-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                🧠 Technical Interview
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📋 Interview Structure</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <div className="font-semibold text-red-600 dark:text-red-400">1. Problem Understanding (5 mins)</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Ask clarifying questions, understand constraints</div>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <div className="font-semibold text-orange-600 dark:text-orange-400">2. Solution Design (10 mins)</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Discuss approach, trace through examples</div>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <div className="font-semibold text-yellow-600 dark:text-yellow-400">3. Coding (20 mins)</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Write clean, working code</div>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <div className="font-semibold text-green-600 dark:text-green-400">4. Testing & Optimization (10 mins)</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">Test edge cases, discuss improvements</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔥 Study Plan (8 weeks)</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="font-semibold">Weeks 1-2: Foundations</div>
                      <div className="text-sm">Arrays, strings, hash tables, two pointers</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="font-semibold">Weeks 3-4: Data Structures</div>
                      <div className="text-sm">Linked lists, stacks, queues, trees</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="font-semibold">Weeks 5-6: Algorithms</div>
                      <div className="text-sm">Recursion, sorting, searching, DFS/BFS</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="font-semibold">Weeks 7-8: Advanced</div>
                      <div className="text-sm">Dynamic programming, system design basics</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📚 Essential Books & Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 dark:text-blue-200">Cracking the Coding Interview</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Gayle McDowell - Interview bible</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="font-semibold text-green-800 dark:text-green-200">Elements of Programming Interviews</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Aziz, Lee, Prakash</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <div className="font-semibold text-purple-800 dark:text-purple-200">System Design Interview</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Alex Xu - For senior roles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting the Offer Section */}
        <section id="getting-offer" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-yellow-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                🎯 Getting the Offer
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🤝 Offer Negotiation</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Research Market Rates:</strong> Use Glassdoor, levels.fyi, Blind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Consider Total Package:</strong> Base salary + bonus + equity + benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Multiple Offers:</strong> Create competition, negotiate timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Be Professional:</strong> Express enthusiasm, be grateful</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Alternative Benefits:</strong> Flexible hours, learning budget, WFH</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📈 UK Internship Salaries (2026)</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-400">
                      <div className="font-semibold text-green-800 dark:text-green-200">FAANG Companies</div>
                      <div className="text-green-700 dark:text-green-300">£4,000-6,000/month + perks</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-400">
                      <div className="font-semibold text-blue-800 dark:text-blue-200">Investment Banks</div>
                      <div className="text-blue-700 dark:text-blue-300">£3,500-5,500/month</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded border-l-4 border-purple-400">
                      <div className="font-semibold text-purple-800 dark:text-purple-200">Trading Firms</div>
                      <div className="text-purple-700 dark:text-purple-300">£4,500-7,000/month</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded border-l-4 border-orange-400">
                      <div className="font-semibold text-orange-800 dark:text-orange-200">Startups/Scale-ups</div>
                      <div className="text-orange-700 dark:text-orange-300">£2,500-4,000/month + equity</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">✅ Final Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Before Accepting:</h4>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Reviewed total compensation package</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Understood role expectations and growth path</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Asked about mentor assignment and support</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Clarified work arrangement (remote/hybrid/office)</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">After Accepting:</h4>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Thanked all interviewers and recruiters</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Updated LinkedIn with new position</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Prepared for first day (laptop setup, etc.)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Set learning goals for the internship</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎉 Ready to Apply?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You&apos;ve got the tools and knowledge. Now go land that dream internship!
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Internships →
            </Link>
          </div>
          
          <p className="mb-4">
            💡 Resources compiled from industry experts and successful interns
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Back to Internships
            </Link>
            <span className="text-gray-400">•</span>
            <span>Made with ❤️ for future software engineers</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
