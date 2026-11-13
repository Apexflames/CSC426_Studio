window.STUDY = {
  "modules": [
    {
      "id": "intro",
      "title": "Introduction to Software Engineering",
      "subtitle": "Core concepts, origins, definitions and actors"
    },
    {
      "id": "elicitation",
      "title": "Requirement Elicitation",
      "subtitle": "Discover what stakeholders actually need"
    },
    {
      "id": "analysis",
      "title": "Requirement Analysis",
      "subtitle": "Turn raw needs into clear specifications"
    },
    {
      "id": "feasibility",
      "title": "Feasibility Study",
      "subtitle": "Should the proposed system be built?"
    },
    {
      "id": "sdlc",
      "title": "Development Processes & SDLC",
      "subtitle": "Models, stages and named authors"
    },
    {
      "id": "implementation",
      "title": "System Development & Implementation",
      "subtitle": "Build, deploy, migrate, convert and review"
    },
    {
      "id": "testing",
      "title": "Software Testing",
      "subtitle": "Verify, validate and test software systematically"
    }
  ],
  "lessons": [
    {
      "id": "l01",
      "module": "intro",
      "title": "Meaning of Software Engineering",
      "academic": "Software Engineering is a field that deals with analysing, developing, testing, deploying, maintaining and management of high quality software.",
      "simple": "It is the disciplined way to plan, build, test, release and support software. Coding is only one activity.",
      "example": "A university registration portal is not finished when a developer writes a login screen. The team must gather requirements, design secure records, test payment flow, deploy, train users and fix defects.",
      "keys": [
        "Analysis discovers the problem.",
        "Design decides the structure.",
        "Development builds.",
        "Testing checks.",
        "Deployment releases.",
        "Maintenance keeps it useful."
      ],
      "memory": "ADTDMM: Analyse, Design, Test, Deploy, Maintain, Manage. Explain each as part of running a student portal.",
      "visual": "cycle",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "What makes software engineering broader than programming?",
        "choices": [
          "It is only the act of writing code",
          "It avoids testing and design",
          "It concerns only computer hardware",
          "It covers the entire software lifecycle"
        ],
        "answer": 3,
        "explanation": "Software engineering manages quality from needs through maintenance."
      }
    },
    {
      "id": "l02",
      "module": "intro",
      "title": "Pfleeger (1987): S.O.F.T.W.A.R.E.",
      "academic": "Pfleeger (1987), as presented in the CSC426 lecture notes, defines software engineering as the strategy for producing quality software. The qualities are Scalability, Operability, Flexibility, Testability, Warranty, Availability, Reuseability, and Extensibility.",
      "simple": "Think of eight qualities a market-ready system should have: it must grow, operate, adapt, be testable, be supported, be available, be reusable and be extendable.",
      "example": "An AAUA portal should handle more students (Scalability), stay online during registration (Availability), and allow a new payment provider later (Extensibility).",
      "keys": [
        "S = Scalability",
        "O = Operability",
        "F = Flexibility",
        "T = Testability",
        "W = Warranty",
        "A = Availability",
        "R = Reuseability (spelling in notes)",
        "E = Extensibility"
      ],
      "memory": "Write SOFTWARE vertically and expand each letter without looking. The 1987 attribution is the version in your lecture guide.",
      "visual": "cards",
      "author": "Pfleeger | 1987",
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "In the lecturer's S.O.F.T.W.A.R.E. mnemonic, A stands for what?",
        "choices": [
          "Accuracy",
          "Automation",
          "Availability",
          "Accessibility"
        ],
        "answer": 2,
        "explanation": "A means Availability: high uptime and low downtime."
      }
    },
    {
      "id": "l03",
      "module": "intro",
      "title": "Philips (2007) and IEEE",
      "academic": "According to the CSC426 lecture notes, Philips (2007) defines Software Engineering as a method of producing good and large software while stressing software quality. IEEE describes software engineering as a systematic, disciplined and technical approach to developing and deploying quality software.",
      "simple": "Philips highlights building good, large software. IEEE highlights using an organised and disciplined engineering process.",
      "example": "A bank cannot responsibly develop its banking application through random changes; it needs defined processes, reviews, standards, testing and reliable delivery.",
      "keys": [
        "Philips (2007): good and large quality software.",
        "IEEE: systematic, disciplined, technical approach.",
        "Pfleeger (1987): eight quality attributes."
      ],
      "memory": "Philips = Product scale/quality; IEEE = Engineering discipline; Pfleeger = eight SOFTWARE qualities. Memorise author + clue + year.",
      "visual": "compare",
      "author": "Philips | 2007; IEEE | no year supplied",
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "Which body is associated in the guide with a systematic, disciplined and technical approach?",
        "choices": [
          "NATO",
          "IEEE",
          "Ishikawa",
          "Philips"
        ],
        "answer": 1,
        "explanation": "The guide attributes the systematic, disciplined and technical framing to IEEE."
      }
    },
    {
      "id": "l04",
      "module": "intro",
      "title": "1968 NATO meeting and the Software Crisis",
      "academic": "The CSC426 notes connect the emergence of software engineering to a NATO conference in Germany in 1968 and to the software crisis: uncontrolled costs, late delivery, software failures, weak development practices, deployment limitations, and maintenance difficulties.",
      "simple": "As software became larger, projects cost too much, finished late and broke. The industry needed professional methods.",
      "example": "Imagine a nationwide examination portal produced with no deadline management, no shared standards, poor testing and no maintenance plan: results may fail during peak usage.",
      "keys": [
        "Software cost",
        "Delivery time",
        "Software failure",
        "Development methods",
        "Deployment/platform limitations",
        "Software maintenance"
      ],
      "memory": "1968 -> NATO -> Crisis. Remember the six complaints as Cost, Time, Failure, Method, Platform, Maintenance.",
      "visual": "timeline",
      "author": "NATO | 1968",
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "Lecture note context: the historical detail about only Waterfall existing in 1968 is a simplified course claim, not a universally accepted history of all development methods.",
      "check": {
        "prompt": "What was a main concern of the 1968 software crisis?",
        "choices": [
          "Cost overruns and unreliable late software",
          "A shortage of web browsers",
          "The release of Android",
          "The invention of cloud computing"
        ],
        "answer": 0,
        "explanation": "The crisis concerned reliability, cost, delivery and how projects were engineered."
      }
    },
    {
      "id": "l05",
      "module": "intro",
      "title": "Why learn Software Engineering?",
      "academic": "Software engineering studies disciplined methods for software architecture, clean coding practice, software quality measurement, security, version control, testing, delivery and maintenance.",
      "simple": "It teaches teams how to make software dependable rather than merely functional today.",
      "example": "When several developers change a payment module, Git prevents uncontrolled overwrites, code reviews spot errors and tests catch regressions.",
      "keys": [
        "Clean coding methodology",
        "Software architecture",
        "Software quality and testing",
        "Security",
        "Version control",
        "Team collaboration and maintenance"
      ],
      "memory": "Quality is not only “it works on my laptop”. Ask: Is it secure? Can it scale? Can others maintain it?",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "Which is NOT a reason to study Software Engineering?",
        "choices": [
          "To learn architecture",
          "To measure quality",
          "To understand version control",
          "To eliminate the need for all testing"
        ],
        "answer": 3,
        "explanation": "Engineering adds testing rather than eliminating it."
      }
    },
    {
      "id": "l06",
      "module": "intro",
      "title": "System and Application Software",
      "academic": "System software manages computer resources and provides a platform for other programs. Application software is designed to help end users perform particular tasks. The lecture classifies application software as generic, bespoke, COTS, embedded, web-based and mobile.",
      "simple": "System software runs the machine. Application software helps users do work.",
      "example": "Windows is system software. A registration portal is web-based application software. An ATM controller is embedded software.",
      "keys": [
        "Generic: mass-market software, e.g. office suite.",
        "Bespoke: built for one client or organisation.",
        "COTS: ready-made commercial software for a domain.",
        "Embedded: inside hardware.",
        "Web-based: browser.",
        "Mobile: phone app."
      ],
      "memory": "Software types: G B C E W M. Recall one specific example for each.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "A custom result portal built only for AAUA is best described as?",
        "choices": [
          "Generic office software",
          "System software",
          "Bespoke software",
          "Firmware in a washing machine"
        ],
        "answer": 2,
        "explanation": "Bespoke means made for a particular client and their requirements."
      }
    },
    {
      "id": "l07",
      "module": "intro",
      "title": "Software versus Software Product",
      "academic": "The CSC426 notes distinguish software, a program that directs computer operations, from a software product: a developed, debugged and delivered software package accompanied by suitable documentation and commercial or operational arrangements such as licensing, pricing, versioning, support and maintenance.",
      "simple": "A program can work privately; a product can be used, installed, supported and distributed by others.",
      "example": "A script that calculates grades is software. A school-ready grading service with a manual, user onboarding, version releases and support is a software product.",
      "keys": [
        "Software: functional program.",
        "Software product: program plus documentation and readiness for users.",
        "Product considerations: licensing, pricing, versioning, delivery, support, maintenance."
      ],
      "memory": "PRODUCT = CODE + PACKAGE + PEOPLE SUPPORT.",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "Which addition is typical when software becomes a software product?",
        "choices": [
          "Removal of user guides",
          "Documentation, licensing and support",
          "No maintenance plan",
          "Only raw source code"
        ],
        "answer": 1,
        "explanation": "Productisation requires a usable deliverable and lifecycle support."
      }
    },
    {
      "id": "l08",
      "module": "intro",
      "title": "Software Development Flow and Actors",
      "academic": "The lecture describes a Software Development Flow from requirement definition and analysis through system/software design, program design, implementation, unit testing, integration testing, system testing, delivery and maintenance. Roles include system analyst, system designer, system programmer, system tester and system trainer.",
      "simple": "An entire project is passed through specialised people and activities, with feedback when defects are found.",
      "example": "For a hospital queue app: analyst interviews nurses; designer plans interfaces; programmer builds; tester checks; trainer teaches reception staff.",
      "keys": [
        "Analyst: discover and specify needs.",
        "Designer: plan system and interfaces.",
        "Programmer: code and help unit test.",
        "Tester: test units, integration, system.",
        "Trainer: help delivery and user adoption.",
        "Flow: requirements -> design -> code -> test -> deliver -> maintain."
      ],
      "memory": "Five PEOPLE: Analyst, Designer, Programmer, Tester, Trainer. Do not confuse the five actors with stages of the flow.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 1",
      "extra": "",
      "check": {
        "prompt": "Who primarily specifies the nature of the required software?",
        "choices": [
          "System Analyst",
          "System Trainer",
          "System Tester",
          "Network Cable Installer"
        ],
        "answer": 0,
        "explanation": "The system analyst studies and specifies user and system requirements."
      }
    },
    {
      "id": "l09",
      "module": "elicitation",
      "title": "Requirement Elicitation: complete definition",
      "academic": "Requirement elicitation is the process of identifying, discovering, extracting, clarifying and understanding stakeholders’ needs and expectations for a proposed software system, helping analysts understand business problems before proposing solutions. Requirements describe what the solution must do; they do not themselves solve the problem.",
      "simple": "Before building, ask stakeholders what hurts, what they do now, and what success would look like.",
      "example": "Before building a bus-tracking app, interview students, drivers and school management. “Students cannot predict shuttle arrival” is a need, not yet a feature design.",
      "keys": [
        "Stakeholder = affected person or group.",
        "Elicitation comes before clear requirements can be formalised.",
        "Early requirements may be in natural language, sketches or user stories."
      ],
      "memory": "ELICIT = EXTRACT needs, not guess features. Tailor measures before cutting.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "What is the main purpose of requirement elicitation?",
        "choices": [
          "Deploy the completed app",
          "Write the database schema first",
          "Conduct post-launch maintenance",
          "Discover and clarify stakeholder needs"
        ],
        "answer": 3,
        "explanation": "Elicitation finds stakeholder needs and the business problem."
      }
    },
    {
      "id": "l10",
      "module": "elicitation",
      "title": "Problem Analysis and Information Gathering",
      "academic": "The two elicitation pathways in the CSC426 guide are Problem Analysis, identifying and understanding the problem and its constraints, and Information Gathering (Fact-Finding), formally collecting information through research, interviews, questionnaires and other techniques.",
      "simple": "First understand what is wrong, then collect evidence about it.",
      "example": "Late exam results: analyse the potential causes, then gather evidence from lecturers, registry staff and ICT by interview and observation.",
      "keys": [
        "Problem analysis: problem, causes, constraints.",
        "Fact-finding: collect evidence from people and documents.",
        "Use both; neither should be based on guesses."
      ],
      "memory": "Problem = WHY? Fact-finding = HOW DO WE KNOW?",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Interviewing registry staff to collect details belongs primarily to?",
        "choices": [
          "System installation",
          "Regression testing",
          "Information gathering",
          "Program coding"
        ],
        "answer": 2,
        "explanation": "An interview is a fact-finding method."
      }
    },
    {
      "id": "l11",
      "module": "elicitation",
      "title": "Ishikawa / Fishbone Diagram",
      "academic": "The Ishikawa diagram, also called the Cause-and-Effect Diagram, is a graphical tool used to identify, explore and represent a problem, its possible causes and its effects. It is named after Kaoru Ishikawa, a Japanese quality-management pioneer.",
      "simple": "Draw a fish: the head labels the problem, the angled bones classify possible causes. Investigate each cause before claiming it is real.",
      "example": "Problem: delayed release of school results. Cause bones: Lecturer delay; Student registration errors; ICT downtime; Registry approval bottleneck.",
      "keys": [
        "Fish head: the problem/effect being explained.",
        "Fish bones: categories of potential causes.",
        "Use it during problem analysis.",
        "Lecturer-specific instruction: use an even number of cause branches (4, 6, 8); this is not a universal rule of fishbone diagrams."
      ],
      "memory": "Ishikawa = fishbone. Think KAOru = CAUse; for exam draw FOUR bones if you need a simple figure.",
      "visual": "fish",
      "author": "Kaoru Ishikawa | no year supplied",
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Who is associated with the cause-and-effect Fishbone diagram?",
        "choices": [
          "Roger Pressman",
          "Kaoru Ishikawa",
          "Pfleeger",
          "Philips"
        ],
        "answer": 1,
        "explanation": "The diagram is named for Kaoru Ishikawa."
      }
    },
    {
      "id": "l12",
      "module": "elicitation",
      "title": "Sampling Existing Documents",
      "academic": "Document sampling is a fact-finding technique in which an analyst examines existing manual or computerised records to understand an organisation’s processes, data, rules, decisions and information flows.",
      "simple": "You learn what an organisation already records, rather than depending entirely on verbal answers.",
      "example": "Examine old course registration forms, students’ payment receipts, organisation charts, reports, database dictionaries and existing data-flow diagrams.",
      "keys": [
        "Manual records: forms, files, procedures, policy manuals.",
        "Computerised records: database samples, data dictionaries, diagrams, interfaces.",
        "Cross-check documents with staff because documents may be outdated."
      ],
      "memory": "SAMPLING = inspect evidence already written.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Which is an example of document sampling?",
        "choices": [
          "Reviewing existing registration forms",
          "Interviewing a driver live",
          "Observing a queue without records",
          "Installing an application"
        ],
        "answer": 0,
        "explanation": "Inspecting existing documents reveals workflows and data fields."
      }
    },
    {
      "id": "l13",
      "module": "elicitation",
      "title": "Site Visitation",
      "academic": "Site visitation is a requirement fact-finding approach that learns from an operating environment or comparable existing solution. The CSC426 notes distinguish organisational visits, web visits and book visits or literature review.",
      "simple": "Visit an organisation, explore another organisation’s website, or study books/journals about similar systems.",
      "example": "For a medical queue application: visit a clinic, inspect a hospital booking website, and read research on triage workflows.",
      "keys": [
        "Organisational: interact directly at a site.",
        "Web: examine related websites or services.",
        "Book/literature: learn from journals and books."
      ],
      "memory": "Physical, Web, Books = three doors into an existing problem.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "A review of journals on hospital workflows is which type of site visit in the notes?",
        "choices": [
          "Direct conversion",
          "Load testing",
          "System installation",
          "Book visit / literature review"
        ],
        "answer": 3,
        "explanation": "The note categorises literature review as book visitation."
      }
    },
    {
      "id": "l14",
      "module": "elicitation",
      "title": "Observation",
      "academic": "Observation, referred to in the CSC426 notes as the “eye witness” technique, is a fact-finding method in which an analyst watches employees performing their actual work to determine workflows, decisions and problems.",
      "simple": "Watch the work being done instead of relying only on what staff say happens.",
      "example": "At an outpatient clinic, watch where cards move, when patients wait and how a nurse prioritises urgent cases.",
      "keys": [
        "Seek permission and define Why, Who, What, Where, When and How.",
        "Observe diligently without disrupting work.",
        "Record and verify notes afterwards.",
        "Advantages: direct evidence, inexpensive, cross-checks interviews.",
        "Disadvantages: behaviour can change while watched; scheduling and interruption risks."
      ],
      "memory": "Observe = SEE. Remember the Hawthorne-like effect: people may behave differently when watched.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Which is a limitation of observation?",
        "choices": [
          "It requires no access to work activities",
          "It always reveals every hidden requirement",
          "Workers may change behaviour when watched",
          "It is identical to documentation review"
        ],
        "answer": 2,
        "explanation": "Observation can influence how people act."
      }
    },
    {
      "id": "l15",
      "module": "elicitation",
      "title": "Questionnaires",
      "academic": "A questionnaire is a collection of pre-prepared written questions administered to respondents for gathering information. An open-ended or free-format questionnaire allows responses in the respondent’s own words; a close-ended or fixed-format questionnaire provides predefined options. Questionnaires may also be structured or unstructured.",
      "simple": "Ask many people at once. Open questions invite explanation; closed questions make responses easy to count.",
      "example": "Open: “Why do students miss campus shuttles?” Closed: “How often do you wait longer than 30 minutes? Never / Sometimes / Often.”",
      "keys": [
        "Open-ended: depth and freedom, difficult to tabulate.",
        "Close-ended: easy comparisons and statistics, less flexible.",
        "Structured: planned questions.",
        "Unstructured: general goal without fixed items.",
        "Good for a large group but little chance to clarify unclear replies."
      ],
      "memory": "OPEN = essay. CLOSED = select an option.",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Which questionnaire is easiest to tabulate statistically?",
        "choices": [
          "Only open-ended questions",
          "Close-ended questionnaire",
          "An unrecorded interview",
          "Unstructured observation"
        ],
        "answer": 1,
        "explanation": "Fixed options make aggregation easier."
      }
    },
    {
      "id": "l16",
      "module": "elicitation",
      "title": "Interviews",
      "academic": "An interview is an oral fact-finding method in which an analyst asks a respondent prepared or follow-up questions to obtain details on existing processes, problems and requirements.",
      "simple": "Have a conversation with people who use the system, listen to their answers and probe carefully.",
      "example": "Interview the bursary officer about why course registration must stop when tuition is unpaid; ask for permission before recording.",
      "keys": [
        "Book an appointment and prepare questions.",
        "Dress appropriately; introduce yourself and the purpose.",
        "Ask and listen, observe reactions, seek permission to record.",
        "Probe important answers; thank respondent.",
        "Review notes or recordings afterwards.",
        "Benefits: depth, feedback, flexible questions. Costs: time, travel, interviewer skill."
      ],
      "memory": "Before -> During -> After: Prepare, Introduce, Ask, Record with consent, Thank, Review.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Which feature makes interviews useful compared with rigid questionnaires?",
        "choices": [
          "Immediate follow-up and clarification",
          "They require zero time",
          "They guarantee identical responses",
          "They avoid stakeholder contact"
        ],
        "answer": 0,
        "explanation": "An interview lets analysts probe ambiguous answers."
      }
    },
    {
      "id": "l17",
      "module": "elicitation",
      "title": "Additional Elicitation Techniques",
      "academic": "Techniques in the CSC426 slides also include Joint Application Development (JAD) sessions, workshops, brainstorming, focus groups, prototyping, storyboarding, user stories and scenarios. These techniques uncover or demonstrate requirements with stakeholders.",
      "simple": "Instead of asking one person at a time, bring stakeholders together or show a model so they can react.",
      "example": "A clickable prototype of a student result portal reveals that users need a “download statement of result” function before coding the full system.",
      "keys": [
        "JAD: structured sessions with stakeholders.",
        "Brainstorming: generate many ideas.",
        "Focus group: discuss with a representative group.",
        "Prototype: early model for feedback.",
        "User story: user role + goal + benefit.",
        "Scenario/storyboard: illustrate a use case."
      ],
      "memory": "Prototype = SHOW before you BUILD.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "What technique lets stakeholders try an early mock-up of a system?",
        "choices": [
          "Direct conversion",
          "Stress testing",
          "Database migration",
          "Prototyping"
        ],
        "answer": 3,
        "explanation": "Prototypes expose misunderstandings before full development."
      }
    },
    {
      "id": "l18",
      "module": "elicitation",
      "title": "Deliverables and Challenges",
      "academic": "Outputs of elicitation include a stakeholder list; documented business, user, functional and non-functional needs; initial use cases and user stories; and business rules and constraints. Common challenges include incomplete requirements, conflicting opinions, communication barriers, changing needs, unrealistic expectations and insufficient stakeholder participation.",
      "simple": "After listening to users, you should have a useful record of their needs and the issues that could affect them.",
      "example": "Students ask for free transcript downloads; university management requires payment verification. The analyst must resolve the conflict explicitly.",
      "keys": [
        "Deliver: stakeholders, requirements, use cases, rules, constraints.",
        "Challenges: incomplete, conflicting, changing or misunderstood needs.",
        "Resolve conflicts and get stakeholder agreement."
      ],
      "memory": "Elicit -> LIST needs -> RESOLVE contradictions -> HAND OFF to analysis.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 2",
      "extra": "",
      "check": {
        "prompt": "Which is a typical elicitation deliverable?",
        "choices": [
          "Only the final executable program",
          "A production server installation",
          "A list of stakeholders and initial requirements",
          "A post-launch backup"
        ],
        "answer": 2,
        "explanation": "Elicitation provides requirements and stakeholder evidence."
      }
    },
    {
      "id": "l19",
      "module": "analysis",
      "title": "Requirement Analysis: definition",
      "academic": "Requirement analysis is the process of analysing, refining and restructuring raw requirements by thoroughly studying the application domain, understanding the problem space, identifying stakeholder needs and translating them into precise, consistent, testable and actionable specifications for development.",
      "simple": "Elicitation collects raw requests; analysis cleans up conflicts and vague statements.",
      "example": "Raw request: “Portal should be fast.” Analysed: “The student result page shall load within three seconds for 95% of requests under normal load.”",
      "keys": [
        "Refine raw statements.",
        "Remove ambiguity and inconsistencies.",
        "Prioritise and model.",
        "Produce clear specifications that can be checked."
      ],
      "memory": "ELICIT = COLLECT. ANALYSE = CLARIFY.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "Which step turns vague requirements into precise specifications?",
        "choices": [
          "System installation",
          "Requirement analysis",
          "Pilot conversion",
          "Recovery testing"
        ],
        "answer": 1,
        "explanation": "Analysis structures and clarifies gathered requirements."
      }
    },
    {
      "id": "l20",
      "module": "analysis",
      "title": "DIPM analysis process",
      "academic": "The lecturer summarises requirement analysis with DIPM: Detect inconsistency in raw requirements; Identify missing or ambiguous requirements; Prioritize requirements; and Model the requirements using diagrams or structured representations.",
      "simple": "DIPM helps you discover contradictions, fill gaps, choose what matters first and draw the system clearly.",
      "example": "A school portal asks users to “login without authentication” but also “verify password.” Detect the conflict; clarify login rules; prioritise access security; draw a login use case.",
      "keys": [
        "D: Detect inconsistency.",
        "I: Identify missing or ambiguous details.",
        "P: Prioritize.",
        "M: Model with sketches or diagrams."
      ],
      "memory": "Always expand DIPM as Detect, Identify, Prioritize, Model.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "In DIPM, P stands for?",
        "choices": [
          "Prioritize requirements",
          "Program implementation",
          "Product maintenance",
          "Performance stress"
        ],
        "answer": 0,
        "explanation": "P = Prioritize."
      }
    },
    {
      "id": "l21",
      "module": "analysis",
      "title": "Functional Requirements",
      "academic": "Functional requirements specify the services, operations, system reactions and outputs that a software system must provide to meet user needs. They define what the system must do.",
      "simple": "Functional = features and behaviour.",
      "example": "An AAUA portal shall authenticate students, verify payment and generate a registration slip. Its login form may require user TYPE: Staff or Student.",
      "keys": [
        "Services provided.",
        "System reactions to input and events.",
        "Output generation and reports.",
        "Often expressed as “the system shall ...”."
      ],
      "memory": "Functional = WHAT does it do?",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "Which is a functional requirement?",
        "choices": [
          "The portal responds in 2 seconds",
          "The application uses at most 512 MB RAM",
          "Data must be encrypted at rest",
          "Students can download course registration slips"
        ],
        "answer": 3,
        "explanation": "Downloading slips is a system function."
      }
    },
    {
      "id": "l22",
      "module": "analysis",
      "title": "Non-functional Requirements",
      "academic": "Non-functional requirements specify quality characteristics, constraints and operating conditions of a software system rather than its individual business functions. The CSC426 notes group them into product requirements, organisational requirements and external requirements.",
      "simple": "Non-functional = how well or under what restrictions the software must operate.",
      "example": "A payment portal must respond promptly, protect records, work for many concurrent students and meet applicable privacy rules.",
      "keys": [
        "Product: performance, security, usability, reliability.",
        "Organisation: environment, development standards, operating policies.",
        "External: legal, regulatory and ethical constraints.",
        "Make quality constraints measurable when possible."
      ],
      "memory": "Non-functional = HOW WELL and UNDER WHAT RULES?",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "Which belongs to a product non-functional requirement?",
        "choices": [
          "Student course registration",
          "Generating a transcript",
          "Reliability",
          "Staff password reset feature"
        ],
        "answer": 2,
        "explanation": "Reliability measures operational quality."
      }
    },
    {
      "id": "l23",
      "module": "analysis",
      "title": "Domain Requirements",
      "academic": "Domain requirements are requirements or constraints that arise from the specific field in which the system operates, often defined by domain experts and governing the features or behaviour of the software.",
      "simple": "A rule exists because of the industry, not because every app needs it.",
      "example": "For a hospital triage system, medical personnel define the urgency categories and prioritisation rules. For a university portal, academic regulations determine course unit limits.",
      "keys": [
        "Origin: domain expertise and regulations/practices.",
        "Can affect functional behaviour and constraints.",
        "Medical, finance and academic domains have different rules."
      ],
      "memory": "Domain = SPECIAL RULES of the field.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "A lecturer specifies the maximum credit load allowed by academic regulations. This is primarily a?",
        "choices": [
          "Generic graphical theme",
          "Domain requirement",
          "Software deployment step",
          "Load testing technique"
        ],
        "answer": 1,
        "explanation": "The rule is defined by the academic domain."
      }
    },
    {
      "id": "l24",
      "module": "analysis",
      "title": "Functional vs Non-functional vs Domain",
      "academic": "Functional requirements describe services and reactions; non-functional requirements define quality or operational constraints; domain requirements arise from the application area and its expert rules. These categories may overlap in real projects, so a requirement should be understood by purpose and source.",
      "simple": "Ask three questions: What does it do? How well does it work? What special rules come from this field?",
      "example": "Course registration: “students shall register” = functional. “Page responds under 3 seconds” = non-functional. “Students may register at most 24 credit units” = domain.",
      "keys": [
        "Functional = features.",
        "Non-functional = quality/constraints.",
        "Domain = field rules.",
        "Domain rules can affect functional requirements."
      ],
      "memory": "WHAT / HOW WELL / WHOSE FIELD RULE?",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 3",
      "extra": "",
      "check": {
        "prompt": "“A result portal must display grades according to approved academic regulations.” Best label?",
        "choices": [
          "Domain requirement",
          "Pure system installation",
          "User training",
          "Stress testing"
        ],
        "answer": 0,
        "explanation": "Academic regulations create a domain-specific obligation."
      }
    },
    {
      "id": "l25",
      "module": "feasibility",
      "title": "Feasibility Study: full definition",
      "academic": "A feasibility study is a systematic evaluation of a proposed software project to determine whether it is technically possible, economically worthwhile, operationally acceptable, legally compliant and capable of being completed within the available time.",
      "simple": "Before spending money, investigate whether the idea can realistically succeed.",
      "example": "Before building an app that works offline for all students, ask if the technology, budget, staff training and launch deadline can support it.",
      "keys": [
        "Conducted early in SDLC planning.",
        "Core decision: GO or NO-GO.",
        "Assesses limitations and risk before resource commitment."
      ],
      "memory": "Feasibility asks “SHOULD we build this?”; analysis asks “WHAT must we build?”",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 4",
      "extra": "",
      "check": {
        "prompt": "What decision does a feasibility study support?",
        "choices": [
          "Which line of code to edit",
          "Which CSS colour to use",
          "Which password a user chose",
          "Go or no-go"
        ],
        "answer": 3,
        "explanation": "Feasibility decides if the project is viable."
      }
    },
    {
      "id": "l26",
      "module": "feasibility",
      "title": "TELOS feasibility framework",
      "academic": "TELOS is a framework for five feasibility dimensions: Technical (technology and skill), Economic (cost-benefit), Legal (compliance), Operational (user and organisational fit) and Schedule (time required and deadlines).",
      "simple": "Technical: can we build it? Economic: can we afford it and gain value? Legal: is it allowed? Operational: will people use it? Schedule: can it finish in time?",
      "example": "A campus app may have developers (Technical), no budget for data (Economic), a data-protection obligation (Legal), reluctant staff (Operational) and a 2-week deadline (Schedule).",
      "keys": [
        "T: Technical.",
        "E: Economic.",
        "L: Legal.",
        "O: Operational.",
        "S: Schedule.",
        "Compare costs and measurable benefits in economic feasibility."
      ],
      "memory": "TELOS is a five-letter memory anchor. Say one question for each letter.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 4",
      "extra": "",
      "check": {
        "prompt": "Which TELOS category checks whether users will accept the system?",
        "choices": [
          "Economic",
          "Legal",
          "Operational",
          "Schedule"
        ],
        "answer": 2,
        "explanation": "Operational feasibility addresses readiness and adoption."
      }
    },
    {
      "id": "l27",
      "module": "feasibility",
      "title": "Additional Feasibility Dimensions",
      "academic": "Besides TELOS, organisations may assess organisational feasibility (alignment with institutional goals and policies), social feasibility (impact on people, jobs and acceptance) and environmental feasibility (power use, electronic waste and wider ecological effects).",
      "simple": "TELOS is central, but people also ask whether the system fits the organisation and benefits society responsibly.",
      "example": "A digitised payroll system may technically work but negatively affect staff roles or fail to match internal policies.",
      "keys": [
        "Organisational: strategic alignment.",
        "Social: impact on communities and workers.",
        "Environmental: resource usage and sustainability."
      ],
      "memory": "After TELOS, think ORGANISATION, SOCIETY, ENVIRONMENT.",
      "visual": "cards",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 4",
      "extra": "",
      "check": {
        "prompt": "Which additional feasibility dimension examines the effect on jobs and public acceptance?",
        "choices": [
          "Schedule",
          "Social",
          "Technical",
          "Database"
        ],
        "answer": 1,
        "explanation": "Social feasibility addresses impacts on people."
      }
    },
    {
      "id": "l28",
      "module": "feasibility",
      "title": "Feasibility Process and Report",
      "academic": "The feasibility process defines the business problem and solution, gathers information, evaluates feasibility dimensions, documents evidence in a feasibility report and recommends a go/no-go decision. A typical report includes Executive Summary, Background, Problem Statement, Proposed Solution, TELOS analysis, Risks, Recommendations and Conclusion.",
      "simple": "A manager should read the report and be able to justify why the project should or should not proceed.",
      "example": "A university considers an online transcript system. The report evaluates network readiness, project cost, privacy compliance, staff acceptance and delivery timeline.",
      "keys": [
        "Steps: define -> gather -> evaluate -> report -> decide.",
        "Benefit: less risk and wasted expenditure.",
        "Limitations: requires time and depends on accurate assumptions."
      ],
      "memory": "Feasibility process is a decision funnel: PROBLEM -> EVIDENCE -> TELOS -> REPORT -> DECISION.",
      "visual": "flow",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 4",
      "extra": "",
      "check": {
        "prompt": "Which is usually the final feasibility outcome?",
        "choices": [
          "A justified management go/no-go recommendation",
          "A completed source-code repository",
          "A user authentication token",
          "A bug fix only"
        ],
        "answer": 0,
        "explanation": "The report informs an evidence-based decision."
      }
    },
    {
      "id": "l29",
      "module": "feasibility",
      "title": "Verification vs Validation: early distinction",
      "academic": "Verification evaluates development work products against requirements and design specifications, usually without executing the software, asking “Are we building the software correctly?” Validation evaluates the running product against actual user needs, asking “Are we building the right software?”",
      "simple": "Verify the recipe against written instructions; validate that guests actually like the meal.",
      "example": "Verification: inspect the implementation plan for password rules. Validation: ask students to use the completed portal and confirm it meets their needs.",
      "keys": [
        "Verification: specs, reviews, designs, code inspection.",
        "Validation: execution, realistic user needs, UAT.",
        "Both contribute to quality assurance."
      ],
      "memory": "VeriFICATION = SPECIFICATION. ValiDATION = Does it satisfy users?",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 4",
      "extra": "",
      "check": {
        "prompt": "Which question does validation answer?",
        "choices": [
          "Are design pages numbered?",
          "Are we only reviewing code without running it?",
          "Did we use an IDE?",
          "Are we building the right software?"
        ],
        "answer": 3,
        "explanation": "Validation tests whether the real solution meets needs."
      }
    },
    {
      "id": "l30",
      "module": "sdlc",
      "title": "Munassan et al. (2010): four activities",
      "academic": "According to the CSC426 study guide, Munassan et al. (2010) describe a software development process as an abstract description defining how software is developed from a logical or strategic perspective. Its four core activities are Software Specification, Software Development, Software Validation and Software Evolution.",
      "simple": "First define what the software should do; build it; check it; then improve it as needs change.",
      "example": "A student app begins with course requirements (specification), gets coded (development), tested (validation), and later adds timetable support (evolution).",
      "keys": [
        "Specification: state requirements.",
        "Development: build software.",
        "Validation: check requirements and needs.",
        "Evolution: change and maintain over time."
      ],
      "memory": "S D V E = Specify, Develop, Validate, Evolve. This spelling/author attribution is as printed in the lecturer guide.",
      "visual": "flow",
      "author": "Munassan et al. | 2010",
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "Author spelling “Munassan” is retained as printed in the study guide and has not been independently verified.",
      "check": {
        "prompt": "According to Munassan et al. in the course guide, which activity comes after Validation?",
        "choices": [
          "Software Specification",
          "Requirement Elicitation",
          "Software Evolution",
          "Direct Conversion"
        ],
        "answer": 2,
        "explanation": "The sequence is Specification -> Development -> Validation -> Evolution."
      }
    },
    {
      "id": "l31",
      "module": "sdlc",
      "title": "Pressman et al. (2010): roadmap",
      "academic": "The CSC426 guide attributes to Pressman et al. (2010) a practical development roadmap expressed as Define, Build, Test and Deploy, aligned broadly with requirements, development, validation and operation/maintenance.",
      "simple": "Pressman gives an easy four-step sequence for explaining how a team delivers software.",
      "example": "A transport app team defines routes, builds the app, tests route matching and deploys it to users.",
      "keys": [
        "Define: requirements.",
        "Build: development.",
        "Test: validation.",
        "Deploy: delivery and operation.",
        "Course comparison: Munassan focuses Spec -> Dev -> Validation -> Evolution."
      ],
      "memory": "PRESSMAN = DEFINE, BUILD, TEST, DEPLOY; MUNASSAN = SPECIFY, DEVELOP, VALIDATE, EVOLVE.",
      "visual": "flow",
      "author": "Pressman et al. | 2010",
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "In the course guide, Pressman’s roadmap ends with?",
        "choices": [
          "Specify",
          "Deploy",
          "Design Review",
          "Interview"
        ],
        "answer": 1,
        "explanation": "The four labels are Define, Build, Test, Deploy."
      }
    },
    {
      "id": "l32",
      "module": "sdlc",
      "title": "SDLC and SDM",
      "academic": "The Software Development Life Cycle (SDLC) is a structured representation of activities leading to the development and continued operation of software, including planning, requirements, system design, implementation, testing, deployment and maintenance. A Software Development Model (SDM) is the methodology governing how these activities are arranged and performed.",
      "simple": "The SDLC says what stages exist; a model says how a project moves between them.",
      "example": "Waterfall completes stages sequentially; Agile cycles through requirements, code and tests repeatedly. Both organise the SDLC.",
      "keys": [
        "Planning includes feasibility.",
        "Requirements -> design -> code -> testing.",
        "Deployment makes available; maintenance supports.",
        "A model chooses sequencing and feedback."
      ],
      "memory": "SDLC = stages. SDM = method/route through stages.",
      "visual": "cycle",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "What is a Software Development Model?",
        "choices": [
          "A methodology for organising software development activities",
          "An electrical circuit",
          "An individual test case",
          "A list of student names"
        ],
        "answer": 0,
        "explanation": "The model determines how the lifecycle proceeds."
      }
    },
    {
      "id": "l33",
      "module": "sdlc",
      "title": "Waterfall: classical and linear",
      "academic": "The Waterfall Model is a sequential development approach in which each major phase is generally completed and reviewed before the next begins. The CSC426 notes give Classical Waterfall as Requirements -> Software/System Design -> Program Design -> Implementation and Unit Testing -> Integration/System Testing -> Operation/Maintenance.",
      "simple": "Think of building a house using an approved design: finish each stage before moving to the next. Changes later cost more.",
      "example": "A regulated finance application with well-defined specifications may use heavier sequential controls.",
      "keys": [
        "Classical flow in lecturer notes includes six major phases.",
        "Pure/linear variant also separates software and system requirements, architectural and detailed design.",
        "Strengths: controlled process, robust documentation.",
        "Weaknesses: rigid, time-consuming and costly when requirements change."
      ],
      "memory": "WATERFALL flows one way DOWN. Memorise: Requirements -> Design -> Program Design -> Code/Test -> Integration/System Test -> Maintain.",
      "visual": "waterfall",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "Which major weakness is associated with Waterfall?",
        "choices": [
          "Too little documentation",
          "Cannot use requirements",
          "It has no sequential phases",
          "Difficulty accommodating late changes"
        ],
        "answer": 3,
        "explanation": "Sequential control can make late changes expensive."
      }
    },
    {
      "id": "l34",
      "module": "sdlc",
      "title": "V-Shape model",
      "academic": "The V-Shape or Verification and Validation Model is a sequential software development model that links development and design stages with corresponding testing stages, forming two sides of a V and meeting at implementation. The lecturer notes emphasise a Planning stage, requirements, architectural and detailed design on the left, and unit, integration and system testing on the right.",
      "simple": "Every design level has a matching check. Plans descend toward coding and then tests rise toward system acceptance.",
      "example": "Detailed design maps to unit tests; architectural design maps to integration tests; requirements map to system/acceptance checks.",
      "keys": [
        "Left: verification and planning/design.",
        "Base: implementation or coding.",
        "Right: test levels that validate corresponding design.",
        "Like Waterfall, changes can be difficult."
      ],
      "memory": "V = VERIFY on left, VALIDATE on right. Coding lives at the bottom.",
      "visual": "vmodel",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "What is located at the base of the V-Model?",
        "choices": [
          "User training only",
          "Market pricing",
          "Implementation / coding",
          "Data privacy law"
        ],
        "answer": 2,
        "explanation": "The two arms join at implementation."
      }
    },
    {
      "id": "l35",
      "module": "sdlc",
      "title": "Evolutionary / Incremental models",
      "academic": "Evolutionary development produces and improves versions of software through repeated specification, development, validation and delivery. The CSC426 lecturer describes a rapid “sharp-sharp” approach and specifically instructs students to present Variant III: Software Specification -> Development -> Validation -> Deployment, yielding first, intermediate and final versions.",
      "simple": "Build a usable early version, test it, improve it, and repeat, instead of waiting for everything.",
      "example": "A shuttle app first shows routes; next adds live tracking; later adds notifications.",
      "keys": [
        "Variant I in notes: requirement specification, demo and development iteration.",
        "Variant II: throwaway prototype before final system.",
        "Variant III: repeat specification, development, validation, deployment for versions.",
        "Lecturer-specific exam direction: draw Variant III if asked."
      ],
      "memory": "FIRST -> INTERMEDIATE -> FINAL. For exam draw Variant III as the lecturer requested.",
      "visual": "iterations",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "The “single developer” contrast used in the guide is a course simplification; iterative approaches are also used by teams.",
      "check": {
        "prompt": "Which Evolutionary Model variant did the lecturer explicitly recommend for exam answers?",
        "choices": [
          "Variant I only",
          "Variant III",
          "The V-Model",
          "Classical Waterfall"
        ],
        "answer": 1,
        "explanation": "The site records a note to draw Variant III."
      }
    },
    {
      "id": "l36",
      "module": "sdlc",
      "title": "Spiral Model",
      "academic": "The Spiral Model is an iterative risk-driven software process model. Each cycle includes planning, risk analysis, development or engineering, and evaluation, with decisions about the next cycle. Risk analysis is a central distinguishing activity.",
      "simple": "Imagine walking around a spiral. Every circuit asks: what can go wrong, how can we reduce risk, what can we build and what did we learn?",
      "example": "For a banking payment system, analyse fraud/security risks before expanding the next version.",
      "keys": [
        "Plan objectives and constraints.",
        "Identify and mitigate risks.",
        "Build or prototype.",
        "Evaluate and repeat.",
        "Suitable for large, high-risk projects but can be costly."
      ],
      "memory": "SPIRAL = RISK at every turn. Four: Plan, Risk, Develop, Evaluate.",
      "visual": "spiral",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "What feature best distinguishes the Spiral Model?",
        "choices": [
          "Risk analysis in each iteration",
          "No evaluation at all",
          "One fixed testing step at the very end",
          "No planning"
        ],
        "answer": 0,
        "explanation": "The model is built around iterative risk assessment."
      }
    },
    {
      "id": "l37",
      "module": "sdlc",
      "title": "Agile / Scrum",
      "academic": "Agile development is an iterative and adaptive approach that delivers working software in short cycles while encouraging stakeholder feedback, team collaboration and response to changing requirements. The CSC426 notes express its flow as Envision -> Engage (Scrum/Sprint) -> Release -> Review.",
      "simple": "Instead of producing a whole huge app, a team works in short focused sprints, demonstrates working features and adjusts.",
      "example": "A campus app team releases registration first, then live trip search, adapting as students report issues.",
      "keys": [
        "Team collaboration and frequent feedback.",
        "Small usable releases.",
        "Frequent review and adaptation.",
        "Lecturer contrast: Agile is team-oriented whereas Evolutionary was described as executable by one person."
      ],
      "memory": "Four E-R steps: ENVISION, ENGAGE, RELEASE, REVIEW.",
      "visual": "iterations",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "Which Agile idea refers to short repeated work periods?",
        "choices": [
          "Cut-over",
          "Primary key",
          "Stress threshold",
          "Sprint"
        ],
        "answer": 3,
        "explanation": "Scrum uses sprints for iterative development."
      }
    },
    {
      "id": "l38",
      "module": "sdlc",
      "title": "Choosing a development model",
      "academic": "Software development models differ in sequencing, responsiveness to change, risk analysis and teamwork. Waterfall is sequential; V-Model explicitly pairs design with testing; Evolutionary grows through versions; Spiral iterates through risk analysis; Agile emphasises short team-based iterations and feedback.",
      "simple": "Pick a model that fits the project’s uncertainty, level of risk, team and delivery needs.",
      "example": "An uncertain student startup benefits from Agile. A high-risk banking platform benefits from explicit risk analysis such as Spiral. A stable government specification may favour Waterfall.",
      "keys": [
        "Waterfall: stable requirements.",
        "V-Model: traceable verification and tests.",
        "Evolutionary: progressive versions.",
        "Spiral: high-risk contexts.",
        "Agile: feedback, adaptability, team cycles."
      ],
      "memory": "Waterfall = ORDER; V = TEST PAIRS; Evolution = VERSIONS; Spiral = RISK; Agile = SPRINTS.",
      "visual": "compare",
      "author": null,
      "source": "CSC426 lecture study guide, Topic 5",
      "extra": "",
      "check": {
        "prompt": "A project with unusually high security risk should emphasise which model from the guide?",
        "choices": [
          "Pure Waterfall only",
          "Direct conversion",
          "Spiral",
          "Document sampling"
        ],
        "answer": 2,
        "explanation": "Spiral foregrounds risk analysis."
      }
    },
    {
      "id": "l39",
      "module": "implementation",
      "title": "System Development vs System Implementation",
      "academic": "System development is the process of constructing software from an approved system design by translating design models, algorithms, data structures and interfaces into executable programs. System implementation is the process of introducing the developed and tested system into the operational environment, installing it, migrating data, training users and converting business operations.",
      "simple": "Development = BUILD IT. Implementation = PUT IT INTO USE.",
      "example": "Building a course registration portal is development; installing it on university servers, transferring student records and training registry staff is implementation.",
      "keys": [
        "Development follows design.",
        "Implementation follows successful development and testing.",
        "Development focuses on constructing and integrating software.",
        "Implementation focuses on operational readiness and adoption."
      ],
      "memory": "BUILD vs BEGIN USING.",
      "visual": "compare",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which activity is system implementation rather than system development?",
        "choices": [
          "Writing the student login function",
          "Migrating live student records to a new portal",
          "Creating SQL tables in a dev database",
          "Coding a unit test"
        ],
        "answer": 1,
        "explanation": "Migrating operational data is an implementation activity."
      }
    },
    {
      "id": "l40",
      "module": "implementation",
      "title": "Preparing the Development Environment",
      "academic": "A development environment comprises the hardware, software, IDEs, programming languages, databases, libraries and version-control tools required to construct and test a software system.",
      "simple": "Before coding, assemble your workshop and ensure every tool works together.",
      "example": "For a Java hospital system: install JDK, IntelliJ or Eclipse, MySQL/PostgreSQL, libraries and Git.",
      "keys": [
        "Computer and memory resources.",
        "IDE such as IntelliJ, Eclipse, VS Code or PyCharm.",
        "Programming language and runtime.",
        "DBMS such as MySQL or PostgreSQL.",
        "Version control such as Git."
      ],
      "memory": "ENVIRONMENT = PC + IDE + LANGUAGE + DATABASE + GIT.",
      "visual": "cards",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "What is an example of version control in the development environment?",
        "choices": [
          "Git",
          "MySQL",
          "Android Studio",
          "Python interpreter"
        ],
        "answer": 0,
        "explanation": "Git stores and tracks code versions."
      }
    },
    {
      "id": "l41",
      "module": "implementation",
      "title": "Database Development",
      "academic": "Database development is the construction and configuration of the database structures described in the approved system design. It includes creating tables, defining fields and relationships, establishing primary and foreign keys, applying constraints, protecting data and inserting test records.",
      "simple": "Turn the planned record structure into a database that preserves accurate relationships.",
      "example": "A student information system may have Student, Course and Registration tables. Registration links a Student ID to a Course Code through foreign keys.",
      "keys": [
        "Primary key uniquely identifies a row.",
        "Foreign key links related tables.",
        "Constraints protect data integrity.",
        "Use sample test records before migrating real organisational records."
      ],
      "memory": "PK = WHO is this? FK = WHO is related?",
      "visual": "data",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which key links a registration record to a student record?",
        "choices": [
          "CSS class",
          "IP address",
          "Login password",
          "Foreign key"
        ],
        "answer": 3,
        "explanation": "Foreign keys establish relational references."
      }
    },
    {
      "id": "l42",
      "module": "implementation",
      "title": "Coding, Integration and Developer Testing",
      "academic": "Program development (coding) translates an approved design into executable software modules. Software integration combines independently developed modules so they operate as one system. Developer testing examines units and combinations early to uncover defects before comprehensive testing.",
      "simple": "Build different parts, connect them and check they communicate.",
      "example": "A fee-verification module must tell a course-registration module whether the student can proceed. Each module can pass alone but still fail at integration.",
      "keys": [
        "Typical modules: authentication, registration, payments and reporting.",
        "Unit testing checks isolated modules.",
        "Integration testing checks their data exchange.",
        "Integrated behaviour must match design."
      ],
      "memory": "CODE -> COMBINE -> CHECK.",
      "visual": "flow",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "When payment and registration modules fail to communicate, which test is most relevant?",
        "choices": [
          "Alphabetical sorting",
          "Direct conversion",
          "Integration testing",
          "Literature review"
        ],
        "answer": 2,
        "explanation": "Integration testing checks interfaces between modules."
      }
    },
    {
      "id": "l43",
      "module": "implementation",
      "title": "System Installation",
      "academic": "System installation is the deployment of a developed software system into its intended operational environment, including application installation, database and web-server configuration, network connections, supporting libraries, security settings and connectivity checks.",
      "simple": "Move the application from the developer’s machine to the place real users will use it.",
      "example": "Host the university portal on production servers, configure HTTPS and DB access, and test that students can reach it.",
      "keys": [
        "Install application and supporting software.",
        "Configure DB, web server and network.",
        "Set security and access controls.",
        "Test connectivity and readiness."
      ],
      "memory": "INSTALL = APP + DB + NETWORK + SECURITY + TEST.",
      "visual": "flow",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which task belongs to system installation?",
        "choices": [
          "Conducting first stakeholder interviews",
          "Configuring a production web server",
          "Drawing an Ishikawa diagram",
          "Choosing the problem statement"
        ],
        "answer": 1,
        "explanation": "The installation phase configures the operational environment."
      }
    },
    {
      "id": "l44",
      "module": "implementation",
      "title": "Data Migration",
      "academic": "Data migration is the transfer of data from an existing manual or computerised system to a new information system through extraction, cleansing, validation, transformation and loading into the new database.",
      "simple": "Take old records, fix bad entries, convert formats and import them safely.",
      "example": "An old Excel student list has duplicate matric numbers and different date formats. Before importing into a new portal, remove duplicates and standardise dates.",
      "keys": [
        "Extract data from source.",
        "Clean duplicates and mistakes.",
        "Validate correctness.",
        "Transform into new schema.",
        "Load and verify migrated records.",
        "Protect privacy and keep recovery backups."
      ],
      "memory": "Migration = EXTRACT -> CLEAN -> VALIDATE -> TRANSFORM -> LOAD -> VERIFY.",
      "visual": "data",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "In data migration, why is cleansing important?",
        "choices": [
          "To remove invalid, inconsistent and duplicate data",
          "To delete every original record",
          "To replace testing with guesses",
          "To remove all backups"
        ],
        "answer": 0,
        "explanation": "Dirty source data can compromise the new system."
      }
    },
    {
      "id": "l45",
      "module": "implementation",
      "title": "User Documentation and Training",
      "academic": "User documentation provides instructions for installation, operation and troubleshooting. A User Manual guides end users; Technical Documentation explains architecture, databases and maintenance; an Administrator Manual describes user permissions, backups, monitoring and security. User training prepares people to operate the new system effectively.",
      "simple": "A good app still fails if people do not know how to use it.",
      "example": "Train registry staff on approving course registration, give students a simple user manual and administrators backup procedures.",
      "keys": [
        "User manual: steps for end users.",
        "Technical documentation: system internals.",
        "Administrator manual: permissions, backups and monitoring.",
        "Training methods: workshops, demos, tutorials, videos.",
        "Training increases confidence and acceptance."
      ],
      "memory": "DOCS = USERS, DEVELOPERS, ADMINS. TRAIN before full switch.",
      "visual": "cards",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which document is most relevant for server backup procedures?",
        "choices": [
          "Student announcement poster",
          "Interview transcript",
          "Fishbone diagram",
          "Administrator Manual"
        ],
        "answer": 3,
        "explanation": "The administrator manual explains operations and maintenance tasks."
      }
    },
    {
      "id": "l46",
      "module": "implementation",
      "title": "System Conversion: four strategies",
      "academic": "System conversion is the process of replacing an existing operational system with a new system. The four common strategies are Direct (Cut-over), Parallel, Pilot and Phased conversion.",
      "simple": "Direct: switch everything at once. Parallel: run old and new together. Pilot: test one location. Phased: replace one feature at a time.",
      "example": "AAUA portal change: Direct = all departments switch Monday; Parallel = old and new run together; Pilot = Computer Science only; Phased = registration first, results later.",
      "keys": [
        "Direct: quick, cheaper; highest failure risk.",
        "Parallel: safer fallback, expensive duplicate work.",
        "Pilot: one branch first; slower overall rollout.",
        "Phased: features added gradually; needs careful coordination."
      ],
      "memory": "DP-P-P: Direct = DATE, Parallel = PAIR, Pilot = PLACE, Phased = PIECES.",
      "visual": "conversion",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which strategy runs old and new systems simultaneously?",
        "choices": [
          "Direct conversion",
          "Pilot conversion",
          "Parallel conversion",
          "Phased conversion"
        ],
        "answer": 2,
        "explanation": "Parallel operates both systems together before retiring the old one."
      }
    },
    {
      "id": "l47",
      "module": "implementation",
      "title": "Conversion choices: understand trade-offs",
      "academic": "Direct cut-over stops the old system and starts the new system immediately; parallel conversion operates both for a period; pilot conversion deploys the new system to one branch or unit first; phased conversion introduces the new system module by module.",
      "simple": "Choose based on operational risk, cost, organisational structure and deployment time.",
      "example": "A nationwide banking system might pilot one branch before wider rollout. A school service might move one module at a time so staff can adapt.",
      "keys": [
        "Direct: low duplicate cost, high risk.",
        "Parallel: low risk, high cost and workload.",
        "Pilot: contained rollout and learning.",
        "Phased: controlled, gradual deployment; more coordination."
      ],
      "memory": "Ask: ALL at once? BOTH together? ONE place? ONE function?",
      "visual": "conversion",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "An app is introduced only in the Faculty of Science first. Which strategy is used?",
        "choices": [
          "Direct conversion",
          "Pilot conversion",
          "Parallel conversion",
          "Phased conversion"
        ],
        "answer": 1,
        "explanation": "One branch or department first is pilot."
      }
    },
    {
      "id": "l48",
      "module": "implementation",
      "title": "Post-implementation Review",
      "academic": "A post-implementation review is a systematic assessment of a newly implemented system after it has been used for a period, to determine whether it meets user requirements, operates efficiently, achieves expected benefits and needs improvements.",
      "simple": "After launch, check whether it is actually helping people.",
      "example": "After a semester of online registration, compare student complaints, response times, staff satisfaction and error rates against original objectives.",
      "keys": [
        "Measure achieved project objectives.",
        "Evaluate user satisfaction.",
        "Identify operational defects and improvements.",
        "Assess performance and reliability.",
        "Recommend further training or system updates."
      ],
      "memory": "POST = AFTER launch; REVIEW = did it work in real life?",
      "visual": "cycle",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "When is a post-implementation review performed?",
        "choices": [
          "After the system has been operating for some time",
          "Before any requirements exist",
          "Only during initial interviews",
          "Before system design"
        ],
        "answer": 0,
        "explanation": "Review is performed after real operational use."
      }
    },
    {
      "id": "l49",
      "module": "implementation",
      "title": "Challenges and Best Practices",
      "academic": "Common development and implementation challenges include changing requirements, inadequate user participation, poor communication, technical incompatibility, data migration errors, user resistance, inadequate training and security threats. Best practices include clear requirements, approved design, coding standards, frequent testing, documentation, stakeholder participation, appropriate conversion and post-implementation review.",
      "simple": "Projects fail not just because of bad code but also people, processes and data.",
      "example": "A new result portal has excellent code but missing historical grades and untrained staff. The implementation still fails.",
      "keys": [
        "Risks: change, people, communication, technical, data, training, security.",
        "Countermeasures: clarity, consultation, testing, docs, training, review.",
        "Maintain the system after launch."
      ],
      "memory": "Build quality + Prepare people + Protect data + Learn after launch.",
      "visual": "cards",
      "author": null,
      "source": "System Development and Implementation Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which is a good implementation practice?",
        "choices": [
          "Avoid user participation",
          "Skip migration verification",
          "Never perform post-launch review",
          "Train users before the new system goes live"
        ],
        "answer": 3,
        "explanation": "Training supports successful adoption."
      }
    },
    {
      "id": "l50",
      "module": "testing",
      "title": "Software Testing: full definition",
      "academic": "Software testing is the systematic process of executing and evaluating a software system or one of its components with the objective of identifying defects and verifying that the software satisfies specified requirements. Inputs are supplied, outputs observed and actual results compared with expected results.",
      "simple": "Testing checks what the software actually does against what it is supposed to do.",
      "example": "Log into the student portal with a valid matric number: should succeed. Wrong password: should reject. If either outcome is wrong, investigate a defect.",
      "keys": [
        "Detect defects before deployment.",
        "Verify and validate requirements.",
        "Improve quality, reliability and security.",
        "Reduce failures and maintenance cost.",
        "Protect users in high-stakes systems."
      ],
      "memory": "TEST = INPUT -> RUN -> ACTUAL vs EXPECTED -> PASS/FAIL.",
      "visual": "compare",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "What does a software test compare?",
        "choices": [
          "Only font size and logo colour",
          "Two unrelated universities",
          "Actual and expected results",
          "Hardware cost and rent"
        ],
        "answer": 2,
        "explanation": "A test checks actual behaviour against expected behaviour."
      }
    },
    {
      "id": "l51",
      "module": "testing",
      "title": "Verification and Validation (V&V)",
      "academic": "Verification evaluates software work products during development to ensure conformity with specified requirements and design specifications, typically through requirements review, design review, inspections and walkthroughs without executing the program. Validation evaluates the running software to determine whether it meets real user requirements and intended purposes, through system, acceptance, beta and operational testing.",
      "simple": "Verification = built correctly according to plan. Validation = right thing for the actual user.",
      "example": "Inspect a result-calculation algorithm against the academic grading rule (verification). Ask lecturers to use the complete software and check real grading outcomes (validation).",
      "keys": [
        "Verification can find issues early without running code.",
        "Validation generally involves running and using software.",
        "Verification: “Are we building software correctly?”",
        "Validation: “Are we building the right software?”"
      ],
      "memory": "VErification checks spEcification; VAlidation checks Actual user need.",
      "visual": "compare",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which is a verification activity?",
        "choices": [
          "Beta testing by customers",
          "Code inspection",
          "User acceptance test",
          "Live deployment"
        ],
        "answer": 1,
        "explanation": "Code inspection can check conformity without execution."
      }
    },
    {
      "id": "l52",
      "module": "testing",
      "title": "Four Levels of Software Testing",
      "academic": "The four major testing levels are Unit Testing (individual units), Integration Testing (interacting modules), System Testing (the complete integrated system) and Acceptance Testing (the client or users confirming suitability for operational use).",
      "simple": "Test one brick, the wall, the entire house, then whether the house meets the owner’s needs.",
      "example": "Unit: validate calculateGPA(). Integration: GPA calculation with student database. System: run full result portal. Acceptance: actual staff approve it.",
      "keys": [
        "Unit: programmer or developer.",
        "Integration: developer or test engineer.",
        "System: often independent test team.",
        "Acceptance: client/end users.",
        "Sequence: Unit -> Integration -> System -> Acceptance."
      ],
      "memory": "U I S A = Unit, Integration, System, Acceptance.",
      "visual": "pyramid",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Who primarily performs acceptance testing?",
        "choices": [
          "Client or intended users",
          "Only the compiler",
          "Database engine alone",
          "Internet service provider"
        ],
        "answer": 0,
        "explanation": "Acceptance asks users if the complete system meets their needs."
      }
    },
    {
      "id": "l53",
      "module": "testing",
      "title": "Alpha versus Beta Testing",
      "academic": "Alpha testing is acceptance-related testing within the developer’s organisation under controlled conditions before broader release, usually by internal personnel or invited users. Beta testing lets selected real users evaluate software under real operating conditions before public release.",
      "simple": "Alpha = inside company. Beta = real users outside under everyday conditions.",
      "example": "Alpha: team checks a new app at the office. Beta: 100 students use a pre-release version on their actual phones.",
      "keys": [
        "Alpha: controlled, usually developer environment.",
        "Beta: limited real users, real environment.",
        "Both gather feedback before general availability."
      ],
      "memory": "ALPHA = AT HOME (developer). BETA = BEYOND (outside).",
      "visual": "compare",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which testing happens with selected users in their actual operating environment?",
        "choices": [
          "Alpha testing only",
          "Unit testing only",
          "Code inspection",
          "Beta testing"
        ],
        "answer": 3,
        "explanation": "Beta testing brings the release to real users."
      }
    },
    {
      "id": "l54",
      "module": "testing",
      "title": "Functional, Non-functional and Regression Testing",
      "academic": "Functional testing verifies that individual system functions behave according to requirements. Non-functional testing evaluates quality attributes such as performance, usability, reliability, security and compatibility. Regression testing is retesting after modifications to ensure previously working functions have not been broken.",
      "simple": "Functional asks “does it do it?” Non-functional asks “how well?” Regression asks “did the new change break an old feature?”",
      "example": "Changing a payment function accidentally breaks course registration. Running earlier course-registration tests again is regression testing.",
      "keys": [
        "Functional: functions, inputs, outputs.",
        "Non-functional: performance and quality.",
        "Regression: after a fix, update or change."
      ],
      "memory": "F = Feature; NF = Nature/quality; Regression = RECHECK after change.",
      "visual": "compare",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "What test should follow a payment fix to ensure registration still works?",
        "choices": [
          "Only initial installation",
          "Document sampling",
          "Regression testing",
          "Pilot conversion"
        ],
        "answer": 2,
        "explanation": "Regression testing catches faults introduced by a change."
      }
    },
    {
      "id": "l55",
      "module": "testing",
      "title": "Performance, Load and Stress Testing",
      "academic": "Performance testing measures efficiency under stated operating conditions, including response time, throughput and resource usage. Load testing evaluates performance at the expected workload. Stress testing deliberately exceeds expected capacity to locate breaking points and assess recovery.",
      "simple": "Performance: how fast? Load: how well at the normal busy limit? Stress: what happens if everyone floods the site?",
      "example": "Portal expects 8,000 concurrent students. Test 8,000 for load; push to 25,000 to assess stress behaviour.",
      "keys": [
        "Performance: efficiency and responsiveness.",
        "Load: expected/anticipated peak.",
        "Stress: beyond expected peak and failure behaviour.",
        "Set workload and success criteria explicitly."
      ],
      "memory": "LOAD = expected crowd. STRESS = beyond the crowd.",
      "visual": "chart",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "A test deliberately sends 25,000 users to a site designed for 8,000. It is?",
        "choices": [
          "Document sampling",
          "Stress testing",
          "Unit test only",
          "Requirement elicitation"
        ],
        "answer": 1,
        "explanation": "Stress pushes beyond normal capacity to reveal limits."
      }
    },
    {
      "id": "l56",
      "module": "testing",
      "title": "Security, Usability, Compatibility and Recovery",
      "academic": "Security testing examines protection against unauthorised access, disclosure, change or destruction. Usability testing evaluates ease of learning, navigation and task completion. Compatibility testing checks behaviour across devices, systems, browsers and environments. Recovery testing examines restoration after unexpected outages, crashes or failures.",
      "simple": "Four questions: is it safe? is it easy? does it work everywhere? does it recover after failure?",
      "example": "Portal: prevent a student from viewing another student’s grades (security); make results easy to locate (usability); test Chrome/Android (compatibility); restart after power outage without losing records (recovery).",
      "keys": [
        "Security: authentication, access control and encryption.",
        "Usability: accessibility, clarity, navigation.",
        "Compatibility: browser, OS, devices.",
        "Recovery: return to service and retain data after failure."
      ],
      "memory": "S U C R: Safe, Usable, Cross-platform, Recoverable.",
      "visual": "cards",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "What test evaluates restoration after a server crash?",
        "choices": [
          "Recovery testing",
          "Questionnaire testing",
          "Interview testing",
          "Site visitation"
        ],
        "answer": 0,
        "explanation": "Recovery testing studies restoration after failure."
      }
    },
    {
      "id": "l57",
      "module": "testing",
      "title": "Black-box Testing",
      "academic": "Black-box testing is a testing technique in which the tester ignores internal source code and structure, instead evaluating externally observable inputs and outputs against specifications. It is also called specification-based, behavioural or functional testing.",
      "simple": "You press buttons and check results without seeing how the app is written.",
      "example": "Enter a wrong password and check that the portal refuses access. You do not inspect its internal Java code.",
      "keys": [
        "Input -> unknown internal processing -> output.",
        "No program-code knowledge required.",
        "Strong user perspective and missing-feature detection.",
        "Cannot ensure all internal paths are covered."
      ],
      "memory": "BLACK box = CODE is HIDDEN.",
      "visual": "blackbox",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Does black-box testing require examining source code?",
        "choices": [
          "Yes, every if branch must be inspected",
          "Yes, only Java source counts",
          "Only with direct conversion",
          "No, it focuses on behaviour"
        ],
        "answer": 3,
        "explanation": "Black-box checks inputs and outputs without implementation knowledge."
      }
    },
    {
      "id": "l58",
      "module": "testing",
      "title": "White-box Testing",
      "academic": "White-box testing is a testing technique in which the tester examines the program’s internal structure, source code, algorithms, decisions and execution paths when designing tests. It is also called structural, glass-box, clear-box or code-based testing.",
      "simple": "Look inside the code and make sure different branches, loops and conditions actually run.",
      "example": "A login method has IF accountLocked THEN reject ELSE checkPassword. Write tests for both branches.",
      "keys": [
        "Code and structural knowledge required.",
        "Measures branches, statements and paths.",
        "Can find hidden logic errors.",
        "May miss requirements never coded."
      ],
      "memory": "WHITE box = CODE is VISIBLE.",
      "visual": "blackbox",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which technique checks branches and loops in source code?",
        "choices": [
          "Black-box testing",
          "Questionnaire",
          "White-box testing",
          "Pilot rollout"
        ],
        "answer": 2,
        "explanation": "White-box focuses on program structure and logic."
      }
    },
    {
      "id": "l59",
      "module": "testing",
      "title": "Grey-box Testing",
      "academic": "Grey-box testing combines aspects of black-box and white-box testing: testers have partial knowledge of internal structures but mainly examine external behaviour and selected interfaces. It is useful for web applications, APIs, database-backed systems, security and integration testing.",
      "simple": "You know some internals, but you still mostly test from outside.",
      "example": "An API tester knows the database schema and auth flow, then sends requests and verifies that user data remains correctly isolated.",
      "keys": [
        "Partial internal knowledge.",
        "Mixes observable behaviour with architectural understanding.",
        "Often useful in API, integration and security checks."
      ],
      "memory": "GREY = HALF the box is visible.",
      "visual": "compare",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which kind of testing assumes partial knowledge of internal code or architecture?",
        "choices": [
          "Black-box only",
          "Grey-box",
          "White-box only",
          "User training"
        ],
        "answer": 1,
        "explanation": "Grey-box uses selected internal knowledge."
      }
    },
    {
      "id": "l60",
      "module": "testing",
      "title": "Test Cases and Pass/Fail",
      "academic": "A test case is a documented set of inputs, execution conditions and expected results prepared to determine whether a software function performs correctly. Typical fields are Test Case ID, Objective, Input, Expected Result, Actual Result and Pass/Fail Status.",
      "simple": "A test case is a written experiment: what do you do, what should happen, what did happen?",
      "example": "TC001: Student logs in using correct details. Expected: dashboard opens. Actual: dashboard opens. Status: PASS.",
      "keys": [
        "Test ID.",
        "Objective.",
        "Input/test data.",
        "Expected result.",
        "Actual result.",
        "Status.",
        "A good test case is clear, repeatable and traceable."
      ],
      "memory": "ID -> OBJECTIVE -> INPUT -> EXPECTED -> ACTUAL -> STATUS.",
      "visual": "data",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which field determines pass/fail after a test is run?",
        "choices": [
          "Comparison of actual and expected results",
          "The project logo",
          "The developer’s age",
          "The file extension"
        ],
        "answer": 0,
        "explanation": "Pass/fail follows observed versus expected behaviour."
      }
    },
    {
      "id": "l61",
      "module": "testing",
      "title": "Common Automated Testing Tools",
      "academic": "Automated testing tools support repeatable checks of software. The lecture lists Selenium (web applications), JUnit (Java unit tests), PyTest (Python tests), Postman (API testing), Apache JMeter (performance and load testing) and TestNG (Java testing framework). Automation complements but does not replace manual testing.",
      "simple": "Choose the right tool for what needs to be tested.",
      "example": "You can test Java services with JUnit, HTTP endpoints with Postman, browser flows with Selenium and load with JMeter.",
      "keys": [
        "Selenium: web browser automation.",
        "JUnit and TestNG: Java testing.",
        "PyTest: Python.",
        "Postman: APIs.",
        "JMeter: performance and load.",
        "Manual testing still matters."
      ],
      "memory": "J = Java (JUnit, JMeter note: JMeter is load), P = Postman APIs and PyTest Python, S = Selenium screens.",
      "visual": "cards",
      "author": null,
      "source": "Software Testing Short Notes.pdf",
      "extra": "",
      "check": {
        "prompt": "Which tool is particularly associated with load/performance tests?",
        "choices": [
          "JUnit",
          "Microsoft Paint",
          "Git",
          "Apache JMeter"
        ],
        "answer": 3,
        "explanation": "JMeter is a load testing tool."
      }
    }
  ],
  "essay": [
    {
      "id": "e01",
      "module": "intro",
      "prompt": "Give the Pfleeger (1987) definition of Software Engineering and list its eight qualities.",
      "answer": "Pfleeger (1987), as described in these lecture notes, calls software engineering a strategy for producing quality software. S.O.F.T.W.A.R.E. stands for Scalability, Operability, Flexibility, Testability, Warranty, Availability, Reuseability and Extensibility.",
      "tags": [
        "author"
      ]
    },
    {
      "id": "e02",
      "module": "intro",
      "prompt": "Explain the 1968 software crisis and why software engineering emerged.",
      "answer": "The 1968 NATO conference in Germany highlighted uncontrolled costs, delayed deliveries, software failure, weak methods, deployment limitations and maintenance problems. These problems led to greater interest in disciplined software engineering practices.",
      "tags": [
        "author"
      ]
    },
    {
      "id": "e03",
      "module": "intro",
      "prompt": "Differentiate software from a software product.",
      "answer": "Software is executable program instructions. A software product is developed, tested and delivered for users with documentation, licensing or pricing as appropriate, versioning, maintenance and support.",
      "tags": []
    },
    {
      "id": "e04",
      "module": "intro",
      "prompt": "State six types of application software and give examples.",
      "answer": "Generic: office suite; Bespoke: institution-specific student portal; COTS: accounting package; Embedded: ATM software; Web-based: email in browser; Mobile: WhatsApp.",
      "tags": []
    },
    {
      "id": "e05",
      "module": "intro",
      "prompt": "Outline the five actors of the Software Development Flow and what they do.",
      "answer": "System Analyst: specification; System Designer: design; Programmer: coding and unit testing; Tester: unit, integration and system checks; Trainer: delivery and user training.",
      "tags": []
    },
    {
      "id": "e06",
      "module": "intro",
      "prompt": "Compare Pfleeger, Philips and IEEE definitions or emphases.",
      "answer": "Pfleeger (1987 in the notes): SOFTWARE quality attributes; Philips (2007 in the notes): method for producing good and large software; IEEE: systematic, disciplined, technical approach to software engineering.",
      "tags": [
        "author"
      ]
    },
    {
      "id": "e07",
      "module": "elicitation",
      "prompt": "Define Requirement Elicitation and explain why it matters.",
      "answer": "It identifies, discovers, extracts, clarifies and understands stakeholder needs and expectations. It matters because requirements must describe the real business problem before an appropriate system can be specified.",
      "tags": []
    },
    {
      "id": "e08",
      "module": "elicitation",
      "prompt": "Draw an Ishikawa diagram for delayed release of results with four branches.",
      "answer": "Place “Late release of results” at the head. Give four cause categories: lecturers, student registration, ICT infrastructure and registry processing; add plausible sub-causes on each. Note that an even number of branches is a lecturer-specific exam instruction.",
      "tags": [
        "diagram",
        "author"
      ]
    },
    {
      "id": "e09",
      "module": "elicitation",
      "prompt": "Differentiate open-ended and close-ended questionnaires.",
      "answer": "Open-ended permits unrestricted responses but is harder to tabulate. Close-ended offers fixed choices, enabling quick comparison and statistical summaries but with less detail.",
      "tags": []
    },
    {
      "id": "e10",
      "module": "elicitation",
      "prompt": "List the steps involved in carrying out a good interview.",
      "answer": "Schedule, prepare questions and logistics, introduce yourself and the mission, seek consent, ask and probe, take notes or record with permission, thank the participant and review evidence afterward.",
      "tags": []
    },
    {
      "id": "e11",
      "module": "elicitation",
      "prompt": "State two advantages and two disadvantages of observation.",
      "answer": "Advantages: direct evidence and relatively low cost; can corroborate other methods. Disadvantages: workers may alter behaviour while watched and observing can disrupt scheduled activities.",
      "tags": []
    },
    {
      "id": "e12",
      "module": "elicitation",
      "prompt": "List five core fact-finding techniques.",
      "answer": "Sampling existing documents, site visitation, observation, questionnaire and interview.",
      "tags": []
    },
    {
      "id": "e13",
      "module": "analysis",
      "prompt": "Explain the DIPM process.",
      "answer": "Detect inconsistency; Identify missing/ambiguous requirements; Prioritize requirements; Model requirements. Include one example for each.",
      "tags": []
    },
    {
      "id": "e14",
      "module": "analysis",
      "prompt": "Differentiate functional, non-functional and domain requirements with one example each.",
      "answer": "Functional: the portal shall allow course registration. Non-functional: response time under three seconds. Domain: a university rule limits registration to the permitted credit units.",
      "tags": []
    },
    {
      "id": "e15",
      "module": "analysis",
      "prompt": "Name and explain the three groups of non-functional requirements.",
      "answer": "Product: quality such as speed/security/reliability. Organisational: internal environment/development/operational constraints. External: regulatory, legislative and ethical obligations.",
      "tags": []
    },
    {
      "id": "e16",
      "module": "analysis",
      "prompt": "What is a Domain Requirement, and how does it differ from a Non-Functional Requirement?",
      "answer": "Domain requirements originate in a specific field, such as medical triage rules. Non-functional requirements normally express quality attributes and operational constraints such as performance, reliability or security.",
      "tags": []
    },
    {
      "id": "e17",
      "module": "feasibility",
      "prompt": "Define a Feasibility Study and state the question it answers.",
      "answer": "A systematic evaluation of technical possibility, economic benefit, legal compliance, operational suitability and timeline realism. Main question: Should the proposed system be built?",
      "tags": []
    },
    {
      "id": "e18",
      "module": "feasibility",
      "prompt": "Explain TELOS with one relevant practical question per dimension.",
      "answer": "T: Do we have the necessary technology/skills? E: Are benefits worth costs? L: Is it compliant? O: Will users adopt it? S: Can it finish before the deadline?",
      "tags": []
    },
    {
      "id": "e19",
      "module": "feasibility",
      "prompt": "Assess a bank mobile app under Technical, Economic, Legal, Operational and Schedule feasibility.",
      "answer": "Technical: secure engineering skills and infrastructure. Economic: expected savings/revenue versus project cost. Legal: applicable banking and data-protection duties. Operational: customer trust and staff readiness. Schedule: whether launch is realistic.",
      "tags": []
    },
    {
      "id": "e20",
      "module": "feasibility",
      "prompt": "Differentiate Verification and Validation.",
      "answer": "Verification checks work products against specifications, often through non-executing reviews (“build it correctly”). Validation tests the running system against actual needs (“build the right thing”).",
      "tags": []
    },
    {
      "id": "e21",
      "module": "feasibility",
      "prompt": "List feasibility report contents, two benefits and two limitations.",
      "answer": "Report: executive summary, background, problem, solution, TELOS assessment, risks, recommendations, conclusion. Benefits: lower risk, better decisions. Limits: time/cost, uncertain assumptions.",
      "tags": []
    },
    {
      "id": "e22",
      "module": "sdlc",
      "prompt": "According to Munassan et al. (2010), name the four development activities, then give Pressman’s roadmap.",
      "answer": "Munassan: Software Specification, Development, Validation, Evolution. Pressman: Define, Build, Test, Deploy. Both attributions are from the CSC426 notes.",
      "tags": [
        "author"
      ]
    },
    {
      "id": "e23",
      "module": "sdlc",
      "prompt": "Draw and explain Classical Waterfall. Give two advantages and two disadvantages.",
      "answer": "Requirements -> System/Software Design -> Program Design -> Implementation/Unit Tests -> Integration/System Tests -> Operations/Maintenance. Advantages: controlled, documented. Disadvantages: rigid, high cost/time of late changes.",
      "tags": [
        "diagram"
      ]
    },
    {
      "id": "e24",
      "module": "sdlc",
      "prompt": "Draw and explain the V-Model and show corresponding test levels.",
      "answer": "Left arm: planning, requirements, architecture and detailed design. Base: coding. Right arm: unit, integration, system and acceptance testing, paired against relevant design stages.",
      "tags": [
        "diagram"
      ]
    },
    {
      "id": "e25",
      "module": "sdlc",
      "prompt": "Explain the Evolutionary Model Variant III preferred by your lecturer.",
      "answer": "Repeat Specification -> Development -> Validation -> Deployment to create first, intermediate and final versions. The guide explicitly prefers a drawing of Variant III.",
      "tags": [
        "diagram"
      ]
    },
    {
      "id": "e26",
      "module": "sdlc",
      "prompt": "Compare Evolutionary and Agile, including their lecturer-specific descriptions.",
      "answer": "Both can iterate. Course guide calls Evolutionary rapid and potentially single-person, and Agile time-bound and team-based with Envision, Engage/Sprint, Release, Review. The personal/team contrast is a simplification.",
      "tags": []
    },
    {
      "id": "e27",
      "module": "sdlc",
      "prompt": "Why is the Spiral Model suitable for high-security-risk projects?",
      "answer": "It requires risk analysis during each cycle along with planning, development and evaluation. Risk treatment is central rather than a late afterthought.",
      "tags": [
        "diagram"
      ]
    },
    {
      "id": "e28",
      "module": "implementation",
      "prompt": "Define system development and system implementation. Explain five differences.",
      "answer": "Development constructs executable programs from an approved design, focusing on coding, database work and integration. Implementation introduces the tested system to real operation, focusing on installation, migration, documentation, training and conversion.",
      "tags": []
    },
    {
      "id": "e29",
      "module": "implementation",
      "prompt": "Discuss major activities in system development.",
      "answer": "Prepare environment; implement database; code separate modules; integrate modules; perform developer unit and integration tests.",
      "tags": []
    },
    {
      "id": "e30",
      "module": "implementation",
      "prompt": "Explain why database development is important.",
      "answer": "It creates structured records, keys, relationships, constraints and data protection measures to support reliable storage/retrieval while preventing duplication and maintaining integrity.",
      "tags": []
    },
    {
      "id": "e31",
      "module": "implementation",
      "prompt": "What is software integration? Give an example.",
      "answer": "Combining independently developed modules into a functional whole, such as a course registration module requiring successful fee-verification from a payment module.",
      "tags": []
    },
    {
      "id": "e32",
      "module": "implementation",
      "prompt": "Explain the steps and importance of data migration.",
      "answer": "Extract from old system; clean; validate; transform to the new schema; load; verify integrity. It preserves useful old information so users can work effectively in the new system.",
      "tags": []
    },
    {
      "id": "e33",
      "module": "implementation",
      "prompt": "Explain documentation and user training in successful implementation.",
      "answer": "User manual teaches tasks, technical docs cover architecture and maintenance, admin manual explains permissions/backups. Training through demos/workshops/tutorials reduces errors and improves adoption.",
      "tags": []
    },
    {
      "id": "e34",
      "module": "implementation",
      "prompt": "Describe the four system conversion strategies and one strength/weakness of each.",
      "answer": "Direct: immediate switch, cheap but risky. Parallel: both systems, safer but costly. Pilot: one department, reduces deployment risk but slower. Phased: module by module, manageable but coordination-heavy.",
      "tags": []
    },
    {
      "id": "e35",
      "module": "implementation",
      "prompt": "Explain a post-implementation review and what it assesses.",
      "answer": "After operational use, evaluate whether project objectives, user satisfaction, performance and benefits were achieved, identify problems and recommend improvements or training.",
      "tags": []
    },
    {
      "id": "e36",
      "module": "implementation",
      "prompt": "Discuss five implementation challenges and remedies.",
      "answer": "Changing requirements -> change control; migration errors -> reconciliation; user resistance -> involvement/training; technical incompatibility -> early environment testing; security risks -> access controls, updates and review.",
      "tags": []
    },
    {
      "id": "e37",
      "module": "testing",
      "prompt": "Define software testing and explain five objectives.",
      "answer": "Systematic execution and evaluation against requirements using actual versus expected outcomes. Objectives: find defects, check requirements, validate functionality, improve quality/reliability, assess security/performance, reduce cost and improve trust.",
      "tags": []
    },
    {
      "id": "e38",
      "module": "testing",
      "prompt": "Distinguish verification from validation and give two activities of each.",
      "answer": "Verification: specification conformity, code inspection and design review. Validation: end-user needs, system testing and user acceptance/beta testing.",
      "tags": []
    },
    {
      "id": "e39",
      "module": "testing",
      "prompt": "Name the four software testing levels, their purposes and typical testers.",
      "answer": "Unit: single modules, developers. Integration: interacting modules, developers/test engineers. System: complete product, independent testers. Acceptance: business needs, users/client.",
      "tags": []
    },
    {
      "id": "e40",
      "module": "testing",
      "prompt": "Differentiate alpha and beta testing.",
      "answer": "Alpha is performed in controlled/developer environments by internal staff or invited users. Beta uses selected real users in their actual environment before broad release.",
      "tags": []
    },
    {
      "id": "e41",
      "module": "testing",
      "prompt": "Compare functional, non-functional and regression testing.",
      "answer": "Functional verifies features; non-functional evaluates qualities; regression reruns old checks after changes to ensure nothing previously working was broken.",
      "tags": []
    },
    {
      "id": "e42",
      "module": "testing",
      "prompt": "Explain load versus stress testing with registration-portal examples.",
      "answer": "Load: expected 8,000 simultaneous student registrations. Stress: exceed intended capacity, e.g. 25,000, and watch failure/recovery. Both can include performance metrics.",
      "tags": []
    },
    {
      "id": "e43",
      "module": "testing",
      "prompt": "Differentiate black-box, white-box and grey-box testing.",
      "answer": "Black: input-output behaviour without internal code knowledge. White: tests statements, branches and structures using full source knowledge. Grey: partial internal knowledge with mainly external or interface testing.",
      "tags": []
    },
    {
      "id": "e44",
      "module": "testing",
      "prompt": "Define a test case and list its essential fields.",
      "answer": "A documented test scenario with preconditions, inputs and expected results, usually including Test ID, objective, input, expected result, actual result, and status.",
      "tags": []
    },
    {
      "id": "e45",
      "module": "testing",
      "prompt": "Discuss security, usability, compatibility and recovery testing.",
      "answer": "Security: protect access/data. Usability: ease of use. Compatibility: correct across browsers/devices/OS. Recovery: restore services and data after failures.",
      "tags": []
    },
    {
      "id": "e46",
      "module": "testing",
      "prompt": "Match six testing tools to their uses.",
      "answer": "Selenium = web UI; JUnit and TestNG = Java; PyTest = Python; Postman = APIs; Apache JMeter = load/performance.",
      "tags": []
    }
  ],
  "extras": [
    {
      "id": "x01",
      "module": "intro",
      "prompt": "Which of the following is associated with Philips in the notes?",
      "choices": [
        "2007, quality and large software",
        "1987, fishbone",
        "1968, testing pyramid",
        "2010, data migration"
      ],
      "answer": 0,
      "explanation": "The study guide links Philips to 2007 and good, large software."
    },
    {
      "id": "x02",
      "module": "intro",
      "prompt": "What did NATO confer in the course history section?",
      "choices": [
        "2007 Scrum certification",
        "1987 database migration",
        "2010 API performance",
        "1968 software crisis discussions"
      ],
      "answer": 3,
      "explanation": "The guide cites a NATO software engineering meeting in 1968."
    },
    {
      "id": "x03",
      "module": "intro",
      "prompt": "What quality means adapting software to increased users?",
      "choices": [
        "Availability",
        "Warranty",
        "Scalability",
        "Testability"
      ],
      "answer": 2,
      "explanation": "Scalability is capacity to handle growth."
    },
    {
      "id": "x04",
      "module": "intro",
      "prompt": "A calculator installed inside an ATM is an example of?",
      "choices": [
        "Bespoke desktop publishing",
        "Embedded software",
        "Generic web browser",
        "System analyst"
      ],
      "answer": 1,
      "explanation": "Embedded software runs inside devices."
    },
    {
      "id": "x05",
      "module": "elicitation",
      "prompt": "What is the fish head labelled with?",
      "choices": [
        "The problem or effect",
        "Developer salary",
        "Programming language",
        "Solution logo"
      ],
      "answer": 0,
      "explanation": "The head represents the problem being analysed."
    },
    {
      "id": "x06",
      "module": "elicitation",
      "prompt": "The course note’s fishbone drawing guidance prefers which branch counts?",
      "choices": [
        "Always exactly 3",
        "Only 5 or 7",
        "No more than 1",
        "An even number, such as 4 or 6"
      ],
      "answer": 3,
      "explanation": "The lecturer-specific instruction is even branch counts; general fishbone diagrams have no such strict rule."
    },
    {
      "id": "x07",
      "module": "elicitation",
      "prompt": "Which method is sometimes described as “eye witness”?",
      "choices": [
        "Data migration",
        "Stress testing",
        "Observation",
        "Requirement modelling"
      ],
      "answer": 2,
      "explanation": "Observation means watching work directly."
    },
    {
      "id": "x08",
      "module": "elicitation",
      "prompt": "A workshop that gathers developers and end users is an example of?",
      "choices": [
        "Direct cut-over",
        "JAD / facilitated elicitation",
        "White-box testing",
        "Database normalisation"
      ],
      "answer": 1,
      "explanation": "JAD sessions bring stakeholders together."
    },
    {
      "id": "x09",
      "module": "analysis",
      "prompt": "Which DIPM stage creates diagrams?",
      "choices": [
        "Model",
        "Detect",
        "Identify",
        "Prioritize"
      ],
      "answer": 0,
      "explanation": "M stands for Model."
    },
    {
      "id": "x10",
      "module": "analysis",
      "prompt": "Which type requires a portal response within 2 seconds?",
      "choices": [
        "Functional only",
        "Domain expert mandate only",
        "Pilot conversion",
        "Non-functional"
      ],
      "answer": 3,
      "explanation": "Timing is a quality requirement."
    },
    {
      "id": "x11",
      "module": "analysis",
      "prompt": "Regulatory requirements imposed by law appear under which non-functional category in the lecture?",
      "choices": [
        "Product",
        "Organisation",
        "External",
        "Program Design"
      ],
      "answer": 2,
      "explanation": "External requirements include regulatory and legislative constraints."
    },
    {
      "id": "x12",
      "module": "feasibility",
      "prompt": "Which TELOS letter represents the project deadline?",
      "choices": [
        "L",
        "S",
        "O",
        "T"
      ],
      "answer": 1,
      "explanation": "S is schedule feasibility."
    },
    {
      "id": "x13",
      "module": "feasibility",
      "prompt": "Which feasibility type compares financial costs and benefits?",
      "choices": [
        "Economic",
        "Legal",
        "Operational",
        "Schedule"
      ],
      "answer": 0,
      "explanation": "Economic feasibility checks cost versus expected value."
    },
    {
      "id": "x14",
      "module": "feasibility",
      "prompt": "An organisation refuses to train its staff. Which TELOS category is immediately at risk?",
      "choices": [
        "Technical",
        "Economic",
        "Legal",
        "Operational"
      ],
      "answer": 3,
      "explanation": "Operational feasibility evaluates readiness and adoption."
    },
    {
      "id": "x15",
      "module": "sdlc",
      "prompt": "Which model makes risk analysis its defining feature?",
      "choices": [
        "Waterfall",
        "V-Shape",
        "Spiral",
        "Direct conversion"
      ],
      "answer": 2,
      "explanation": "Spiral cycles explicitly analyse risks."
    },
    {
      "id": "x16",
      "module": "sdlc",
      "prompt": "Which model pairs design phases to matching testing phases?",
      "choices": [
        "Classical Waterfall only",
        "V-Shape",
        "Pilot conversion",
        "Document sampling"
      ],
      "answer": 1,
      "explanation": "V-Shape associates design with corresponding tests."
    },
    {
      "id": "x17",
      "module": "sdlc",
      "prompt": "What is the first of Pressman’s roadmap actions in the guide?",
      "choices": [
        "Define",
        "Deploy",
        "Test",
        "Build"
      ],
      "answer": 0,
      "explanation": "The sequence is Define, Build, Test, Deploy."
    },
    {
      "id": "x18",
      "module": "sdlc",
      "prompt": "In the lecturer’s Agile sequence, what follows Release?",
      "choices": [
        "Feasibility",
        "Direct conversion",
        "White-box",
        "Review"
      ],
      "answer": 3,
      "explanation": "Agile: Envision -> Engage -> Release -> Review."
    },
    {
      "id": "x19",
      "module": "implementation",
      "prompt": "Which conversion has highest risk when an immediate switch fails?",
      "choices": [
        "Parallel",
        "Pilot",
        "Direct",
        "Phased"
      ],
      "answer": 2,
      "explanation": "Direct stops the old system at once."
    },
    {
      "id": "x20",
      "module": "implementation",
      "prompt": "Which conversion replaces individual modules step by step?",
      "choices": [
        "Parallel",
        "Phased",
        "Pilot",
        "Direct"
      ],
      "answer": 1,
      "explanation": "Phased changes one function or module at a time."
    },
    {
      "id": "x21",
      "module": "implementation",
      "prompt": "Moving inconsistent spreadsheet dates into a standard schema is?",
      "choices": [
        "Data transformation",
        "Alpha testing",
        "Waterfall design",
        "Ishikawa analysis"
      ],
      "answer": 0,
      "explanation": "Transformation reshapes source data for the new system."
    },
    {
      "id": "x22",
      "module": "implementation",
      "prompt": "Who primarily uses technical documentation?",
      "choices": [
        "Only casual students",
        "Only survey respondents",
        "Only external advertisers",
        "Developers and system administrators"
      ],
      "answer": 3,
      "explanation": "Technical documentation supports software maintenance and architecture."
    },
    {
      "id": "x23",
      "module": "testing",
      "prompt": "Which test level follows integration before acceptance?",
      "choices": [
        "User training",
        "Site visitation",
        "System testing",
        "Feasibility"
      ],
      "answer": 2,
      "explanation": "Unit -> Integration -> System -> Acceptance."
    },
    {
      "id": "x24",
      "module": "testing",
      "prompt": "Which is a typical white-box target?",
      "choices": [
        "User satisfaction survey",
        "Branch coverage",
        "Training attendance",
        "Financial budget"
      ],
      "answer": 1,
      "explanation": "White-box tests structural execution paths."
    },
    {
      "id": "x25",
      "module": "testing",
      "prompt": "Which tool is associated with Java unit testing?",
      "choices": [
        "JUnit",
        "Postman",
        "Selenium only",
        "Photo editor"
      ],
      "answer": 0,
      "explanation": "JUnit is a common Java testing framework."
    },
    {
      "id": "x26",
      "module": "testing",
      "prompt": "Testing a changed feature to ensure unchanged features still work is?",
      "choices": [
        "Alpha only",
        "Pilot conversion",
        "Direct migration",
        "Regression testing"
      ],
      "answer": 3,
      "explanation": "Regression catches breakage after modifications."
    },
    {
      "id": "x27",
      "module": "testing",
      "prompt": "Checking an app across Chrome, Firefox and Android is?",
      "choices": [
        "User elicitation",
        "Load only",
        "Compatibility testing",
        "System conversion"
      ],
      "answer": 2,
      "explanation": "Compatibility checks multiple environments."
    },
    {
      "id": "x28",
      "module": "testing",
      "prompt": "Which test uses only a subset of internal knowledge?",
      "choices": [
        "White-box only",
        "Grey-box testing",
        "Black-box only",
        "Feasibility"
      ],
      "answer": 1,
      "explanation": "Grey-box sits between black and white-box approaches."
    }
  ],
  "authors": [
    {
      "name": "Pfleeger",
      "year": "1987",
      "concept": "S.O.F.T.W.A.R.E. quality attributes",
      "quote": "Strategy for producing quality software",
      "association": "P = Properties of SOFTWARE",
      "detail": "Scalability; Operability; Flexibility; Testability; Warranty; Availability; Reuseability; Extensibility.",
      "note": "Year and particular phrasing are from lecturer guide."
    },
    {
      "name": "Philips",
      "year": "2007",
      "concept": "Good and large quality software",
      "quote": "Method of producing good and large software",
      "association": "PH = Product at High scale",
      "detail": "Contrasts with Pfleeger’s eight quality attributes.",
      "note": "Attributed as “Philips” in the lecturer guide; exact external publication not verified."
    },
    {
      "name": "IEEE",
      "year": "Not specified",
      "concept": "Systematic, disciplined and technical approach",
      "quote": "Systematic, disciplined and technical approach to quality software",
      "association": "IEEE = organised engineering approach",
      "detail": "A professional engineering body; focus is the engineering discipline.",
      "note": "The study guide paraphrases IEEE; do not treat its wording as an independently verified verbatim IEEE standard."
    },
    {
      "name": "Kaoru Ishikawa",
      "year": "Not specified",
      "concept": "Cause-and-effect / fishbone diagram",
      "quote": "Graphical analysis of a problem and its possible causes",
      "association": "Ishikawa = fishbone",
      "detail": "Head: problem; bones: potential causes.",
      "note": "Even-count bone instruction is lecturer-specific."
    },
    {
      "name": "Munassan et al.",
      "year": "2010",
      "concept": "Specify, Develop, Validate, Evolve",
      "quote": "Software Specification → Development → Validation → Evolution",
      "association": "M = MOVES through 4 activities",
      "detail": "Process description and sequence as provided in study guide.",
      "note": "Author spelling unverified; copied from course study guide."
    },
    {
      "name": "Pressman et al.",
      "year": "2010",
      "concept": "Define, Build, Test, Deploy",
      "quote": "Define → Build → Test → Deploy",
      "association": "Pressman = PROJECT roadmap",
      "detail": "Four-part roadmap in the study guide.",
      "note": "Year and formulation are attributed in guide."
    },
    {
      "name": "NATO conference",
      "year": "1968",
      "concept": "Software crisis and discipline",
      "quote": "Concerns about costs, delivery, failures, development and maintenance",
      "association": "1968 = industry wake-up",
      "detail": "Historical software engineering conference.",
      "note": "Historical event, not a definition by an individual author."
    }
  ],
  "meta": {
    "course": "CSC 426 · Software Engineering",
    "lecturer": "Dr O. O. Ajayi",
    "deadline": "2026-11-14T07:00:00+01:00",
    "created": "2026-11-13",
    "brand": "APEXHUB",
    "guide": "https://csc426-studyguide.vercel.app",
    "note": "Academic wording from the user-provided study guide and the two supplementary PDF short notes; learning analogies and additional practice questions are authored study aids. Some scholar/date labels reflect course notes and should not be treated as independently verified original quotations."
  }
};
