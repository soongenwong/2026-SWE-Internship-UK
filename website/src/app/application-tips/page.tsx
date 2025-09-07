import Link from "next/link";

export default function ApplicationTips() {
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
            Application 
            <span className="block text-blue-600 dark:text-blue-400">Tips</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master the art of crafting compelling applications that land interviews. 
            From company research to application timing, strengthen every aspect of your submission.
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a href="#research-targeting" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Research & Targeting</h3>
            <p className="text-gray-600 dark:text-gray-300">Find the right companies and roles</p>
          </a>
          <a href="#application-strategy" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Strategy</h3>
            <p className="text-gray-600 dark:text-gray-300">Optimize your application approach</p>
          </a>
          <a href="#cover-letters" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cover Letters</h3>
            <p className="text-gray-600 dark:text-gray-300">Write compelling cover letters</p>
          </a>
          <a href="#portfolio-projects" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Portfolio & Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">Showcase your technical skills</p>
          </a>
          <a href="#networking" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Networking</h3>
            <p className="text-gray-600 dark:text-gray-300">Build professional connections</p>
          </a>
          <a href="#tracking-followup" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tracking & Follow-up</h3>
            <p className="text-gray-600 dark:text-gray-300">Stay organized and persistent</p>
          </a>
        </div>

        {/* Success Banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg p-6 text-white flex items-center justify-center max-w-md">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Land Your Dream Internship</h3>
              <p className="text-green-100">Strategic applications get results</p>
            </div>
          </div>
        </div>

        {/* Research & Targeting Section */}
        <section id="research-targeting" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-blue-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                🎯 Research & Targeting
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔍 Company Research</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Company Mission:</strong> Understand their values and recent news</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Tech Stack:</strong> Know what technologies they use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Recent Projects:</strong> Read their engineering blogs and case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Culture:</strong> Check Glassdoor, LinkedIn employee posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Growth Stage:</strong> Startup vs scale-up vs established company</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Role Targeting</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Match Your Skills</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Apply for roles where you meet 60-70% of requirements. Don&apos;t let imposter syndrome stop you!
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location Preferences</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Consider remote, hybrid, and on-site options. Some companies offer relocation support.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Preferences</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Frontend, Backend, Full-stack, DevOps, Data, ML - know what excites you most.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Research Sources</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-blue-800 dark:text-blue-200">
                    <strong>Official Sources:</strong><br/>
                    • Company website<br/>
                    • Engineering blogs<br/>
                    • Press releases
                  </div>
                  <div className="text-blue-800 dark:text-blue-200">
                    <strong>Employee Insights:</strong><br/>
                    • LinkedIn posts<br/>
                    • Glassdoor reviews<br/>
                    • Company Slack/Discord
                  </div>
                  <div className="text-blue-800 dark:text-blue-200">
                    <strong>Tech Community:</strong><br/>
                    • GitHub repositories<br/>
                    • Stack Overflow<br/>
                    • Tech Twitter/LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Strategy Section */}
        <section id="application-strategy" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-green-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                📋 Application Strategy
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⏰ Timing Strategy</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Early Applications (August-September)</h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Apply as soon as applications open. Early birds get priority and more interview slots.
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Peak Season (September-October)</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                        Most applications are submitted. Stand out with quality over quantity.
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 dark:text-red-200">Late Applications (November+)</h4>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                        Limited spots available. Focus on companies still actively hiring.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📊 Application Volume</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Quality Applications</h4>
                        <span className="text-2xl font-bold text-green-600">15-25</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Highly targeted, customized applications to your top choice companies.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Standard Applications</h4>
                        <span className="text-2xl font-bold text-blue-600">50-75</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Good fit companies with moderate customization.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Spray & Pray</h4>
                        <span className="text-2xl font-bold text-red-600">❌</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Mass applications with generic content. Low success rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">✅ Application Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Before Submitting:</h4>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>CV tailored to job requirements</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Cover letter mentions specific company details</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Portfolio/GitHub links are working and relevant</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Proofread for spelling and grammar</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">After Submitting:</h4>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Added to application tracking spreadsheet</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Connect with employees on LinkedIn</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Set follow-up reminder for 2 weeks</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span>Continue researching for interview prep</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Letters Section */}
        <section id="cover-letters" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-purple-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                ✍️ Cover Letters That Work
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📝 Structure Template</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Opening (1 paragraph)</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Hook + Position + Brief connection to company
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Body (2 paragraphs)</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        P1: Relevant experience + specific achievements<br/>
                        P2: Why this company + what you can contribute
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Closing (1 paragraph)</h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Enthusiasm + call to action + professional sign-off
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">💡 Writing Tips</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Research First:</strong> Mention specific company projects or values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Quantify Impact:</strong> &quot;Improved performance by 40%&quot; vs &quot;Made it faster&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Show Passion:</strong> Explain why you&apos;re excited about their mission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Be Concise:</strong> Keep it to one page, 3-4 paragraphs max</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Use Keywords:</strong> Mirror language from the job description</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example Opening:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      &quot;As a computer science student who built a distributed caching system that reduced API response times by 60%, I was thrilled to see Stripe&apos;s Software Engineer Intern opening. Your recent blog post on payment infrastructure scalability perfectly aligns with my passion for building robust, high-performance systems.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio & Projects Section */}
        <section id="portfolio-projects" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-red-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                💻 Portfolio & Projects
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🚀 Project Selection</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 dark:text-red-200">1. Full-Stack Web Application</h4>
                      <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                        React/Vue + Node.js/Django + Database + Authentication
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">2. Data Structure/Algorithm Project</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Custom implementation with performance analysis and testing
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">3. Domain-Specific Project</h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Mobile app, game, ML model, or DevOps pipeline
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📋 Project Documentation</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">README.md Essentials</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Clear project description and purpose</li>
                        <li>• Screenshots or demo GIFs</li>
                        <li>• Tech stack and architecture overview</li>
                        <li>• Setup and installation instructions</li>
                        <li>• Live demo link (if applicable)</li>
                        <li>• Challenges faced and solutions</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Code Quality</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Clean, well-commented code</li>
                        <li>• Consistent naming conventions</li>
                        <li>• Unit tests for core functionality</li>
                        <li>• Error handling and edge cases</li>
                        <li>• Git history with meaningful commits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🌟 Portfolio Website Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Design</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Clean, professional layout</li>
                      <li>• Mobile responsive design</li>
                      <li>• Fast loading times</li>
                      <li>• Easy navigation</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Content</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Brief, engaging bio</li>
                      <li>• 3-5 best projects featured</li>
                      <li>• Skills and technologies</li>
                      <li>• Contact information</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">SEO & Analytics</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Custom domain name</li>
                      <li>• Meta tags and descriptions</li>
                      <li>• Google Analytics setup</li>
                      <li>• Social media previews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Networking Section */}
        <section id="networking" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-yellow-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                🤝 Strategic Networking
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 LinkedIn Strategy</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Profile Optimization</h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 space-y-1">
                        <li>• Professional headshot photo</li>
                        <li>• Compelling headline beyond &quot;Student at X&quot;</li>
                        <li>• Summary highlighting projects and goals</li>
                        <li>• Skills section with endorsements</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Content Strategy</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 mt-1 space-y-1">
                        <li>• Share project updates and learnings</li>
                        <li>• Comment thoughtfully on industry posts</li>
                        <li>• Write articles about your experiences</li>
                        <li>• Engage with company content</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📧 Outreach Templates</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cold Connection Request</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        &quot;Hi [Name], I&apos;m a CS student at [University] interested in [Company]&apos;s work on [specific project/technology]. Would love to learn about your experience as a [Title]. Thanks!&quot;
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Follow-up Message</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        &quot;Hi [Name], Thanks for connecting! I just applied for the Software Engineering Intern role at [Company]. Any insights about the team culture or application process would be incredibly valuable. Happy to chat over coffee if you&apos;re in [City]!&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🌐 Other Networking Channels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">University Events</div>
                    <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Career fairs</li>
                      <li>• Tech talks</li>
                      <li>• Hackathons</li>
                      <li>• Alumni events</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                    <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Tech Meetups</div>
                    <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Local tech groups</li>
                      <li>• Language-specific meetups</li>
                      <li>• Startup events</li>
                      <li>• Conference networking</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="font-semibold text-green-800 dark:text-green-200 mb-2">Online Communities</div>
                    <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                      <li>• Discord servers</li>
                      <li>• Reddit communities</li>
                      <li>• Slack workspaces</li>
                      <li>• GitHub discussions</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <div className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Cold Outreach</div>
                    <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Email to engineers</li>
                      <li>• Twitter/X engagement</li>
                      <li>• Company Slack channels</li>
                      <li>• Office visits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracking & Follow-up Section */}
        <section id="tracking-followup" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-6 bg-indigo-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                📊 Tracking & Follow-up
              </h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📈 Application Tracker</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Company</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Position</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Date Applied</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2 text-gray-900 dark:text-white">Meta</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">SWE Intern</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">01/09/25</td>
                          <td className="px-4 py-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Interview</span></td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <td className="px-4 py-2 text-gray-900 dark:text-white">Google</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">STEP Intern</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">03/09/25</td>
                          <td className="px-4 py-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Applied</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-gray-900 dark:text-white">Stripe</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">SWE Intern</td>
                          <td className="px-4 py-2 text-gray-700 dark:text-gray-300">05/09/25</td>
                          <td className="px-4 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Offer</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Track applications in a spreadsheet with columns for company, position, application date, contact person, status, and follow-up dates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⏰ Follow-up Timeline</h3>
                  <div className="space-y-4">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">1 Week After Application</h4>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                        Connect with employees on LinkedIn, engage with company content
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">2 Weeks After Application</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Polite follow-up email expressing continued interest
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">1 Month After Application</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        Final follow-up if no response, then move focus to other opportunities
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Follow-up Email Template</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      &quot;Hi [Recruiter Name], I wanted to follow up on my application for the Software Engineering Intern position submitted on [date]. I remain very excited about the opportunity to contribute to [specific company project/team]. Please let me know if you need any additional information. Best regards, [Your name]&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 Ready to Apply Strategically?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You now have the tools to craft compelling applications that stand out from the crowd!
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse Internships →
              </Link>
              <Link 
                href="/resources" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Interview Prep →
              </Link>
            </div>
          </div>
          
          <p className="mb-4">
            🚀 Strategic applications lead to dream internships
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Back to Internships
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/resources" className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium">
              Interview Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span>Made with ❤️ for ambitious students</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
