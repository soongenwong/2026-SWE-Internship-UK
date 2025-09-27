import Link from "next/link";

// FAANG+ Companies - Premium tech companies
const faangPlusCompanies = [
  {
    company: "Meta",
    programme: "Software Engineer Intern",
    openingDate: "17 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Google",
    programme: "Software Engineering Intern, 2026",
    openingDate: "16 Sep 25",
    applyUrl: "#"
  },
  {
    company: "TikTok",
    programme: "Data Scientist Intern",
    openingDate: "11 Sep 25",
    applyUrl: "https://lifeattiktok.com/search/7535469099951147272?spread=5MWH5CQ"
  },
  {
    company: "Perplexity AI",
    programme: "UK Internship Program",
    openingDate: "11 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/perplexityai/jobs/4735785007"
  },
  {
    company: "Figma",
    programme: "Software Engineer Intern",
    openingDate: "09 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/figma/jobs/5621177004?gh_jid=5621177004&gh_src=28109e334us&source=LinkedIn"
  },
  {
    company: "Meta",
    programme: "Security Engineer Intern",
    openingDate: "05 Sep 25",
    applyUrl: "https://www.metacareers.com/jobs/770613715578381?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
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
    company: "Optiver",
    programme: "Software Engineer Internship (2026 Start)",
    openingDate: "26 Aug 25",
    applyUrl: "https://optiver.com/working-at-optiver/career-opportunities/?numberposts=10&paged=1&department=technology&level=internship&office=amsterdam&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "Citadel",
    programme: "Software Engineer - Intern (Europe)",
    openingDate: "12 Aug 25",
    applyUrl: "https://www.citadel.com/careers/details/software-engineer-intern-europe/?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
  {
    company: "BNP Paribas",
    programme: "2026 Summer Internship - Technology",
    openingDate: "12 Aug 25",
    applyUrl: "https://bwelcome.hr.bnpparibas/en_US/externalcareers/JobDetails?jobId=60554&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026&source=Trackr"
  },
  {
    company: "Jane Street",
    programme: "Software Engineer Internship",
    openingDate: "04 Aug 25",
    applyUrl: "https://www.janestreet.com/join-jane-street/open-roles/?type=students-and-new-grads&location=london&department=technology&duration=june-september&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
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
    company: "Revolut",
    programme: "Rev-celerator Internship Programme 2026",
    openingDate: "15 Jun 25",
    applyUrl: "https://www.revolut.com/careers/?text=rev-celerator+internship+programme&team=Engineering&utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  }
];

const internships = [
  {
    company: "Meta",
    programme: "Software Engineer Intern",
    openingDate: "17 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Google",
    programme: "Software Engineering Intern, 2026",
    openingDate: "16 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Epic Games",
    programme: "Gameplay Programmer Intern",
    openingDate: "27 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Blackstone",
    programme: "2026 Software Developer Summer Analyst",
    openingDate: "26 Sep 25",
    applyUrl: "#"
  },
  {
    company: "MathWorks",
    programme: "Software Development Internship",
    openingDate: "26 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Fleek",
    programme: "Software Engineering Intern (London-based)",
    openingDate: "26 Sep 25",
    applyUrl: "#"
  },
  {
    company: "ITP",
    programme: "Consultant Software Engineer Summer Internship",
    openingDate: "26 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Qube RT",
    programme: "2026 Internship - Software Engineering",
    openingDate: "25 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Symphony",
    programme: "Intern, Software Development",
    openingDate: "25 Sep 25",
    applyUrl: "#"
  },
  {
    company: "MBDA",
    programme: "Software Engineering - Summer Placement 2026",
    openingDate: "25 Sep 25",
    applyUrl: "#"
  },
  {
    company: "NatWest Markets",
    programme: "Engineering - Internship",
    openingDate: "24 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Point72",
    programme: "2026 Summer Internship – Data Engineer, Long/Short Equities",
    openingDate: "24 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Tesco",
    programme: "Technology Internship",
    openingDate: "23 Sep 25",
    applyUrl: "#"
  },
  {
    company: "AMD",
    programme: "Summer 2026 Software Engineer Intern",
    openingDate: "23 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Deloitte",
    programme: "Summer Vacation Scheme",
    openingDate: "22 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Arm",
    programme: "Software Intern",
    openingDate: "22 Sep 25",
    applyUrl: "#"
  },
  {
    company: "Meta",
    programme: "Product Security Engineer Intern",
    openingDate: "19 Sep 25",
    applyUrl: "https://www.metacareers.com/jobs/1286018266665816/?rx_campaign=Linkedin1&rx_ch=connector&rx_group=126320&rx_id=0639ea40-94b7-11f0-bcc9-4754895b2413&rx_job=a1KDp00000E2e1XMAR&rx_medium=post&rx_r=none&rx_source=Linkedin&rx_ts=20250919T001202Z&rx_vp=slots&utm_campaign=Job%2Bboard&utm_medium=jobs&utm_source=LIpaid&rx_viewer=7aaee54f85f111f0ac9671131ee867a522515d0504ac49f1bce7a1805d9c70e3"
  },
  {
    company: "IBM",
    programme: "Software Engineer Intern",
    openingDate: "19 Sep 25",
    applyUrl: "https://ibmglobal.avature.net/en_US/careers/JobDetail?jobId=59704&source=SN_LinkedIn"
  },
  {
    company: "Millennium",
    programme: "Software Engineer Intern",
    openingDate: "18 Sep 25",
    applyUrl: "https://campusjobs.mlp.com/careers/job/755944532745?microsite=campus-site"
  },
  {
    company: "Monzo Bank",
    programme: "Associate Software Engineer - Intern",
    openingDate: "17 Sep 25",
    applyUrl: "https://boards.greenhouse.io/embed/job_app?token=7171396&gh_src=8114893a1us"
  },
  {
    company: "Man Group",
    programme: "Summer Intern Quant Talent Programme",
    openingDate: "16 Sep 25",
    applyUrl: "https://www.efinancialcareers.co.uk/jobs-United_Kingdom-London-2026_AHL_Summer_Intern_Quant_Talent_Programme.id23188457?utm_campaign=JS_UK_ALLJOBS&utm_medium=PD_AG_LINKEDIN&utm_source=EMEA_UK_ENG"
  },
  {
    company: "Redis",
    programme: "AI Research Internship",
    openingDate: "16 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/redis/jobs/5547597004?gh_src=99b6bb294us"
  },
  {
    company: "BAE Systems",
    programme: "Summer Internship - Software Engineer",
    openingDate: "16 Sep 25",
    applyUrl: "https://jobsearch.baesystems.com/job/summer-internship-software-engineer-122024?src=JB-13240"
  },
  {
    company: "ByteDance",
    programme: "Solution Architect Project Intern (BytePlus)",
    openingDate: "16 Sep 25",
    applyUrl: "https://joinbytedance.com/search/7543555717114906898"
  },
  {
    company: "Incident.io",
    programme: "Product Engineer Summer Internship",
    openingDate: "16 Sep 25",
    applyUrl: "https://incident.io/careers?ashby_jid=3abca7c8-3660-4f08-8bdf-a00d0a8dd40b&mPMlzoZzj4=LinkedIn"
  },
  {
    company: "Netcraft",
    programme: "Software Engineer - Student Application",
    openingDate: "13 Sep 25",
    applyUrl: "https://www.adzuna.co.uk/jobs/details/5396111820?v=740681173CA4CFE58E70BAB7F216482DFE12FDA5&frd=7bd788888b7daa30da93a019eafb9033&ccd=3e94757dad38353f6cf5afa7d575ccfd&r=20220673&utm_source=linkedin3&utm_medium=organic&chnlid=1936&title=Software%20Engineer%20-%20Student%20Application&a=e"
  },
  {
    company: "LSEG",
    programme: "Engineering Summer Internship Programme (2026)",
    openingDate: "13 Sep 25",
    applyUrl: "https://lseg.wd3.myworkdayjobs.com/Graduate_Careers/job/London-United-Kingdom/Engineering-Summer-Internship-Programme--2026-_R0111538-1?source=Linkedin"
  },
  {
    company: "Perplexity AI",
    programme: "UK Internship Program",
    openingDate: "11 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/perplexityai/jobs/4735785007"
  },
  {
    company: "TikTok",
    programme: "Data Scientist Intern",
    openingDate: "11 Sep 25",
    applyUrl: "https://lifeattiktok.com/search/7535469099951147272?spread=5MWH5CQ"
  },
  {
    company: "Cohere",
    programme: "Software Engineer Intern",
    openingDate: "11 Sep 25",
    applyUrl: "https://jobs.ashbyhq.com/cohere/1bc2c535-2f42-454e-aebe-9c018575ce7b/application?utm_source=jKNDxYPz51"
  },
  {
    company: "Boston Consulting Group",
    programme: "BCG X AI Engineer Internship",
    openingDate: "11 Sep 25",
    applyUrl: "https://careers.bcg.com/global/en/job/BCG1US52453EXTERNALENGLOBAL/BCG-X-AI-Engineer-Internship-United-Kingdom?Source+=LinkedIn+Job+Board"
  },
  {
    company: "G-Research",
    programme: "Software Engineering Intern",
    openingDate: "10 Sep 25",
    applyUrl: "https://gresearch.wd103.myworkdayjobs.com/G-Research/job/London-UK/Software-Engineering-Internship_R3264/apply?source=linkedin"
  },
  {
    company: "Lunar Energy",
    programme: "Software Engineer Intern",
    openingDate: "09 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/lunarenergy/jobs/5642163004?gh_src=ytoyiqa84us"
  },
  {
    company: "Figma",
    programme: "Software Engineer Intern",
    openingDate: "09 Sep 25",
    applyUrl: "https://job-boards.greenhouse.io/figma/jobs/5621177004?gh_jid=5621177004&gh_src=28109e334us&source=LinkedIn"
  },
  {
    company: "Meta",
    programme: "Security Engineer Intern",
    openingDate: "05 Sep 25",
    applyUrl: "https://www.metacareers.com/jobs/770613715578381?utm_source=Trackr&utm_medium=tracker&utm_campaign=UK_Technology_2026"
  },
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            2026 SWE Internships
            <span className="block text-blue-600 dark:text-blue-400 text-4xl md:text-6xl mt-2">UK</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Find your next software engineering internship in the UK. 
            <span className="block mt-2 font-medium text-gray-800 dark:text-gray-200">
              {internships.length} opportunities • Updated daily
            </span>
          </p>
          
          {/* Simple Resource Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/application-tips"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Application Tips
            </Link>
            <Link 
              href="/leetcode-patterns"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              LeetCode Patterns
            </Link>
            <Link 
              href="/resources"
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Resources
            </Link>
          </div>
        </header>

        {/* FAANG+ Companies Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Top Companies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Premium opportunities at leading tech companies
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-amber-200 dark:border-gray-600">
            <div className="grid gap-4">
              {faangPlusCompanies.map((internship, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {internship.company}
                        </h3>
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-xs font-medium rounded-full">
                          Top Tier
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {internship.programme}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Opening: {internship.openingDate}
                      </p>
                    </div>
                    <div>
                      <a
                        href={internship.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Internships */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              All Internships
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Complete list of software engineering opportunities
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid gap-1">
              {internships.map((internship, index) => (
                <div 
                  key={index} 
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {internship.company}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {internship.programme}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {internship.openingDate}
                      </p>
                    </div>
                    <div>
                      <a
                        href={internship.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a 
              href="https://github.com/soongenwong/2026-SWE-Internship-UK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Star on GitHub
            </a>
            <span className="text-gray-400">•</span>
            <span>Updated Daily</span>
            <span className="text-gray-400">•</span>
            <span>Made for Students</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
