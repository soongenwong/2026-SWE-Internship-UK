import Image from "next/image";

const internships = [
  {
    company: "PIMCO",
    programme: "2026 Summer Intern - Technology Analyst",
    openingDate: "05 Sep 25",
    applyUrl: "https://pimco.wd1.myworkdayjobs.com/en-US/pimco-careers/job/XMLNAME-2026-Summer-Intern---Technology-Analyst--Software-Engineering_R105661?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&source=Trackr"
  },
  {
    company: "Point72",
    programme: "2026 Cubist Quant Academy – Developers",
    openingDate: "05 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/point72/jobs/8153488002?gh_jid=8153488002&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "TPP",
    programme: "Summer Internship - Software Developer",
    openingDate: "04 Sep 25",
    applyUrl: "https://tpp-careers.com/roles/summer-internship-software-developer/?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Microsoft",
    programme: "Software Engineer Internship Opportunities",
    openingDate: "04 Sep 25",
    applyUrl: "https://jobs.careers.microsoft.com/global/en/share/1871538/?utm_source=Trackr&utm_campaign=UK_Technology_2026&utm_medium=tracker"
  },
  {
    company: "Amazon",
    programme: "2026 Software Dev Engineer Intern",
    openingDate: "03 Sep 25",
    applyUrl: "https://www.amazon.jobs/en/jobs/3072061/2026-software-dev-engineer-intern?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Ciena",
    programme: "Software Engineering Intern",
    openingDate: "03 Sep 25",
    applyUrl: "https://ciena.wd5.myworkdayjobs.com/en-US/Careers/job/UK--Edinburgh---19A-Canning-St/Software-Engineering-Intern_R028780?source=Trackr&Location_Country=29247e57dbaf46fb855b224e03170bc7&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Metrea",
    programme: "Intern - Software Engineer",
    openingDate: "03 Sep 25",
    applyUrl: "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=39bc5efc-a576-4a4d-83eb-32e95d4e96c8&ccId=9200591563947_2&jobId=552073&lang=en_US&source=Trackr&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Mizuho",
    programme: "IT Developer Summer Internship",
    openingDate: "02 Sep 25",
    applyUrl: "https://www.grb.uk.com/internships/mizuho-banking-it-developer-summer-internship-london-36588?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "XTX Markets",
    programme: "Software Engineering Intern - Summer 2026",
    openingDate: "02 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/xtxmarketstechnologies?keyword=intern+summer+2026&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Bank of America",
    programme: "Quantitative Data Analytics, Summer 2026 Analyst",
    openingDate: "01 Sep 25",
    applyUrl: "https://bankcampuscareers.tal.net/vx/lang-en-GB/mobile-0/brand-4/user-4698662/xf-3fa8353e9d47/candidate/so/pm/1/pl/1/opp/13242-Global-Quantitative-Data-Analytics-Summer-2026-Analyst-London/en-GB"
  },
  {
    company: "LCP",
    programme: "Technology - Summer Internship 2026",
    openingDate: "01 Sep 25",
    applyUrl: "https://careers.lcp.com/experienced-hires/search-uk-vacancies?specialism=Early+Careers&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Macquarie Group",
    programme: "2026 Summer Internship Programme",
    openingDate: "01 Sep 25",
    applyUrl: "https://recruitment.macquarie.com/en_US/careers/JobDetail?jobId=18059&source=Trackr&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Quadrature",
    programme: "Quant Developer Internship",
    openingDate: "01 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/quadraturecapital/jobs/4255974?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Tower Research Capital",
    programme: "Software Developer Intern (Summer 2026)",
    openingDate: "01 Sep 25",
    applyUrl: "https://tower-research.com/open-positions/?gh_jid=7210139&gh_src=Trackr"
  },
  {
    company: "UBS",
    programme: "2026 Summer Internship Program - GOTO Technology",
    openingDate: "01 Sep 25",
    applyUrl: "https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5131&PageType=JobDetails&jobid=330522&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "WTW",
    programme: "2026 Software Developer Internship",
    openingDate: "01 Sep 25",
    applyUrl: "https://careers.wtwco.com/jobs/search?page=1&country_codes%5B%5D=GB&dropdown_field_1_uids%5B%5D=ee9140dc7e9c34cf2e0e736345dcaec5&query=%22Software+Developer%22&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "J.P. Morgan",
    programme: "2026 Software Engineer Immersion Program - Summer Internship",
    openingDate: "31 Aug 25",
    applyUrl: "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210653529/?utm_medium=tracker&utm_source=Trackr&utm_campaign=UK_Technology_2026&iis=Trackr&sType=Trackr"
  },
  {
    company: "Morgan Stanley",
    programme: "2026 Technology Summer Analyst Program",
    openingDate: "31 Aug 25",
    applyUrl: "https://morganstanley.tal.net/vx/lang-en-GB/mobile-0/brand-2/user-5764832/xf-27ae6f5d3480/candidate/so/pm/1/pl/1/opp/19702-2026-Technology-Summer-Analyst-Programme-Application-Development-Glasgow/en-GB?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "IMC Trading",
    programme: "Software Engineer Intern (2026)",
    openingDate: "28 Aug 25",
    applyUrl: "https://job-boards.eu.greenhouse.io/imc?departments%5B%5D=4023812101&offices%5B%5D=4012436101&keyword=intern&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Marshall Wace",
    programme: "Technology Intern - 2026",
    openingDate: "28 Aug 25",
    applyUrl: "https://job-boards.greenhouse.io/mwinternshipprogram/jobs/7998360002?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Aquatic Capital Management",
    programme: "Software Engineer, Intern (Summer 2026)",
    openingDate: "26 Aug 25",
    applyUrl: "https://job-boards.greenhouse.io/aquaticcapitalmanagement/jobs/7990895002?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Optiver",
    programme: "Software Engineer Internship (2026 Start)",
    openingDate: "26 Aug 25",
    applyUrl: "https://optiver.com/working-at-optiver/career-opportunities/?numberposts=10&paged=1&department=technology&level=internship&office=amsterdam&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Susquehanna International Group",
    programme: "Software Development Internship: Summer 2026",
    openingDate: "26 Aug 25",
    applyUrl: "https://careers.sig.com/job/9727/Software-Development-Internship-Summer-2026?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Talos",
    programme: "Client Service Intern",
    openingDate: "22 Aug 25",
    applyUrl: "https://jobs.ashbyhq.com/Talos-Trading/e689b2bd-c99a-4d87-a9ac-bf9aefc35513?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Goldman Sachs",
    programme: "2026 Summer Analyst Programme",
    openingDate: "15 Aug 25",
    applyUrl: "https://higher.gs.com/campus?DIVISION=Engineering+Division&EXPERIENCE_LEVEL=Summer+Analyst&LOCATION=London%7CBirmingham&page=1&sort=RELEVANCE&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Millennium Management",
    programme: "Software Engineering Intern",
    openingDate: "14 Aug 25",
    applyUrl: "https://campusjobs.mlp.com/careers/job/755944532745?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "BNP Paribas",
    programme: "2026 Summer Internship - Technology",
    openingDate: "12 Aug 25",
    applyUrl: "https://bwelcome.hr.bnpparibas/en_US/externalcareers/JobDetails?jobId=60554&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&source=Trackr"
  },
  {
    company: "Citadel",
    programme: "Software Engineer - Intern (Europe)",
    openingDate: "12 Aug 25",
    applyUrl: "https://www.citadel.com/careers/details/software-engineer-intern-europe/?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Balyasny Asset Management",
    programme: "Software Engineering (Summer Internship)",
    openingDate: "06 Aug 25",
    applyUrl: "https://bambusdev.my.site.com/s/details?jobReq=Software-Engineering--Summer-Internship-_REQ7175&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&source=Trackr"
  },
  {
    company: "Cogna",
    programme: "Software Engineer Intern (2026 Cohort)",
    openingDate: "06 Aug 25",
    applyUrl: "https://apply.workable.com/cogna/j/BE83D6BC7F/?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Confluent",
    programme: "2026 Software Engineering Intern Opportunity",
    openingDate: "06 Aug 25",
    applyUrl: "https://careers.confluent.io/jobs/job/095d92fe-7534-4f49-a846-b63ca229731b?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Jane Street",
    programme: "Software Engineer Internship",
    openingDate: "04 Aug 25",
    applyUrl: "https://www.janestreet.com/join-jane-street/open-roles/?type=students-and-new-grads&location=london&department=technology&duration=june-september&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "IMC Trading",
    programme: "2026 Summer Internship - Software Development",
    openingDate: "02 Aug 25",
    applyUrl: "https://job-boards.greenhouse.io/dvtrading/jobs/4592920005?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Jump Trading",
    programme: "Campus Software Engineer (Intern)",
    openingDate: "02 Aug 25",
    applyUrl: "https://www.jumptrading.com/careers/6946008/?gh_jid=6946008&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Palantir",
    programme: "Software Engineer, Internship",
    openingDate: "01 Aug 25",
    applyUrl: "https://jobs.lever.co/palantir?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&lever-source=Trackr&commitment=Internship&location=London%2C+United+Kingdom"
  },
  {
    company: "Xantium",
    programme: "Quantitative Developer Intern",
    openingDate: "30 Jul 25",
    applyUrl: "https://job-boards.greenhouse.io/xantium/jobs/7094436?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "The Trade Desk",
    programme: "2026 Summer Intern - Software Engineer",
    openingDate: "29 Jul 25",
    applyUrl: "https://careers.thetradedesk.com/jobs/4784540007/2026-london-software-engineering-internship?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "Castleton Commodities International",
    programme: "Software Engineer Internship (Summer 2026)",
    openingDate: "21 Jul 25",
    applyUrl: "https://osv-cci.wd1.myworkdayjobs.com/en-US/CCICareers/jobs?q=%22internship+%28summer+2026%29%22&locations=f2015cfc02f00191c190c981a701650e&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&source=Trackr"
  },
  {
    company: "GSA Capital",
    programme: "Software Developer - Intern",
    openingDate: "15 Jul 25",
    applyUrl: "https://boards.greenhouse.io/embed/job_app?for=gsacapital&token=8016008002&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "DRW",
    programme: "Software Developer Intern",
    openingDate: "14 Jul 25",
    applyUrl: "https://job-boards.greenhouse.io/drweng/jobs/6987115?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&gh_src=Trackr"
  },
  {
    company: "BlackRock",
    programme: "2026 Summer Internship Programme",
    openingDate: "01 Jul 25",
    applyUrl: "https://blackrock.tal.net/vx/lang-en-GB/mobile-0/brand-3/user-1735377/xf-d85d6b29451d/candidate/so/pm/1/pl/1/opp/9617-2026-Summer-Internship-Programme-EMEA/en-GB?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "GIC",
    programme: "GIC Internship Programme 2026",
    openingDate: "19 Jun 25",
    applyUrl: "https://impress.ai/html-widget/chat-widget/cc09feb5-c9d7-4465-9575-ac4e9b534402/?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Revolut",
    programme: "Rev-celerator Internship Programme 2026",
    openingDate: "15 Jun 25",
    applyUrl: "https://www.revolut.com/careers/?text=rev-celerator+internship+programme&team=Engineering&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Bending Spoons",
    programme: "Software Engineer, Intern",
    openingDate: "02 May 25",
    applyUrl: "https://jobs.bendingspoons.com/?contractType=internship&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            2026 Software Engineering
            <span className="block text-blue-600 dark:text-blue-400">Internships UK</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive list of Software Engineering jobs for university students in the UK in search of{" "}
            <strong>internships</strong> and <strong>placement</strong> positions. The positions are updated daily.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              ✨ Updated Daily
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
              🇬🇧 UK Focused
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
              💼 {internships.length} Opportunities
            </span>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{internships.length}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Opportunities</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {new Set(internships.map(i => i.company)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Companies</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2026</div>
            <div className="text-gray-600 dark:text-gray-300">Summer Programs</div>
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Internships</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Programme Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Opening Date
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Apply
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                {internships.map((internship, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {internship.company}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 dark:text-white max-w-md">
                        {internship.programme}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700 dark:text-gray-300">
                        {internship.openingDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <a
                        href={internship.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Apply
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">
            ⭐ Star the repository for internship opportunities! | 📅 Last updated: September 2025
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://github.com/soongenwong/2026-SWE-Internship-UK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              GitHub Repository
            </a>
            <span className="text-gray-400">•</span>
            <span>Made with ❤️ for students</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
